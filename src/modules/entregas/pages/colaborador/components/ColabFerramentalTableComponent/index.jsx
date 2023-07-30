import { useState } from "react";
import { Checkbox, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export default function ColabFerramentalTableComponent({ data }) {

    const [checkedKeys, setCheckedKeys] = useState([]);
    let checked = false;
    const indeterminate = false;

    if (checkedKeys.length === data.length) {
        checked = true;
    } else if (checkedKeys.length === 0) {
        checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        indeterminate = true;
    }

    const handleCheckAll = (value, checked) => {
        const keys = checked ? data.map(item => item.material) : [];
        setCheckedKeys(keys);
    }

    const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
        <Cell {...props} style={{ padding: 0 }}>
            <div
                className='leading-10 flex items-center justify-center'
            >
                <Checkbox
                    value={rowData[dataKey]}
                    inline
                    onChange={onChange}
                    checked={checkedKeys.some(item => item === rowData[dataKey])}
                />
            </div>
        </Cell>
    );

    return (
        <Table
            autoHeight
            data={data}
            bordered
            cellBordered
            >
            <Column width={50} align='center'>
                <HeaderCell style={{ padding: 0 }}>
                    <div className='leading-10 flex items-center justify-center'>
                        <Checkbox
                            inline
                            checked={checked}
                            indeterminate={indeterminate}
                            onChange={handleCheckAll}
                        />
                    </div>
                </HeaderCell>
                <CheckCell
                    dataKey="material"
                    checkedKeys={checkedKeys}
                    onChange={checked => {
                        const keys = checked ? [...checkedKeys, checked] : checkedKeys.filter(item => item !== checked);
                        setCheckedKeys(keys);
                    }}
                />
            </Column>

            <Column width={120} align='center'>
                <HeaderCell className='font-bold'>Código</HeaderCell>
                <Cell dataKey="material" />
            </Column>

            {/* descricao */}
            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            {/* quantidade */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Quantidade</HeaderCell>
                <Cell dataKey="quantidade" />
            </Column>

            {/* data_entrega */}
            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Data de Entrega</HeaderCell>
                <Cell dataKey="data_entrega" />
            </Column>

            {/* acoes */}
            <Column width={200} align='center'>
                <HeaderCell className='font-bold'>Ações</HeaderCell>
                <Cell>
                    {rowData => {
                        return (
                            <span>
                                <a
                                    onClick={() => { alert(`Devolver ${rowData.descricao}`) }}
                                    className='cursor-pointer text-blue-500 hover:text-blue-600'
                                >Devolução</a>
                                {' | '}
                                <a
                                    onClick={() => { alert(`Trocar ${rowData.descricao}`) }}
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