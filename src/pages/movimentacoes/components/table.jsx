import { Table } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp } from '../../../../src/store/modules/app/actions';


const { Column, HeaderCell, Cell } = Table;

const TableComponent = ({ data }) => {

    const dispatch = useDispatch()

    const { components } = useSelector(state => state.app)

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }

    const height = window.innerHeight - 250;

    return (
        <Table
            data={data}
            height={height}
            loading={components.movLoading}
            >
                {/* id_mov */}
                <Column width={110} align="center" fixed resizable>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id_mov"/>
                </Column>
                
                {/* mov */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Mov.</HeaderCell>
                    <Cell dataKey="mov" />
                </Column>

                {/* tipo */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Tipo</HeaderCell>
                    <Cell dataKey="tipo_mov" />
                </Column>

                {/* origem */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Origem</HeaderCell>
                    <Cell dataKey="id_centro_origem" />
                </Column>

                {/* destino */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Destino</HeaderCell>
                    <Cell dataKey="id_centro_destino" />
                </Column>

                {/* solicitante */}
                <Column width={160} align="left" resizable>
                    <HeaderCell>Solicitante</HeaderCell>
                    <Cell dataKey="solicitante" />
                </Column>

                {/* autorizador */}
                <Column width={160} align="left" resizable>
                    <HeaderCell>Autorizador</HeaderCell>
                    <Cell dataKey="autorizador" />
                </Column>

                {/* material_id */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Material</HeaderCell>
                    <Cell dataKey="id_material" />
                </Column>

                {/* descricao */}
                <Column width={160} align="left" resizable>
                    <HeaderCell>Descrição</HeaderCell>
                    <Cell dataKey="material" />
                </Column>

                {/* status */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Status</HeaderCell>
                    <Cell dataKey="status" />
                </Column>

                {/* quantidade */}

                <Column width={100} align="center" resizable>
                    <HeaderCell>Quantidade</HeaderCell>
                    <Cell dataKey="qtde" />
                </Column>

                {/* data */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Data</HeaderCell>
                    <Cell dataKey="data" />
                </Column>

                {/* nota */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Nota</HeaderCell>
                    <Cell dataKey="n_nota" />
                </Column>

                {/* lote */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Lote</HeaderCell>
                    <Cell dataKey="n_lote" />
                </Column>

                {/* validade lote */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Validade Lote</HeaderCell>
                    <Cell dataKey="validade_lote" />
                </Column>

                {/* c.a. */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>C.A.</HeaderCell>
                    <Cell dataKey="n_ca" />
                </Column>

                {/* venc ca */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Venc. C.A.</HeaderCell>
                    <Cell dataKey="vencimento_ca" />
                </Column>


                {/* usuario */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Usuário</HeaderCell>
                    <Cell dataKey="id_usuario" />
                </Column>

                {/* laudo */}
                <Column width={100} align="center" resizable>
                    <HeaderCell>Laudo</HeaderCell>
                    <Cell dataKey="n_laudo" />
                </Column>

                {/* validade laudo */}

                <Column fwidth={100} align="center" resizable>
                    <HeaderCell>Validade Laudo</HeaderCell>
                    <Cell dataKey="vencimento_laudo" />
                </Column>
            </Table>
    )
};

export default TableComponent;