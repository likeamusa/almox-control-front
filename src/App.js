import { useLocation, Routes as Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "./services/api";

import Movimentacoes from "./pages/movimentacoes";
import Pendentes from "./pages/pendentes";
import Cadastro from "./pages/cadastro";
import Solicitacao from "./pages/pendentes/solicitacao";
import Header from "./components/header";
import Impressao from "./pages/impressao";
import { useEffect, useState } from "react";
import { updateApp } from "./store/modules/app/actions";


const App = () => {

  const dispatch = useDispatch();

  const [online, setOnline] = useState(false);

  window.addEventListener('online', () => {
    setOnline(true);
  });

  window.addEventListener('offline', () => {
    setOnline(false);
  });


  useEffect(() => {
    async function load() {

      try {

        const res = await api.get('/status');

        if (res.status === 200) {
          dispatch(updateApp({ online: true }));
        } else {
          dispatch(updateApp({ online: false }));
        }
      }

      catch (error) {
        console.log(error);
        dispatch(updateApp({ online: false }));
      }

    }


    load();

  }, [online]);


  const { components } = useSelector(state => state.app);

  return (
    <Router>
      {
        components.headerVisible &&
        <Header />
      }
      <Switch>
        <Route exact path="/movimentacoes/:id_mov" element={<Impressao />} />
        <Route path="/movimentacoes" element={<Movimentacoes />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
        <Route path="/pendentes" element={<Pendentes />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Switch>
    </Router>
  )
};

export default App;
