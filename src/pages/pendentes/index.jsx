import Barra from "./components/bar"
import TableComponent from "./components/table"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { updateApp, listAll, fetchCadastro } from "../../store/modules/app/actions"
import ModaAutorizar from "./components/modalAutorizar"

const Pendentes = () => {

    const dispatch = useDispatch()

    const { components } = useSelector(state => state.app)

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }

    const { movimentacoes } = useSelector(state => state.app)

    const movimentacoesFiltradas = movimentacoes?.filter(movimentacao => movimentacao.status === "Solicitado")

    useEffect(() => {
        dispatch(listAll())
    }, [])

    return (
        <>
            <ModaAutorizar />
            <Barra>
                <a
                style={{cursor: "pointer"}}
                onClick={() => setComponent("pagina", "solicitacao")}
                >Solicitar
                </a>
            </Barra>
            <TableComponent data={movimentacoesFiltradas} />
        </>
    )
}

export default Pendentes