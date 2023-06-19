import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listAll } from '../../store/modules/app/actions'
import { updateApp } from '../../store/modules/app/actions'
import { useNavigate } from 'react-router-dom'

import TableComponent from './components/table'
import Barra from './components/bar'

const Movimentacoes = () => {

    const dispatch = useDispatch()

    const navigator = useNavigate()

    useEffect(() => {
        dispatch(listAll())
    }, [])

    const { components, movimentacoes } = useSelector(state => state.app)
    
    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }
        
    const movimentacoesFiltradas = movimentacoes?.filter(movimentacao => movimentacao.status === "Autorizada")    

    return (
       <div
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
                onClick={() => alert("exportar")}>
                    Exportar
                </a>

            </Barra>

            <TableComponent data={movimentacoesFiltradas} />
            
       </div>
    )
}

export default Movimentacoes