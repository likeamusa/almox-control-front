import { Nav } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from '../../store/modules/app/actions';
import { useNavigate, useLocation } from 'react-router-dom';

const { Item } = Nav

const withRouter = (Component) => (props) => {
    const location = useLocation();
    return <Component {...props} location={location} />;
};

const Menu = ({ location }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { components } = useSelector(state => state.app)

    const setComponent = (component, value) => {
        dispatch(updateApp({
            components: {...components, [component]: value}}
        ))
    }
    

    return (
        <Nav
        style={{ width: 400, display: 'flex', justifyContent: 'space-between'}}
        
        activeKey={location.pathname.replace('/', '')}
        >
            <Item 
            eventKey='pendentes'
            onClick={() => {
                navigate('/pendentes')
            }}
            >
                Pendente
            </Item>
            
            <Item 
            eventKey='movimentacoes'
            onClick={() => {
                navigate('/movimentacoes')
            }}
            >
                Movimentações
            </Item>


            <Item 
            eventKey='cadastro'
            onClick={() => {
                navigate('/cadastro')
            }}
            >
                Cadastro
            </Item>
        </Nav>
    )
};

export default withRouter(Menu);