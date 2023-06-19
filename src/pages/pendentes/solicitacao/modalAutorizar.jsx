import { Modal } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, autorizarMovimentacao } from '../../../store/modules/app/actions';
import { useState } from 'react';

const { Header, Title, Body, Footer } = Modal;

const ModalComponent = () => {

    const { components, materials, material } = useSelector(state => state.app)
    
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

    const handleAutorizar = () => {
        dispatch(updateApp({
            materials: [...materials, material]
        }))
        
        setComponent('saidaModal', false)
    }

    return (
        <Modal 
        open={components.saidaModal} 
        onClose={() => setComponent('saidaModal', false)}
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
                            <input
                            type="text"
                            name="id_material"
                            className="form-control"
                            onChange={handleInputChange}
                            />
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
                            <input
                            disabled={false}
                            type="number"
                            name="n_ca"
                            className="form-control"
                            onChange={handleInputChange}
                            />
                        </div>

                        {/* Numero do lote */}
                        <b>Número do lote</b>
                        <div
                        className="form-group"
                        >
                            <input
                            disabled={false}
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
                            disabled={false}
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
                            disabled={false}
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
                onClick={() => handleAutorizar()}
                style={{cursor: 'pointer'}}
                >Confirmar</a>
            </Footer>
        </Modal>
    )
};

export default ModalComponent;