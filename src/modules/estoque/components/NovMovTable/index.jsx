import { Table, Checkbox } from "rsuite"
import { useState } from "react";


const { Cell, Column, HeaderCell } = Table

export default function ({ data }) {

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
            bordered
            cellBordered
            data={data}
        >
            {/* check */}
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

            {/* material */}
            <Column width={120} align='center'>
                <HeaderCell className='font-bold'>Material</HeaderCell>
                <Cell dataKey='materialId' />
            </Column>

            {/* descricao */}
            <Column flexGrow={1} align='center'>
                <HeaderCell className='font-bold'>Descrição</HeaderCell>
                <Cell dataKey='descricao' />
            </Column>

            {/* unidade */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Unidade</HeaderCell>
                <Cell dataKey='umb' />
            </Column>

            {/* quantidade */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Quantidade</HeaderCell>
                <Cell dataKey='quantidade' />
            </Column>

            {/* valor unitario */}
            <Column width={100} align='center'>
                <HeaderCell className='font-bold'>Valor Unitário</HeaderCell>
                <Cell dataKey='valorUnitario' />
            </Column>

            {/* lote */}
            <Column width={150} align='center'>
                <HeaderCell className='font-bold'>Lote</HeaderCell>
                <Cell dataKey='lote' />
            </Column>

            {/* c_a_ */}
            <Column width={150} align='center'>
                <HeaderCell className='font-bold'>C/A</HeaderCell>
                <Cell dataKey='c_a_' />
            </Column>

            {/* laudo */}
            <Column width={150} align='center'>
                <HeaderCell className='font-bold'>Laudo</HeaderCell>
                <Cell dataKey='laudo' />
            </Column>

        </Table>
    )
}