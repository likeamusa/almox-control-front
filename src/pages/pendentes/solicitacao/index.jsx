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

    const tipo_usuario = localStorage.getItem('@almox-control/tipo_usuario')

    const centroUsuario = localStorage.getItem('@almox-control/centro')

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
            n_nota: movData.n_nota,
            id_centro_origem: movData.id_centro_origem,
            id_centro_destino: movData.id_centro_destino,
            data: new Date(),
            id_usuario: localStorage.getItem('@almox-control/matricula'),
            Status: 'SOLICITADO'
        }
    })
    console.log(materials)

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
            dispatch(updateApp({
                'materials': []
            }))
        })
    }

    const materialsWithDescription = materials?.map(material => {
        
        const materialDescription = cadastros.material?.find(m => m.id === parseInt(material.id_material))?.descricao
        const materialUnidade = cadastros.material?.find(m => m.id === parseInt(material.id_material))?.umd
        return {
            ...material,
            descricao: materialDescription,
            umd: materialUnidade
        }
    })

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

                <div></div>

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
                    autoFocus
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

                {/* n_nota */}
                {
                    movData.tipo === "N" &&
                    <div
                    className="form-group"
                    >
                        <b>Nº Nota</b>
                        <input
                        autoComplete="off"
                        type="text"
                        name="n_nota"
                        className="form-control"
                        onChange={handleInputChange}
                        />
                    </div>
                }

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
                            tipo_usuario === 'admin' ?
                            cadastros.centro?.map(c => {
                                return <option value={c.id_centro}>{c.id_centro} - {c.descricao}</option>
                            })
                            :
                            <option value={centroUsuario}>{centroUsuario} - {cadastros.centro?.find(c => c.id_centro === centroUsuario)?.descricao}</option>
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

            {/* ADICIONAR */}
            <a
                style={{
                    cursor: 'pointer',
                    alignSelf: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
                onClick={() => setComponent('saidaModal', true)}
                >Adicionar item</a>

            <TableComponent data={materialsWithDescription}/>

            </Container>

        </>
    );
};

export default Saida;