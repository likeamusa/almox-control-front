import Container from "../../components/container";
import Barra from "./components/bar";
import Table from "./components/EstoqueTable";
import Autocomplete from "../../components/autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { getEstoque, updateApp } from "../../store/modules/app/actions";
import { useState } from "react";

const Saldo = () => {

    const dispatch = useDispatch()

    const { app } = useSelector(state => state)

    // soma todos os saldos de estoque de cada material
    const saldoEstoqueSomado = app?.saldoEstoque?.reduce((acc, item) => {
        // filtrar por centro
        if (!acc[item.id_material]) {
            acc[item.id_material] = {
                nome_centro: item.nome_centro,
                id_material: item.id_material,
                saldo: 0,
                descricao: item.descricao,
                centro_id: item.centro_id,
            }
        }
        acc[item.id_material].saldo += parseInt(item.saldo)
        return acc
    }, {})


    // transforma o objeto em array
    const saldoConcatendado = Object.values(saldoEstoqueSomado)

    const saldoByCentro = saldoConcatendado.filter(item => app?.estoque?.components?.centroSelecionado === item.centro_id)

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
            <Table data={saldoByCentro} />
        </Container>

    </>
};

export default Saldo;