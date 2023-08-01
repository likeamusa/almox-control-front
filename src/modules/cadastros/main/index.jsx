import Container from "../../../components/container";
import { Nav } from "rsuite";
import { useState } from "react";

import MaterialTab from "../tabs/material";
import ColaboradorTab from "../tabs/colaborador";
import FornecedorTab from "../tabs/fornecedor";
import CentroTab from "../tabs/centro";
import EstoqueTab from "../tabs/estoque";
import FilialTab from "../tabs/filial";
import CaTab from "../tabs/c_a_";
import LoteTab from "../tabs/lote";
import LaudoTab from "../tabs/laudo";
import FuncaoTab from "../tabs/funcao"
import Ghe from "../tabs/ghe";


const { Item } = Nav;

const tabSizeStyle = {
    width: 200,
    display: 'flex',
    justifyContent: 'center',
};

export default function MainCadastrosPage() {

    const [activeKey, setActiveKey] = useState('material');

    return (
        <Container>
            <div className="flex justify-start items-center h-11 bg-zinc-300 px-4">
                {/* voltar */}
                <a
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                    Atualizar
                </a>

            </div>
            <Nav
                appearance="tabs"
                activeKey={activeKey}
                className="flex justify-center items-center"
            >
                {/* material */}
                <Item
                    eventKey="material"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('material')}
                >
                    Material
                </Item>

                {/* colaborador */}
                <Item
                    eventKey="colaborador"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('colaborador')}
                >
                    Colaborador
                </Item>

                {/* fornecedor */}
                <Item
                    eventKey="fornecedor"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('fornecedor')}
                >
                    Fornecedor
                </Item>

                {/* centro */}
                <Item
                    eventKey="centro"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('centro')}
                >
                    Centro
                </Item>

                {/* estoque */}
                <Item
                    eventKey="estoque"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('estoque')}
                >
                    Estoque
                </Item>

                {/* filial */}
                <Item
                    eventKey="filial"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('filial')}
                >
                    Filial
                </Item>

                {/* c.a. */}
                <Item
                    eventKey="c.a."
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('c.a.')}
                >
                    C.A.
                </Item>

                {/* lote */}
                <Item
                    eventKey="lote"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('lote')}
                >
                    Lote
                </Item>

                {/* laudo */}
                <Item
                    eventKey="laudo"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('laudo')}
                >
                    Laudo
                </Item>

                {/* funcao */}
                <Item
                    eventKey="funcao"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('funcao')}
                >
                    Funcao
                </Item>

                {/* ghe */}
                <Item
                    eventKey="ghe"
                    style={tabSizeStyle}
                    onClick={() => setActiveKey('ghe')}
                >
                    Ghe
                </Item>

            </Nav>

            {/* tabs */}
            <div className="mt-4">
                {activeKey === 'material' && <MaterialTab />}
                {activeKey === 'colaborador' && <ColaboradorTab />}
                {activeKey === 'fornecedor' && <FornecedorTab />}
                {activeKey === 'centro' && <CentroTab />}
                {activeKey === 'estoque' && <EstoqueTab />}
                {activeKey === 'filial' && <FilialTab />}
                {activeKey === 'c.a.' && <CaTab />}
                {activeKey === 'lote' && <LoteTab />}
                {activeKey === 'laudo' && <LaudoTab />}
                {activeKey === 'funcao' && <FuncaoTab />}
                {activeKey === 'ghe' && <Ghe />}
            </div>
        </Container>
    )
}