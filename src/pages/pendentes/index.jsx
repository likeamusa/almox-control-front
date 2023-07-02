import Barra from "./components/bar"
import Container from "../../components/container";
import TableComponent from "./components/table"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { updateApp, listAll, fetchCadastro } from "../../store/modules/app/actions"
import ModaAutorizar from "./components/modalAutorizar"
import { useNavigate } from "react-router-dom"

const Pendentes = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { components } = useSelector(state => state.app)

    const { movimentacoes } = useSelector(state => state.app)

    const movimentacoesFiltradas = movimentacoes?.filter(movimentacao => movimentacao.status === "Solicitado")
    
    useEffect(() => {
        dispatch(updateApp({components: {...components, headerVisible: true, printing: false}}))
    }, [])

    return (
        <Container>
            <ModaAutorizar />
            <Barra>
                <a
                style={{cursor: "pointer"}}
                onClick={() => navigate('/solicitacao')}
                >Solicitar
                </a>
                
            </Barra>
            <TableComponent data={movimentacoesFiltradas} />
        </Container>
    )
}

export default Pendentes