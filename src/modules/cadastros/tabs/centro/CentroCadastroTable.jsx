import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export default function ({ data }) {

    return (
        <Table
            height={400}
            data={data}
            autoHeight
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
            
        </Table>
    )
}