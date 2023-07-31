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
            eventKey='estoque'
            onClick={() => {
                navigate('/estoque')
            }}
            >
                <a>Estoque</a>
            </Item>

            <Item
            style={tabSizeStyle}
            eventKey={'entregas' || 'entregas/colaboradores/:matricula'}
            onClick={() => {
                navigate('/entregas')
            }}
            >
                <a>Entregas</a>
            </Item>

            <Item
            style={tabSizeStyle}
            eventKey='compras'
            onClick={() => {
                navigate('/compras')
            }} 
            >
                <a>Compras</a>
            </Item>

            {/* cadastros */}
            <Item
            style={tabSizeStyle}
            eventKey='cadastros'
            onClick={() => {
                navigate('/cadastros')
            }}
            >
                <a>Cadastros</a>
            </Item>
            

            
        </Nav>
    )
};

export default withRouter(Menu);