import { Table } from 'rsuite'

const { Column, HeaderCell, Cell } = Table

export default function HistoryColabMaterialTableComponent({ data }) {

    return (
        <Table
            height={300}
            data={data}
            bordered
            cellBordered
        >
            {/* indice */}
            <Column width={50} align='center'>
                <HeaderCell className='font-bold'>#</HeaderCell>
                <Cell>
                    {(rowData, rowIndex) => {
                        return (
                            <span>{rowIndex + 1}</span>
                        );
                    }}
                </Cell>
            </Column>

            <Column width={100} align="center" >
                <HeaderCell className='font-bold'>Material</HeaderCell>
                <Cell dataKey="material" />
            </Column>

            <Column flexGrow={1} align="center">
                <HeaderCell className='font-bold'>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className='font-bold'>Quantidade</HeaderCell>
                <Cell dataKey="quantidade" />
            </Column>

            <Column width={200} align="center">
                <HeaderCell className='font-bold'>Data de Entrega</HeaderCell>
                <Cell dataKey="data_entrega" />
            </Column>

        </Table>
    )
}