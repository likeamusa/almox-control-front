import Container from "../../components/container";
import Barra from "./components/bar";
import Table from "./components/EstoqueTable";
import Autocomplete from "../../components/autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { getEstoque } from "../../store/modules/app/actions";

const Saldo = () => {

    const dispatch = useDispatch()

    const { app } = useSelector(state => state)

    // soma todos os saldos de estoque de cada material
    const saldoEstoqueSomado = app?.saldoEstoque?.reduce((acc, item) => {
        if(!acc[item.id_material]){
            acc[item.id_material] = {
                nome_centro: item.nome_centro,
                id_material: item.id_material,
                saldo: 0,
                descricao: item.descricao,
            }
        }
        acc[item.id_material].saldo += parseInt(item.saldo)
        return acc
    }, {})

    // transforma o objeto em array
    const saldoConcatendado = Object.values(saldoEstoqueSomado)

    return <>
        <Container>
            <Barra>
                {/* <div
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
                </div> */}
                {/* <select 
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
                </select> */}
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
            <Table data={saldoConcatendado} />
        </Container>
    
    </>
};

export default Saldo;