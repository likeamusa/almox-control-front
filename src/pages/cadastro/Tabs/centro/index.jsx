import Barra from "../../bar"
import TableComponent from "../../table";
import ModalComponent from "../../modal";
import { useSelector, useDispatch } from "react-redux";
import { updateApp } from "../../../../store/modules/app/actions";

const Centro = () => {

    const dispatch = useDispatch()

    const { cadastro } = useSelector(state => state.app)

    const { components } = cadastro

    const setComponent = (component, value) => {
        dispatch(updateApp({
            cadastro: {...cadastro, components: {...components, [component]: value}}}
        ))
    }
    
    return (
        <>
            <ModalComponent cadastroName={'centro'} />
            <Barra>
                <div></div>
                <a
                style={{cursor: "pointer"}}
                onClick={() => setComponent("cadastroModal", true)}
                >Adicionar
                </a>
            </Barra>
            <TableComponent cadastroName={'centro'} />
        </>
    )

}

export default Centro;