import { Modal } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp } from '../../store/modules/app/actions';

const { Header, Title, Body, Footer } = Modal;

const ModalComponent = ( {cadastroName, onClickProp, onInputChange} ) => {

    const dispatch = useDispatch()

    const { cadastro } = useSelector(state => state.app)

    const { components } = cadastro

    const { cadastros } = cadastro

    const setComponent = (component, value) => {
        dispatch(updateApp({
            cadastro: {...cadastro, components: {...components, [component]: value}}}
        ))
    }

    const filteredCadastro = Object.keys(cadastros[cadastroName][0]).filter(key => key !== "createdAt" && key !== "updatedAt")

    return (
        
        <Modal
        open={components.cadastroModal}
        onClose={() => {
            setComponent("cadastroModal", false)
        }}
        >
            <Header>
                <Title>Adicionar {cadastroName}</Title>
            </Header>
            <Body>
                {
                    filteredCadastro?.map((key, index) => (
                        <div
                        key={index}
                        className="form-group"
                        >
                            <b>{key}</b>
                            <div
                            className="form-group"
                            >
                                <input
                                type={key === "validade" || key === "data" || key === "vencimento" || key === "data_admissao" ? "date" : "text" }
                                name={key}
                                autoFocus={index === 0 ? true : false}
                                autoComplete='off'
                                value={cadastro.components.cadastroModalData[key]}
                                className="form-control"
                                onChange={onInputChange}
                                />
                            </div>
                        </div>
                    ))
                }
            </Body>
            <Footer>
                <a
                style={{cursor: "pointer"}}
                onClick={e => {
                    onClickProp(e)
                }}
                >
                    Confirmar
                </a>
            </Footer>
        </Modal>
    )
};

export default ModalComponent;