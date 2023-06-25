import { Modal } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, autorizarMovimentacao, fetchCadastro } from '../../../store/modules/app/actions';
import { useState, useEffect } from 'react';
import Autocomplete from '../../../components/autocomplete';

const { Header, Title, Body, Footer } = Modal;

const ModalComponent = ({data}) => {

    const { components, movimentacaoASerAutorizada, cadastro, online } = useSelector(state => state.app)

    useEffect(() => {
        if(online) {
            dispatch(fetchCadastro())
        }
    }, [])

    
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
    }

    const handleConfirm = () => {
        const id_resp_aut = document.querySelector('input[name="id_resp_aut"]').value?.split(' - ')[0]
        dispatch(autorizarMovimentacao({...movimentacaoAutorizada, id_resp_aut: parseInt(id_resp_aut)}))
        console.log({...movimentacaoAutorizada, id_resp_aut: parseInt(id_resp_aut)})
        setComponent('modalAutorizacao', false)
    }

    const colaboradoresData = cadastro.cadastros?.colaborador?.map((item) => {
        return {
            id: item.matricula,
            nome: `${item.matricula} - ${item.nome}`
        }
    })


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
                        <Autocomplete
                        data={colaboradoresData}
                        name="id_resp_aut"
                        placeholder="Digite a matrícula ou nome do autorizador"
                        onChange={handleInputChange}
                    
                        />
                        
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