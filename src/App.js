import { useLocation, Routes as Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Impressao from "./pages/movimentacoes/pages/impressao";
import Movimentacoes from "./pages/movimentacoes";
import Pendentes from "./pages/pendentes";
import Cadastro from "./pages/cadastro";
import Solicitacao from "./pages/pendentes/solicitacao";
import Header from "./components/header";


const App = () => {

    const { components } = useSelector(state => state.app);

    return (
        <Router>
          {
            components.headerVisible &&
            <Header />
          }
                <Switch>
                  <Route path="/movimentacoes/:id_mov" element={<Impressao />} />
                    <Route path="/movimentacoes" element={<Movimentacoes />} />
                    <Route path="/solicitacao" element={<Solicitacao />} />
                    <Route path="/pendentes" element={<Pendentes />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Switch>
        </Router>
    )
};

export default App;
