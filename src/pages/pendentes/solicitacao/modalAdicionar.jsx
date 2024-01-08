import { AutoComplete, Modal } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, autorizarMovimentacao, apiRequest } from '../../../store/modules/app/actions';
import { useEffect, useState } from 'react';
import Autocomplete from '../../../components/autocomplete';
import api from '../../../services/api';

const { Header, Title, Body, Footer } = Modal;

const ModalComponent = () => {

    const [caResData, setCaResData] = useState([])

    useEffect(() => {
        api.get('/ca_materials')
        .then((response) => {
            setCaResData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const { app } = useSelector(state => state)

    const { components, materials, material, cadastro } =  app
    
    const dispatch = useDispatch()

    const [caData, setCaData] = useState([]) || []

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        
        dispatch(updateApp({
            material: {...material, [name]: value}
        }))
        
        const id_material = document.querySelector('input[name="id_material"]').value?.split(' - ')[0]

        const filteredCas = caResData?.filter((item) => item.materialId === Number(id_material))

        setCaData(filteredCas)
    }

    const handleConfirmar = () => {
        const id_material = document.querySelector('input[name="id_material"]').value?.split(' - ')[0]
        console.log(id_material)
        dispatch(updateApp({
            materials: [...materials, {...material, id_material, n_ca: document.querySelector('select[name="n_ca"]').value}]
        }))
        
        setComponent('saidaModal', false)
        setCaData([])
    }

    const materialData = cadastro?.cadastros?.material?.map((item) => {
        return {
            id: item.id,
            nome: `${item.id} - ${item.descricao}`
        }
    })

    const allClear = () => {
        dispatch(updateApp({
            ...app,
            c_as: [],
            nota: [],
            laudo: [],
            lote: [],

        }))
    }

    return (
        <Modal 
        open={components.saidaModal} 
        onClose={() => {
            allClear()
            setComponent('saidaModal', false)
            
        }}
        >
            <Header>
                <Title>Adicionar item</Title>
            </Header>
            <Body>
                <div

                >
                    <div
                    className="form-group"
                    >
                        {/* material */}
                        <b>Material</b>
                        <div
                        className="form-group"
                        >
                            <Autocomplete
                            autoFocus
                            data={materialData}
                            name="id_material"
                            placeholder="Digite o nome do material"
                            onChange={handleInputChange}
                            />
                        </div>

                        {/* Quantidade */}
                        <div
                        className="form-group"
                        >
                            <b>Quantidade</b>
                            <input
                            type="number"
                            min={1}
                            name="qtde"
                            autoComplete='off'
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div>

                        {/* Numero do c.a. */}
                        <b>Número do c.a.</b>
                        <div
                        className="form-group"
                        >
                            <select
                            name="n_ca"
                            className="form-control"
                            onChange={handleInputChange}
                            >
                                <option value="">Selecione</option>
                                {caData?.map((item) => (
                                    <option
                                    key={item?.caId}
                                    value={item.c_a}
                                    >
                                        {`${item.c_a} - ${new Date(item.c_a_.vencimento).toLocaleDateString()}`}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Numero do lote */}
                        {/* <b>Número do lote</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={true}
                            autoComplete='off'
                            type="number"
                            name="n_lote"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div> */}

                        {/* Numero do laudo */}
                        {/* <b>Número do laudo</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={true}
                            autoComplete="off"
                            type="number"
                            name="n_laudo"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div> */}

                        {/* n_nota */}
                        {/* <b>Número da nota</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={true}
                            autoComplete="off"
                            type="number"
                            name="n_nota"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div> */}

                        
                    </div>
                </div>
            </Body>
            <Footer>
                <a 
                onClick={() => handleConfirmar()}
                style={{cursor: 'pointer'}}
                >Confirmar</a>
            </Footer>
        </Modal>
    )
};

export default ModalComponent;