import Container from "../../components/container";
import Barra from "./components/bar";
import Table from "./components/EstoqueTable";
import { useSelector, useDispatch } from "react-redux";
import { getEstoque, updateApp } from "../../store/modules/app/actions";
import { useState } from "react";

const Saldo = () => {

    const dispatch = useDispatch()

    const { app } = useSelector(state => state)

    const [search, setSearch] = useState('')

    const saldoByCentro = app?.saldoEstoque.filter(item => app?.estoque?.components?.centroSelecionado === item.centro_id)

    const saldoBySearch = saldoByCentro.filter(item => item.descricao.toLowerCase().includes(search.toLowerCase()))

    return <>
        <Container>
            <Barra>
                <select
                    onChange={(e => {
                        dispatch(updateApp({
                            estoque: {
                                components: {
                                    centroSelecionado: e.target.value
                                }
                            }
                        }))
                    })}
                    className="form-control"
                    style={{
                        width: '300px',
                    }}
                    name="centro"
                    value={app?.estoque?.components?.centroSelecionado}
                    
                >
                    <option
                        value="centro">Centro</option>
                    {app?.cadastro?.cadastros?.centro?.map((item) => {
                        return <option value={item.id_centro}>{item.id_centro} - {item.descricao}</option>
                    })}
                </select>

                {/* pesquisar material */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar material"
                    style={{
                        width: '300px',
                    }}
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
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
            <Table data={saldoBySearch} />
        </Container>

    </>
};

export default Saldo;