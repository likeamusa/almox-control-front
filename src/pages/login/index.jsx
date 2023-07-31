import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp, login } from '../../store/modules/app/actions';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'rsuite'

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
        <>
            { components.loginLoading && <Loader backdrop content="Carregando..." vertical size="md" speed='slow' center />}
            <div
            className='h-screen w-screen flex justify-center items-center'
            >
                <form
                id='login-form'
                className='h-96 w-96 flex flex-col justify-center items-center bg-zinc-200 rounded-md p-6'
                onSubmit={handleLogin}
                >
                    <input
                    className='w-full h-10 mb-2 placeholder:p-2 focus:border-blue-500 border-none p-2'
                    form='login-form'
                    autoFocus
                    type="text"
                    placeholder="Matricula" 
                    onChange={e => setEmail(e.target.value)} 
                    />

                    <input
                    className='w-full h-10 mb-2 placeholder:p-2 focus:border-blue-500 border-none p-2'
                    form='login-form'
                    min={6}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setSenha(e.target.value)}
                    />

                    <button
                    className='h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    style={{
                        width: '100%',
                    }}
                    form='login-form'
                    type='submit'
                    onClick={handleLogin} 
                    >Entrar</button>

                </form>
            </div>
        </>
    )
};

export default Login;