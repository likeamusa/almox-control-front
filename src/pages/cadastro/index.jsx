import Barra from "./bar";
import { Nav } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { updateApp, fetchCadastro } from "../../store/modules/app/actions";
import { useEffect } from "react";

import Material from "./Tabs/material";
import Colaborador from "./Tabs/colaborador";
import Fornecedor from "./Tabs/fornecedor";
import Centro from "./Tabs/centro";
import NotaFiscal from "./Tabs/nf";
import CA from "./Tabs/ca";
import Lote from "./Tabs/lote";
import Laudo from "./Tabs/laudo";


const { Item } = Nav

const Cadastro = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCadastro())
    }, [])

    const handleActiveTab = (tab) => {
        dispatch(updateApp({
            cadastro: {...cadastro, components: {...components, activeTab: tab}}
        }))
    }

    const { cadastro } = useSelector(state => state.app)

    const { components } = cadastro

    return (
        <>
        
            <Nav
            activeKey={components.activeTab}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '10px'}}
            appearance='tabs'
            >
                {/* material */}
                <Item
                eventKey='material'
                onClick={() => handleActiveTab('material')}
                >
                    Material
                </Item>

                {/* colaborador */}
                <Item
                eventKey='colaborador'
                onClick={() => handleActiveTab('colaborador')}
                >
                    Colaborador
                </Item>

                {/* fornecedor */}
                <Item
                eventKey='fornecedor'
                onClick={() => handleActiveTab('fornecedor')}
                >
                    Fornecedor
                </Item>

                {/* centro */}
                <Item
                eventKey='centro'
                onClick={() => handleActiveTab('centro')}
                >
                    Centro
                </Item>

                {/* nf */}
                <Item
                eventKey='nf'
                onClick={() => handleActiveTab('nf')}
                >
                    Nota Fiscal
                </Item>

                {/* C.A. */}
                <Item
                eventKey='ca'
                onClick={() => handleActiveTab('ca')}
                >
                    C.A.
                </Item>

                {/* Lote */}
                <Item
                eventKey='lote'
                onClick={() => handleActiveTab('lote')}
                >
                    Lote
                </Item>

                {/* Laudo */}
                <Item
                eventKey='laudo'
                onClick={() => handleActiveTab('laudo')}
                >
                    Laudo
                </Item>

            </Nav>
                {components.activeTab === 'material' && <Material />}
                {components.activeTab === 'colaborador' && <Colaborador />}
                {components.activeTab === 'fornecedor' && <Fornecedor />}
                {components.activeTab === 'centro' && <Centro />}
                {components.activeTab === 'nf' && <NotaFiscal />}
                {components.activeTab === 'ca' && <CA />}
                {components.activeTab === 'lote' && <Lote />}
                {components.activeTab === 'laudo' && <Laudo />}

        </>
    )
}

export default Cadastro;