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
import Ca_material from "./Tabs/ca-material";

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
        dispatch(updateApp({ components: { ...mainComponents, headerVisible: true, printing: false } }))
    }, [])


    const { components, cadastros } = cadastro

    const handleActiveTab = (tab) => {
        dispatch(updateApp({
            cadastro: { ...cadastro, components: { ...components, activeTab: tab } }
        }))
    }

    const tipo_usuario = localStorage.getItem('@almox-control/tipo_usuario')


    return (
        <Container>

            <Nav
                activeKey={components.activeTab}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}
                appearance='tabs'
            >
                {/* material */}
                {tipo_usuario === 'admin' &&
                    <Item
                        style={tabSizeStyle}
                        eventKey='material'
                        onClick={() => handleActiveTab('material')}
                    >
                        Material
                    </Item>
                }

                {/* colaborador */}
                <Item
                    style={tabSizeStyle}
                    eventKey='colaborador'
                    onClick={() => handleActiveTab('colaborador')}
                >
                    Colaborador
                </Item>

                {/* fornecedor */}
                {/* <Item
                style={tabSizeStyle}
                eventKey='fornecedor'
                onClick={() => handleActiveTab('fornecedor')}
                >
                    Fornecedor
                </Item> */}

                {/* centro */}
                {
                    tipo_usuario === 'admin' &&

                    <Item
                        style={tabSizeStyle}
                        eventKey='centro'
                        onClick={() => handleActiveTab('centro')}
                    >
                        Centro
                    </Item>
                }

                {/* nf */}
                {/* <Item
                style={tabSizeStyle}
                eventKey='nf'
                onClick={() => handleActiveTab('nf')}
                >
                    Nota Fiscal
                </Item> */}

                {/* C.A. */}
                <Item
                    style={tabSizeStyle}
                    eventKey='ca'
                    onClick={() => handleActiveTab('ca')}
                >
                    C.A.
                </Item>

                {/* Lote */}
                {/* <Item
                style={tabSizeStyle}
                eventKey='lote'
                onClick={() => handleActiveTab('lote')}
                >
                    Lote
                </Item> */}

                {/* Laudo */}
                {/* <Item
                style={tabSizeStyle}
                eventKey='laudo'
                onClick={() => handleActiveTab('laudo')}
                >
                    Laudo
                </Item> */}
                {
                    tipo_usuario === 'admin' &&
                    <Item
                        style={tabSizeStyle}
                        eventKey='tipo_mov'
                        onClick={() => handleActiveTab('tipo_mov')}
                    >
                        Tipo Movimentação
                    </Item>
                }

                {/* Ca_material */}
                <Item
                    style={tabSizeStyle}
                    eventKey='ca_material'
                    onClick={() => handleActiveTab('ca_material')}
                >
                    C.A. Material
                </Item>

            </Nav>

            {components.activeTab === 'material' && <Material />}
            {components.activeTab === 'colaborador' && <Colaborador />}
            {components.activeTab === 'centro' && <Centro />}
            {components.activeTab === 'ca' && <CA />}
            {components.activeTab === 'tipo_mov' && <TipoMovimentacao />}
            {components.activeTab === 'ca_material' && <Ca_material />}

        </Container>
    )
}

export default Cadastro;