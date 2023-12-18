import { Table } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from '../../../store/modules/app/actions';


const { Column, HeaderCell, Cell } = Table;

const TableComponent = ({ data }) => {

    const dispatch = useDispatch();

    const { materials } = useSelector(state => state.app);

    const handleExclude = (id) => {
        const newMaterials = materials?.filter(material => material.id_material !== id)
        dispatch(updateApp({
            materials: newMaterials
        }))
        alert(`Excluido: ${id}`)
    }

    return (
        <Table
        data={data}
        height={160}
        >
            {/* id_material */}
            <Column flexGrow={1} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id_material"/>
            </Column>

            {/* material */}
            <Column flexGrow align="center">
                <HeaderCell>Material</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            {/* unidade */}
            <Column flexGrow={1} align="center">
                <HeaderCell>Unidade</HeaderCell>
                <Cell dataKey="umd" />
            </Column>

            {/* qtde */}
            <Column flexGrow={1} align="center">
                <HeaderCell>Quantidade</HeaderCell>
                <Cell dataKey="qtde" />
            </Column>

            {/* n_ca */}
            <Column flexGrow={1} align="center">
                <HeaderCell>C.A.</HeaderCell>
                <Cell dataKey="n_ca" />
            </Column>

            {/* n_lote */}
            <Column flexGrow={1} align="center">
                <HeaderCell>Lote</HeaderCell>
                <Cell dataKey="n_lote" />
            </Column>

            {/* acoes */}
            <Column flexGrow={1} align="center">
                <HeaderCell></HeaderCell>
                <Cell>
                    {rowData => (
                        <a
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleExclude(rowData.id_material)}
                        >
                            Excluir
                        </a>
                    )}
                </Cell>
            </Column>




        </Table>

    )
};

export default TableComponent;