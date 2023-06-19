import { Modal } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, autorizarMovimentacao } from '../../../store/modules/app/actions';
import { useState } from 'react';

const { Header, Title, Body, Footer } = Modal;

const ModalComponent = ({data}) => {

    const { components, movimentacaoASerAutorizada } = useSelector(state => state.app)
    
    const dispatch = useDispatch()

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }

    const [mov, setMov] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setMov({...mov, [name]: value})
        console.log(mov)
    }

    const movimentacaoAutorizada = {
        ...movimentacaoASerAutorizada,
        id_resp_aut: mov.id_resp_aut,
        status: 'AUTORIZADA'
    }

    const handleConfirm = () => {
        dispatch(autorizarMovimentacao(movimentacaoAutorizada))
        setComponent('modalAutorizacao', false)
    }


    return (
        <Modal 
        open={components.modalAutorizacao} 
        onClose={() => {
            setComponent('modalAutorizacao', false)
            dispatch(updateApp({
                movimentacaoASerAutorizada: {}
            }))
        }}

        >
            <Header>
                <Title>Autorizar movimentação</Title>
            </Header>
            <Body>
                <div

                >
                    <h6>{movimentacaoASerAutorizada?.id_mov}</h6><br />
                    <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px'
                    }}
                    >

                    <span>Solicitante: <b>{movimentacaoASerAutorizada?.id_resp_sol} - {movimentacaoASerAutorizada?.solicitante}</b></span><br />
                    <span>Material: <b>{movimentacaoASerAutorizada?.id_material} - {movimentacaoASerAutorizada?.material}</b></span><br />
                    <span>Tipo de mov: <b> {movimentacaoASerAutorizada?.tipo_mov}</b></span><br />
                    <span>Unidade: <b>{movimentacaoASerAutorizada?.umd}</b></span><br />
                    <span>Qtde: <b>{movimentacaoASerAutorizada?.qtde}</b></span><br />
                    </div>
                    <br />
                    <div
                    className="form-group"
                    >
                        {/* material */}
                        <b>Autorizador</b>
                        <div
                        className="form-group"
                        >
                            <input
                            type="text"
                            name="id_resp_aut"
                            className="form-control"
                            onChange={handleInputChange}
                            placeholder='matricula'
                            />
                        </div>
                        
                    </div>
                </div>
            </Body>
            <Footer>
                <a 
                onClick={() => handleConfirm()}
                style={{cursor: 'pointer'}}
                >
                    {mov.id_resp_aut ? 'Confirmar' : ''}
                </a>
            </Footer>
        </Modal>
    )
};

export default ModalComponent;