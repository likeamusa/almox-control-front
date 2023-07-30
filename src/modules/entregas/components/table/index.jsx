import { Table } from 'rsuite'
import { useNavigate } from 'react-router-dom'

const { Column, HeaderCell, Cell, Pagination } = Table;

export default function TableComponent({ data, config, ...props }) {

    const navigate = useNavigate()
    
    return (
        <Table height={400} data={data} cellBordered bordered>
                {/* matricula */}
                <Column width={120} align="center">
                    <HeaderCell className='font-bold'>Matricula</HeaderCell>
                    <Cell dataKey="matricula">
                        {rowData => {
                            return (
                                <a
                                onClick={() => navigate(`colaboradores/${rowData.matricula}`)}
                                className='cursor-pointer text-blue-500 hover:text-blue-600'
                                >{rowData.matricula}</a>
                            );
                        }}
                    </Cell>
                </Column>

                {/* nome */}
                <Column flexGrow={1} align='center'>
                    <HeaderCell className='font-bold'>Nome</HeaderCell>
                    <Cell dataKey="nome" />
                </Column>

                {/* funcao */}
                <Column flexGrow={1} align='center'>
                    <HeaderCell className='font-bold'>Função</HeaderCell>
                    <Cell dataKey="funcao" />
                </Column>

                {/* status */}
                <Column width={100} align='center'>
                    <HeaderCell className='font-bold'>Status</HeaderCell>
                    <Cell dataKey="status" />
                </Column>

            </Table>
    )
}