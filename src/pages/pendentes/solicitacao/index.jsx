import Barra from "../components/bar";
import Container from '../../../components/container'
import ModalComponent from "./modalAdicionar";
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, saveMovimentacao, fetchCadastro } from '../../../store/modules/app/actions';
import TableComponent from "./table";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "../../../components/autocomplete";

const Saida = () => {

    const { components, materials, cadastro, online } = useSelector(state => state.app)

    useEffect(() => {
        if(online) {
            dispatch(fetchCadastro())
        }
    }, [])

    const navigate = useNavigate()


    const { cadastros } = cadastro

    const dispatch = useDispatch()

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }

    const [ movData, setMovData ] = useState({})

    const id_mov = Math.floor(Math.random() * 99999999)

    const mateiralsToSave = materials?.map(material => {
        return {
            ...material,
            id_mov: id_mov,
            id_resp_sol: movData.id_resp_sol,
            tipo: movData.tipo,
            id_centro_origem: movData.id_centro_origem,
            id_centro_destino: movData.id_centro_destino,
            data: new Date(),
            id_usuario: 19859,
            Status: 'SOLICITADO'
        }
    })

    const dataSolicitante = cadastros.colaborador?.map(s => {
        return {
            id: s.matricula,
            nome: `${s.matricula} - ${s.nome}`
        }
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setMovData({...movData, [name]: value})
        console.log(movData)
    }

    const handleSave = () => {
        mateiralsToSave.forEach(material => {
            const id_resp_sol = document.querySelector('[name="id_resp_sol"]').value?.replace(/[^0-9]/g, '')
            dispatch(saveMovimentacao({...material, id_resp_sol}))
            navigate('/pendentes')
        })
        // navigate('/pendentes')
    }

    return (
        <>
            <Container>

            <ModalComponent />
            <Barra>

                {/* VOLTAR */}
                <a
                style={{cursor: 'pointer'}}
                onClick={() => navigate('/pendentes')}
                >Voltar</a>

                {/* ADICIONAR */}
                <a
                style={{cursor: 'pointer'}}
                onClick={() => setComponent('saidaModal', true)}
                >Adicionar item</a>

                {/* SALVAR */}
                <a
                style={{cursor: 'pointer'}}
                onClick={() => handleSave()}
                >
                    {mateiralsToSave.length > 0 ? 'Salvar' : ''}
                </a>

            </Barra>

            <div
            style={{
                width: '50%',
                margin: 'auto',
                borderBottom: '1px solid black',
            }}
            >
                {/* solicitante */}
                <div
                className="form-group"
                >
                    <b>Solicitante</b>
                    <Autocomplete 
                    data={dataSolicitante}
                    name="id_resp_sol"
                    onChange={handleInputChange}
                    value={movData.id_resp_sol}
                    />
                </div>

                {/* tipo */}
                <div
                className="form-group"
                >
                    <b>Tipo</b>
                    <select
                    name="tipo"
                    className="form-control"
                    value={movData.tipo_mov}
                    onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        {
                            cadastros.tipo_mov?.map(t => {
                                return <option value={t.tipo}>{t.tipo} - {t.descricao}</option>
                            })
                        }

                    </select>

                </div>

                {/* origen */}
                <div
                className="form-group"
                >
                    <b>Origem</b>
                    <select
                    name="id_centro_origem"
                    className="form-control"
                    onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        {
                            cadastros.centro?.map(c => {
                                return <option value={c.id_centro}>{c.id_centro} - {c.descricao}</option>
                            })
                        }
                    </select>
                </div>

                {/* destino */}
                <div
                className="form-group"
                >
                    <b>Destino</b>
                    <select
                    name="id_centro_destino"
                    className="form-control"
                    onChange={handleInputChange}
                    >
                       <option value="">Selecione</option>
                        {
                            cadastros.centro?.map(c => {
                                return <option value={c.id_centro}>{c.id_centro} - {c.descricao}</option>
                            })
                        }
                    </select>
                </div>



            </div>

            <TableComponent data={materials}/>

            </Container>

        </>
    );
};

export default Saida;