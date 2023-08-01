import { Table, Checkbox } from 'rsuite';
import { useState } from 'react';

const { Column, HeaderCell, Cell } = Table;

export default function ({ data, onClick }) {

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
            data={data}
            autoHeight
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

            <Column width={100} align='center'>
                <HeaderCell>Material</HeaderCell>
                <Cell dataKey="material" />
            </Column>

            <Column flexGrow={2} align='center'>
                <HeaderCell>Descrição</HeaderCell>
                <Cell dataKey="descricao" />
            </Column>

            <Column flexGrow={1} align='center'>
                <HeaderCell>Data de Entrega</HeaderCell>
                <Cell dataKey="data_entrega" />
            </Column>

            <Column flexGrow={1} align='center'>
                <HeaderCell>Próxima Entrega</HeaderCell>
                <Cell dataKey="proxima_entrega" />
            </Column>

            <Column flexGrow={1} align='center'>
                <HeaderCell>Status</HeaderCell>
                <Cell dataKey="status" />
            </Column>

            {/* acoes */}
            <Column width={200} align='center'>
                <HeaderCell className='font-bold'>Ações</HeaderCell>
                <Cell>
                    {rowData => {
                        return (
                            <span>
                                <a
                                    onClick={() => onClick(onClick()) }
                                    className='cursor-pointer text-blue-500 hover:text-blue-600'
                                >Devolução</a>
                                {' | '}
                                <a
                                    onClick={() => onClick(onClick())}
                                    className='cursor-pointer text-blue-500 hover:text-blue-600'
                                >Troca</a>
                            </span>
                        );
                    }}
                </Cell>
            </Column>
        </Table>
    )
};