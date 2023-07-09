import Container from "../../components/container";
import Barra from "./components/bar";
import Table from "./components/EstoqueTable";
import Autocomplete from "../../components/autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { getEstoque } from "../../store/modules/app/actions";
import { useState } from "react";

const Saldo = () => {

    const dispatch = useDispatch()

    const { app } = useSelector(state => state)

    // cria um array de objetos com id e nome
    const materialData = app?.cadastro?.cadastros?.material?.map((item) => {
        return {
            id: item.id,
            nome: `${item.id} - ${item.descricao}`
        }
    })

    const [material, setMaterial] = useState('')
    const [centro, setCentro] = useState('')

    const filteredData = app?.saldoEstoque?.filter((item) => {
        if (material === '' && centro === '') {
            return item
        } else {
            if (material !== '' && centro === '') {
                return item.id_material === material
            } else if (material === '' && centro !== '') {
                return item.id_centro === centro
            } else {
                return item.id_material === material && item.id_centro === centro
            }
        }
    })


    return <>
        <Container>
            <Barra>
                <div
                style={{
                    marginTop: '15px',
                    width: '300px',
                }}
                >

                    <Autocomplete
                    placeholder='Material'
                    name='material'
                    autoFocus={true}
                    data={materialData}
                    onChange={e => {
                        const value = e.target.value.split(' - ')[0]
                        setMaterial(parseInt(value))
                    }}
                    />
                </div>
                <select 
                onChange={(e => {
                    const value = e.target.value.split(' - ')[1]
                    setCentro(parseInt(value))
                })}
                className="form-control"
                style={{
                    width: '300px',
                }}
                name="centro"
                >
                    <option 
                    value="centro">Centro</option>
                    {app?.cadastro?.cadastros?.centro?.map((item) => {
                        return <option value={item.id_centro}>{item.id_centro} - {item.descricao}</option>
                    })}
                </select>
                <a
                onClick={() => {
                    setMaterial('')
                    setCentro('')
                    document.querySelector('input[name="material"]').value = ''
                    document.querySelector('select[name="centro"]').value = 'centro'
                }}
                style={{
                    cursor: 'pointer',
                }}
                >
                    Limpar filtros
                </a>
                <a
                style={{
                    cursor: 'pointer',
                }}
                onClick={() => {
                    dispatch(getEstoque())
                }}>
                    Atualizar
                </a>
            </Barra>
            <Table data={filteredData} />
        </Container>
    
    </>
};

export default Saldo;