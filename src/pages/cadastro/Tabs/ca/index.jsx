import Barra from "../../bar"
import TableComponent from "../../table";
import ModalComponent from "../../modal";
import { useSelector, useDispatch } from "react-redux";
import { updateApp, saveCA } from "../../../../store/modules/app/actions";


const Ca = () => {

    const dispatch = useDispatch()

    const { cadastro } = useSelector(state => state.app)

    const { components } = cadastro

    const { cadastroModalData } = components


    const setComponent = (component, value) => {
        dispatch(updateApp({
            cadastro: {...cadastro, components: {...components, [component]: value}}}
        ))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setComponent("cadastroModalData", {...cadastroModalData, [name]: value})
        console.log(cadastroModalData)
    }

    const handleSave = () => {
        dispatch(saveCA(cadastroModalData))
    }
    
    return (
        <>

            <ModalComponent 
            onClickProp={e => {
                setComponent("cadastroModal", false)
                handleSave()
            }} 
            onInputChange={handleInputChange}
            cadastroName={'ca'} 
            />



            <Barra>
                <div></div>
                <a
                style={{cursor: "pointer"}}
                onClick={() => setComponent("cadastroModal", true)}
                >Adicionar
                </a>
            </Barra>

            <TableComponent 
            cadastroName={'ca'} 
            onEdit={e => {
                console.log(e)
            }}
            />
        </>
    )

}

export default Ca;