import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp, login } from '../../store/modules/app/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [ matricula, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { components } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(updateApp({components: {...components, headerVisible: false}}));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = { matricula, senha };
        dispatch(login(data))
        
    };

    return (
        <div
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <form
            id='login-form'
            style={{
                width: '400px',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '20px',

            }}
            onSubmit={handleLogin}
            >
                <input
                className='form-control'
                form='login-form'
                autoFocus
                type="text"
                 
                placeholder="Matricula" 
                onChange={e => setEmail(e.target.value)} 
                />

                <input
                className='form-control'
                form='login-form'
                min={6}
                type="password"
                placeholder="Senha"
                onChange={e => setSenha(e.target.value)}
                />

                <button
                className='btn btn-primary'
                style={{
                    width: '100%',
                }}
                form='login-form'
                type='submit'
                onClick={handleLogin} 
                >Entrar</button>

            </form>
        </div>
    )
};

export default Login;