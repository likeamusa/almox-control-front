import Menu from './menu';

const Header = () => {
    
    return (
        <div
        style={{
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#a8dadc',
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
                Almox-Control
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
                <span>{localStorage.getItem('@almox-control/matricula')}</span>
                <span>Rio Verde-Go</span>
                <a
                className='cursor-pointer text-blue-500 hover:text-blue-600'
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