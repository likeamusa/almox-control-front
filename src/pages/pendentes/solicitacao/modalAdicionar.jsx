import { AutoComplete, Modal } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, autorizarMovimentacao, apiRequest } from '../../../store/modules/app/actions';
import { useEffect, useState } from 'react';
import Autocomplete from '../../../components/autocomplete';

const { Header, Title, Body, Footer } = Modal;

const ModalComponent = () => {

    const { app } = useSelector(state => state)

    const { components, materials, material, cadastro } =  app
    
    const dispatch = useDispatch()


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
        console.log(material)
    }

    const handleConfirmar = () => {
        const id_material = document.querySelector('input[name="id_material"]').value?.split(' - ')[0]
        console.log(id_material)
        dispatch(updateApp({
            materials: [...materials, {...material, id_material}]
        }))
        
        setComponent('saidaModal', false)
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
                            data={materialData}
                            name="id_material"
                            placeholder="Digite o nome do material"
                            onChange={handleInputChange}
                            />
                            <button
                            className='btn btn-primary'
                            onClick={() => {
                                const material_id = document.querySelector('input[name="id_material"]').value?.split(' - ')[0]
                                if(!material_id) return alert('Selecione um material')
                                dispatch(apiRequest({
                                    method: 'GET',
                                    endpoint: 'c_as',
                                    param: material_id,
                                }))
                                // dispatch(apiRequest({
                                //     method: 'GET',
                                //     endpoint: 'notas',
                                //     param: material_id,
                                // }))
                                // dispatch(apiRequest({
                                //     method: 'GET',
                                //     endpoint: 'laudos',
                                //     param: material_id,
                                // }))
                                // dispatch(apiRequest({
                                //     method: 'GET',
                                //     endpoint: 'lotes',
                                //     param: material_id,
                                // }))

                            }}
                            >
                                Pesquisar
                            </button>
                        </div>

                        {/* Quantidade */}
                        <div
                        className="form-group"
                        >
                            <b>Quantidade</b>
                            <input
                            type="text"
                            name="qtde"
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
                                {app.c_as?.map((item) => (
                                    <option
                                    key={item?.c_a_}
                                    value={item.c_a_}
                                    >
                                        {`${item.c_a_} - ${new Date(item.vencimento).toLocaleDateString()}`}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Numero do lote */}
                        <b>Número do lote</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={true}
                            type="number"
                            name="n_lote"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div>

                        {/* Numero do laudo */}
                        <b>Número do laudo</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={true}
                            type="number"
                            name="n_laudo"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div>

                        {/* n_nota */}
                        <b>Número da nota</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={true}
                            type="number"
                            name="n_nota"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div>

                        
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