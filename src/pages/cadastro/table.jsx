import { Row, Table } from "rsuite";
import { useSelector } from "react-redux";

const { Column, HeaderCell, Cell } = Table;

const TableComponent = ({cadastroName, onEdit} ) => {

    const height = window.innerHeight - 250;

    const  { cadastro, components } = useSelector(state => state.app)

    const { cadastros } = cadastro

    const data = cadastros[cadastroName]

    const dataToColumns = Object.keys(cadastros[cadastroName][0])?.filter(key => key !== "createdAt" && key !== "updatedAt")

    return (    
        <Table
        data={data}
        height={height}
        loading={components?.cadastroLoading}
        >
            {
                dataToColumns?.map((key, index) => (
                    <Column flexGrow={1} align="center" fixed key={index}>
                        <HeaderCell>{key}</HeaderCell>
                        <Cell dataKey={key}/>
                    </Column>

            ))
            }

            {/* editar */}
            <Column flexGrow={1} align="center" fixed>
                <HeaderCell></HeaderCell>
                <Cell>
                    {
                        rowData => {
                            return (
                                <a
                                style={{cursor: "pointer"}}
                                onClick={() => onEdit(rowData)}
                                >Editar</a>
                            )
                        }
                    }
                </Cell> 
            </Column>

        </Table>
    );
};

export default TableComponent;
