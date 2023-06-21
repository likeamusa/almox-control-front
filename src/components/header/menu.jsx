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

    const tabSizeStyle = {
        width: 200,
        display: 'flex',
        justifyContent: 'center',
    };
    

    return (
        <Nav
        style={{ width: 500, display: 'flex', justifyContent: 'space-between', alignSelf: 'end', color: 'white'}}
        appearance='tabs'
        activeKey={location.pathname.replace('/', '')}
        >
            <Item 
            style={tabSizeStyle}
            eventKey='pendentes'
            onClick={() => {
                navigate('/pendentes')
            }}
            >
                <a>Pendentes</a>
            </Item>
            
            <Item 
            style={tabSizeStyle}
            eventKey='movimentacoes'
            onClick={() => {
                navigate('/movimentacoes')
            }}
            >
                <a>Movimentaçoes</a>
            </Item>


            <Item 
            style={tabSizeStyle}
            eventKey='cadastro'
            onClick={() => {
                navigate('/cadastro')
            }}
            >
                <a>Cadastro</a>
            </Item>
        </Nav>
    )
};

export default withRouter(Menu);