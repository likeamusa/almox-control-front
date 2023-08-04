import { Row, Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export default function ({ data }) {

    return (
        <Table
            height={400}
            data={data}
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

            {/* materialId */}
            <Column width={100} align='center' fixed>
                <HeaderCell className='font-bold'>Código</HeaderCell>
                <Cell dataKey="materialId" />
            </Column>

            {/* descricao */}
            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            {/* unidade */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Unidade</HeaderCell>
                <Cell dataKey="unidade" />
            </Column>

            {/* tipo */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Tipo</HeaderCell>
                <Cell dataKey="tipo" />
            </Column>

            {/* rastreavel */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Rastreavel</HeaderCell>
                <Cell dataKey="rastreavel" />
            </Column>

            {/* Fracionavel */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Fracionável</HeaderCell>
                <Cell dataKey="fracionavel" />
            </Column>

            {/* vida util */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Vida Útil (Dias)</HeaderCell>
                <Cell dataKey="vida_util" />
            </Column>

            {/* acoes */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Ações</HeaderCell>
                <Cell>
                    {() => {
                        return (
                            <>
                                <a className="text-blue-500 hover:text-blue-700 cursor-pointer mr-2">Editar</a>
                            </>
                        );
                    }}
                </Cell>
            </Column>


        </Table>
    )
}