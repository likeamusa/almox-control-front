import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const EstoqueTable = ({ data }) => {

    return (

        <Table
        height={400}
        data={data}
        >
            {/* centro */}
            <Column width={200} align="center" fixed>
                <HeaderCell>Centro</HeaderCell>
                <Cell dataKey="nome_centro" />
            </Column>
        

            {/* material */}
            <Column width={200} align="center" fixed>
                <HeaderCell>Material</HeaderCell>
                <Cell dataKey="id_material" />
            </Column>

            {/* descricao */}
            <Column flexGrow={1} align="center" fixed>
                <HeaderCell>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>


            {/* quantidade */}
            <Column width={200} align="center" fixed>
                <HeaderCell>Saldo</HeaderCell>
                <Cell dataKey="saldo" />
            </Column>

            

        </Table>
    )
};

export default EstoqueTable;