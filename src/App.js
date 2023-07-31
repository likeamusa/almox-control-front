import { Routes as Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Login from "./pages/login";
import Requester from "./pages/requester";

import Estoque from "./modules/estoque/pages/main";
import Compras  from "./modules/compras";
import Entregas from "./modules/entregas";
import ColaboradorPage from "./modules/entregas/pages/colaborador";
import NovaMov from "./modules/estoque/pages/NovaMov";
import Movimentacoes from "./modules/estoque/pages/movimentacoes";
import MainCadastrosPage from "./modules/cadastros/main";


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
            <Route path="/estoque" element={<Estoque/>} />
            <Route path="/estoque/movimentacoes/nova" element={<NovaMov/>} />
            <Route path="/estoque/movimentacoes" element={<Movimentacoes/>} />
            <Route path="/compras" element={<Compras/>} />
            <Route path="/entregas" element={<Entregas/>} />
            <Route path="/cadastros" element={<MainCadastrosPage/>} />
            <Route path="/entregas/colaboradores/:matricula" element={<ColaboradorPage/>} />
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
