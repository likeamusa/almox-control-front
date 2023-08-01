import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export default function EstoqueTable({ data }) {

    return (
        <Table
            height={400}
            data={data}
            bordered
            cellBordered
        >
            <Column width={100} align="center" fixed>
                <HeaderCell className='font-bold'>Material</HeaderCell>
                <Cell dataKey="material" />
            </Column>

            <Column flexGrow={2} align="center">
                <HeaderCell className='font-bold'>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            {/* tipo */}
            <Column flexGrow={1} align="center">
                <HeaderCell className='font-bold'>Tipo</HeaderCell>
                <Cell dataKey="tipo" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className='font-bold'>Unidade</HeaderCell>
                <Cell dataKey="unidade" />
            </Column>

            {/* cenario */}
            <Column width={100} align="center">
                <HeaderCell className='font-bold'>Cenário</HeaderCell>
                <Cell dataKey="estoque_medio" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className='font-bold'>Saldo</HeaderCell>
                <Cell dataKey="quantidade" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className='font-bold'>Valor</HeaderCell>
                <Cell dataKey="valor" />
            </Column>

        </Table>
    )
}