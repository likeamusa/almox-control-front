import Container from "../../components/container";
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
import TipoMovimentacao from "./Tabs/movs";

const tabSizeStyle = {
    width: 160,
    display: 'flex',
    justifyContent: 'center',
};

const { Item } = Nav

const Cadastro = () => {

    const dispatch = useDispatch();

    const mainComponents = useSelector(state => state.app.components)

    const { cadastro } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(updateApp({components: {...mainComponents, headerVisible: true, printing: false}}))
    }, [])


    const { components } = cadastro

    const handleActiveTab = (tab) => {
        dispatch(updateApp({
            cadastro: {...cadastro, components: {...components, activeTab: tab}}
        }))
    }


    return (
        <Container>
        
            <Nav
            activeKey={components.activeTab}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '10px'}}
            appearance='tabs'
            >
                {/* material */}
                <Item
                style={tabSizeStyle}
                eventKey='material'
                onClick={() => handleActiveTab('material')}
                >
                    Material
                </Item>

                {/* colaborador */}
                <Item
                style={tabSizeStyle}
                eventKey='colaborador'
                onClick={() => handleActiveTab('colaborador')}
                >
                    Colaborador
                </Item>

                {/* fornecedor */}
                <Item
                style={tabSizeStyle}
                eventKey='fornecedor'
                onClick={() => handleActiveTab('fornecedor')}
                >
                    Fornecedor
                </Item>

                {/* centro */}
                <Item
                style={tabSizeStyle}
                eventKey='centro'
                onClick={() => handleActiveTab('centro')}
                >
                    Centro
                </Item>

                {/* nf */}
                <Item
                style={tabSizeStyle}
                eventKey='nf'
                onClick={() => handleActiveTab('nf')}
                >
                    Nota Fiscal
                </Item>

                {/* C.A. */}
                <Item
                style={tabSizeStyle}
                eventKey='ca'
                onClick={() => handleActiveTab('ca')}
                >
                    C.A.
                </Item>

                {/* Lote */}
                <Item
                style={tabSizeStyle}
                eventKey='lote'
                onClick={() => handleActiveTab('lote')}
                >
                    Lote
                </Item>

                {/* Laudo */}
                <Item
                style={tabSizeStyle}
                eventKey='laudo'
                onClick={() => handleActiveTab('laudo')}
                >
                    Laudo
                </Item>

                <Item
                style={tabSizeStyle}
                eventKey='tipo_mov'
                onClick={() => handleActiveTab('tipo_mov')}
                >
                    Tipo Movimentação
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
                {components.activeTab === 'tipo_mov' && <TipoMovimentacao />}

        </Container>
    )
}

export default Cadastro;