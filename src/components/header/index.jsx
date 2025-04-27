import Menu from './menu';
import logo from '../../assets/logo.png';

const Header = () => {
    
    return (
        <div
        style={{
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#e3c236',
            height: '50px',
            display: 'flex',
            justifyContent: 'space-between',
        }}
        >
            {/* logo */}
            <a href="/">

            <h4
            style={{
                marginLeft: '10px',
                color: 'white',
                cursor: 'pointer'
            }}
            >
                <img src={logo} alt="logo" style={{width: '120px'}} />
            </h4>
            </a>

            {/* menu */}
            <Menu />
            {/* user */}
            <div
            style={{
                display: 'flex',
                marginRight: '10px',
                color: 'white',
                gap: '10px',
            }}
            >  
                <span>{localStorage.getItem('@almox-control/tipo_usuario') === 'admin' ? 'ADMIN' : localStorage.getItem('@almox-control/centro')}</span>
                <span>{localStorage.getItem('@almox-control/matricula')}</span>
                <a
                style={{
                    cursor: 'pointer',
                }}
                onClick={() => {
                    localStorage.removeItem('@almox-control/token');
                    window.location.href = '/';
                }}
                >Sair</a>

            </div>  

        </div>
    )
};

export default Header;