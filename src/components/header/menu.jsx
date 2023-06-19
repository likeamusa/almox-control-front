import { Nav } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from '../../store/modules/app/actions';
import { useNavigate } from 'react-router-dom';

const { Item } = Nav



const Menu = () => {

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
        appearance='default'
        activeKey={components.pagina}
        >
            <Item 
            eventKey='pendentes'
            onClick={() => {
                setComponent('pagina', 'pendentes')
                navigate('/pendentes')
            }}
            >
                Pendente
            </Item>
            
            <Item 
            eventKey='movimentacoes'
            onClick={() => {
                setComponent('pagina', 'movimentacoes')
                navigate('/movimentacoes')
            }}
            >
                Movimentações
            </Item>


            <Item 
            eventKey='cadastro'
            onClick={() => {
                setComponent('pagina', 'cadastro')
                navigate('/cadastro')
            }}
            >
                Cadastro
            </Item>
        </Nav>
    )
};

export default Menu;