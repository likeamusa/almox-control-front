import Barra from "../../bar"
import TableComponent from "../../table";
import ModalComponent from "../../modal";
import { useSelector, useDispatch } from "react-redux";
import { updateApp, saveMaterial } from "../../../../store/modules/app/actions";
import jsonToExcel from "../../../../utils/jsonToExcel";


const Material = () => {

    const dispatch = useDispatch()

    const { cadastro } = useSelector(state => state.app)

    const { components } = cadastro

    const { cadastroModalData } = components


    const setComponent = (component, value) => {
        dispatch(updateApp({
            cadastro: { ...cadastro, components: { ...components, [component]: value } }
        }
        ))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setComponent("cadastroModalData", { ...cadastroModalData, [name]: value })
        console.log(cadastroModalData)
    }

    const handleSave = () => {
        dispatch(saveMaterial(cadastroModalData))
    }

    const materialToCount = cadastro.cadastros.material.map((material) => {
        return {
            código: material.id,
            descriação: material.descricao,
            unidade: material.umd,
            quantidade: ""
        }
    })

    return (
        <>

            <ModalComponent
                onClickProp={e => {
                    handleSave()
                    setComponent("cadastroModal", false)
                }}
                onInputChange={handleInputChange}
                cadastroName={'material'}
            />



            <Barra>
                <div></div>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setComponent("cadastroModal", true)}
                >Adicionar
                </a>

                {/*Exportar*/}
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => jsonToExcel(materialToCount, "material")}
                >Exportar
                </a>


            </Barra>

            <TableComponent
                cadastroName={'material'}
                onEdit={e => {
                    console.log(e)
                }}
            />
        </>
    )

}

export default Material;