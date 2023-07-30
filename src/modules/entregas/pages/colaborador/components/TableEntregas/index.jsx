import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export default function TableEntregasComponent({ data }) {

    return (

        <Table
        autoHeight
        data={data}
        bordered
        cellBordered
        >
            <Column width={120} align='center'>
                <HeaderCell className='font-bold'>Código</HeaderCell>
                <Cell dataKey="material" />
            </Column>

            <Column flexGrow={2} align='center'>
                <HeaderCell className='font-bold'>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Quantidade</HeaderCell>
                <Cell dataKey="quantidade" />
            </Column>

            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Data de Entrega</HeaderCell>
                <Cell dataKey="data_entrega" />
            </Column>

            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Próxima Entrega</HeaderCell>
                <Cell dataKey="proxima_entrega" />
            </Column>

            {/* status */}
            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Status</HeaderCell>
                <Cell dataKey="status" />
            </Column>

            <Column width={200} align='center'>
                <HeaderCell className='font-bold'>Ações</HeaderCell>
                <Cell>
                    {rowData => {
                        return (
                            <span>
                                <a
                                onClick={() => {alert(`Devolver ${rowData.descricao}`)}}
                                className='cursor-pointer text-blue-500 hover:text-blue-600'
                                >Devolução</a>
                                {' | '}
                                <a
                                onClick={() => {alert(`Trocar ${rowData.descricao}`)}}
                                className='cursor-pointer text-blue-500 hover:text-blue-600'
                                >Troca</a>
                            </span>

                        );
                    }}
                </Cell>
            </Column>

        </Table>
    )
}