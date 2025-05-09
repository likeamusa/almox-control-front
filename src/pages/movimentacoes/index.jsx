import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listAll } from '../../store/modules/app/actions'
import { updateApp } from '../../store/modules/app/actions'
import { useNavigate } from 'react-router-dom'

import jsonToExcel from '../../utils/jsonToExcel'

import Container from "../../components/container";
import TableComponent from './components/table'
import Barra from './components/bar'

const Movimentacoes = () => {

    const dispatch = useDispatch()

    const { components, movimentacoes } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(updateApp({components: {...components, headerVisible: true, printing: false}}))
    }, [])
        
    const movimentacoesFiltradas = movimentacoes?.filter(movimentacao => movimentacao.status === "Autorizada")    

    return (
       <Container
         style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
         }}
       >    

            <Barra>
                {/* exportar */}
                <a
                style={{cursor: 'pointer'}}
                onClick={() => {
                    jsonToExcel(movimentacoesFiltradas, 'movimentacoes')
                }}>
                    Exportar
                </a>

            </Barra>

            <TableComponent data={movimentacoesFiltradas} />
            
       </Container>
    )
}

export default Movimentacoes