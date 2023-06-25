import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateApp } from '../../store/modules/app/actions'

const Impressao = () => {

    const dispatch = useDispatch();

    const { components } = useSelector(state => state.app);
    
    useEffect(() => {
    dispatch(updateApp({components: {...components, headerVisible: false}}));
    }, []);

    const border = 'border: 1px solid black';

    return (
        // body
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}
        >

            {/* cabecalho */}
            <div
            style={{
                width: '100%',
                height: '8.5%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            >

                {/* logo */}
                <div
                style={{
                    width: '10%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

                >
                    PROGEN
                </div>

                {/* titulo */}
                <div
                style={{
                    width: '80%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                >
                    Requisição de Material
                </div>

                {/* data */}
                <div
                style={{
                    width: '10%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    
                }}
                >
                    {/* folha */}
                    <div
                    >
                        <div>FOLHA:</div>
                        <div>1/1</div>
                    </div>

                    {/* data */}
                    <div>
                        <div>{new Date().toLocaleDateString()}</div>
                        <div>{new Date().toLocaleTimeString()}</div>
                    </div>

                </div>

            </div>

            {/* corpo */}
            <div
            style={{
                width: '100%',
                height: '75.5%',
            }}
            >

                {/* solicitante */}
                <div
                style={{
                    width: '100%',
                    height: '17%',
                    display: 'flex',
                    flexDirection: 'column',

                }}
                >
                    {/* solicitante */}
                    <div>
                        SOLICITANTE
                    </div>

                    {/* NOME */}
                    <div>NOME:</div>

                    {/* nome */}
                    <div>ÍTALO KAIRON FERREIRA SANTOS</div>

                    {/* matricula */}
                    <div>MATRÍCULA:</div>

                    {/* servicedesk */}
                    <div>servicedesk</div>

                    {/* setor */}
                    <div>808051</div>

                </div>

                {/* itens */}
                <div
                style={{
                    width: '100%',
                    height: '83%',
                    display: 'flex',
                    flexDirection: 'column',

                }}
                >
                    {/* cabecalho */}
                    <div
                    style={{
                        width: '100%',
                        height: '25px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}

                    >

                        <div>Item</div>

                        <div>Material</div>

                        <div>Descrição</div>

                        <div>Unidade</div>

                        <div>Quantidade</div>

                    </div>

                    {/* itens */}
                    <div
                    style={{
                        width: '100%',
                        height: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}
                    >
                        <div>1</div>
                        <div>148</div>
                        <div>LUVA DE VAQUETA BR CA: 25368</div>
                        <div>PAR</div>
                        <div>4</div>

                    </div>

                    <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    >
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>

                    </div>
                </div>

            </div>

            {/* rodape */}
            <div
            style={{
                width: '100%',
                height: '12%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
            >
                {/* requisitante */}
                <div
                style={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    {/* CABECALHO */}
                    <div>
                        REQUISITANTE
                    </div>

                    {/* assinatura */}
                    <div
                    style={{
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}
                    >___________________________</div>
                </div>

                {/* aprovador */}
                <div
                style={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    {/* CABECALHO */}
                    <div>
                        APROVADOR
                    </div>

                    {/* assinatura */}
                    <div
                    style={{
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}
                    >
                        ___________________________
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Impressao;