import { Table } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp } from '../../../../src/store/modules/app/actions';
import { useNavigate } from 'react-router-dom';


const { Column, HeaderCell, Cell } = Table;

const TableComponent = ({ data }) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { components } = useSelector(state => state.app)

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }

    const formatDate = (date) => {
        const data = new Date(date)
        const dia = data.getDate().toString().padStart(2, '0')
        const mes = (data.getMonth()+1).toString().padStart(2, '0')
        const ano = data.getFullYear()
        return `${dia}/${mes}/${ano}`
    }

    const formatTime = (date) => {
        const data = new Date(date)
        const hora = data.getHours().toString().padStart(2, '0')
        const minuto = data.getMinutes().toString().padStart(2, '0')
        return `${hora}:${minuto}`
    }

    const formatedDateData = data?.map(item => {
        return {
            ...item,
            data: `${formatDate(item.data)} - ${formatTime(item.data)}`
        }
    })

    const excludeRepeated = formatedDateData?.filter((item, index, self) => {
        return index === self.findIndex((t) => (
            t.id_mov === item.id_mov
        ))
    })

    const matSolConcat = excludeRepeated?.map(item => {
        return {
            ...item,
            solicitante: `${item.id_resp_sol} - ${item.solicitante}`
        }
    })

    const height = window.innerHeight - 250;

    return (
        <Table
            data={matSolConcat}
            height={height}
            loading={components.movLoading}
            >
                {/* id_mov */}
                <Column width={110} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id_mov">
                        {rowData => {
                            return (
                                <a 
                                href={`/movimentacoes/${rowData.id_mov}`}
                                // open in new tab
                                target="_blank"
                                style={{cursor: 'pointer'}}
                                >
                                    {rowData.id_mov}
                                </a>
                            );
                        }}
                    </Cell>
                </Column>
                
                {/* tipo */}
                <Column flexGrow={1} align="center">
                    <HeaderCell>Tipo</HeaderCell>
                    <Cell dataKey="tipo_mov" />
                </Column>

                {/* mov */}
                <Column width={120} align="center">
                    <HeaderCell>Mov.</HeaderCell>
                    <Cell dataKey="mov" />
                </Column>


                {/* origem */}
                <Column flexGrow={1} align="center">
                    <HeaderCell>Origem</HeaderCell>
                    <Cell dataKey="id_centro_origem" />
                </Column>

                {/* destino */}
                <Column flexGrow={1} align="center">
                    <HeaderCell>Destino</HeaderCell>
                    <Cell dataKey="id_centro_destino" />
                </Column>

                {/* solicitante */}
                <Column flexGrow={1} align="center">
                    <HeaderCell>Solicitante</HeaderCell>
                    <Cell dataKey="solicitante" />
                </Column>


                {/* data */}
                <Column width={220} align="center">
                    <HeaderCell>Data/Hora</HeaderCell>
                    <Cell dataKey="data" />
                </Column>

                
                {/* acoes */}
                <Column width={100} fixed="right">
                    <HeaderCell></HeaderCell>
                    <Cell>
                        {rowData => {
                            return (
                                <span>
                                    <a
                                    onClick={() => {
                                        dispatch(updateApp({
                                            movimentacaoASerAutorizada: rowData
                                        }))  
                                        setComponent('modalAutorizacao', true)
                                    }}
                                    style={{cursor: 'pointer'}}
                                    >
                                        Autorizar
                                    </a>
                                </span>
                            );
                        }}
                    </Cell>
                </Column>
            
            </Table>
    )
};

export default TableComponent;