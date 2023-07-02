import { Routes as Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Movimentacoes from "./pages/movimentacoes";
import Pendentes from "./pages/pendentes";
import Cadastro from "./pages/cadastro";
import Solicitacao from "./pages/pendentes/solicitacao";
import Header from "./components/header";
import Impressao from "./pages/impressao";
import Login from "./pages/login";
import Requester from "./pages/requester";


const App = () => {

  const { components } = useSelector((state) => state.app);

  const signin = () => {
    return localStorage.getItem('@almox-control/token') ? true : false;
  }

  return (
    <Router
    >
      <>

        {signin() ?

        <>
          {components?.printing !== true && <Requester />}
          {components?.headerVisible && <Header />}
          <Switch>
            <Route exact path="/movimentacoes/:id_mov" element={<Impressao />} />
            <Route path="/movimentacoes" element={<Movimentacoes />} />
            <Route path="/solicitacao" element={<Solicitacao />} />
            <Route path="/pendentes" element={<Pendentes />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Switch>
        </>
        
        :
        
        <Login />

        }
      </>
    </Router>
  )
};

export default App;
