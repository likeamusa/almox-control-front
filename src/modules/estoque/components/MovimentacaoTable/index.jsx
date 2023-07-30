import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export default function MovimentacaoTable({ data }) {

    return (
        <Table
            height={400}
            data={data}
            bordered
            cellBordered
        >

            <Column width={100} align="center">
                <HeaderCell className="font-bold">Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column width={200} align="center">
                <HeaderCell className="font-bold">Material</HeaderCell>
                <Cell dataKey="material" />
            </Column>

            <Column width={300} align="center">
                <HeaderCell className="font-bold">Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className="font-bold">Quantidade</HeaderCell>
                <Cell dataKey="quantidade" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className="font-bold">Unidade</HeaderCell>
                <Cell dataKey="unidade" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className="font-bold">Mov</HeaderCell>
                <Cell dataKey="mov" />
            </Column>

            <Column width={100} align="center">
                <HeaderCell className="font-bold">Data</HeaderCell>
                <Cell dataKey="data" />
            </Column>

            {/* solicitante */}
            <Column width={100} align="center">
                <HeaderCell className="font-bold">Solicitante</HeaderCell>
                <Cell dataKey="solicitante" />
            </Column>

            {/* observacao */}
            <Column width={300} align="center">
                <HeaderCell className="font-bold">Observação</HeaderCell>
                <Cell dataKey="observacao" />
            </Column>

            {/* usuario */}
            <Column width={100} align="center">
                <HeaderCell className="font-bold">Usuário</HeaderCell>
                <Cell dataKey="usuario" />
            </Column>

            {/* destino */}
            <Column width={100} align="center">
                <HeaderCell className="font-bold">Destino</HeaderCell>
                <Cell dataKey="destino" />
            </Column>

            {/* tipo */}
            <Column width={100} align="center">
                <HeaderCell className="font-bold">Tipo</HeaderCell>
                <Cell dataKey="tipo" />
            </Column>

            {/* nf */}
            <Column width={100} align="center">
                <HeaderCell className="font-bold">NF</HeaderCell>
                <Cell dataKey="nf" />
            </Column>


        </Table>
    )
}