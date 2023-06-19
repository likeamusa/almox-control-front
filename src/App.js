import { BrowserRouter as Router} from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'rsuite/dist/rsuite';

import Movimentacoes from './pages/movimentacoes';
import Pendentes from './pages/pendentes';
import Cadastro from './pages/cadastro';
import Solicitacao from './pages/pendentes/solicitacao';

import Header from "./components/header";
import Container from "./components/container";
import Impressao from './pages/movimentacoes/pages/impressao';

function App() {

  const { components } = useSelector(state => state.app);

  return (
   <Router>
      {components.pagina === 'impressao' ? <Impressao /> 
      : 
      <>
        <Header />
        <Container>
          <>
          {components.pagina === 'solicitacao' && <Solicitacao />}
          {components.pagina === 'movimentacoes' && <Movimentacoes />}
          {components.pagina === 'pendentes' && <Pendentes />}
          {components.pagina === 'cadastro' && <Cadastro />}
          </>
        </Container>
      </>
      }
   </Router>
  );
}

export default App;