import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { updateApp, getMovimentacao } from '../../store/modules/app/actions'
import Logo from './progen-logo.png'


const Impressao = () => {

    const dispatch = useDispatch();

    const { id_mov } = useParams();

    const { components, movimentacaoToPrint } = useSelector(state => state.app);
    
    useEffect(() => {
        dispatch(updateApp({components: {headerVisible: false, printing: true}}));
        dispatch(getMovimentacao(id_mov));
        setTimeout(() => {
            window.print();
            window.close();
        }, 2000);
    }, []);

    

    return <>
        {/* impressao */}
        <div
        style={{
            height: '100vh',
            display: 'grid',
            gridTemplateRows: '72px 37px auto 84px auto',
        }}
        >
            {/* cabecalho */}
            <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
            }}
            ><img src={Logo}/><h3>Requisição de Material ao Almoxarifado</h3></header>
            
            {/* data */}
            <date
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            >   <b>{id_mov}</b>
                {new Date().toLocaleDateString()}
            </date>

            {/* tabela */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '39px 69px 67px 1fr 108px 97px',
                    minHeight: '320px',
                    gridTemplateRows: 'repeat(300, 25px)',
                }}
            >
                {/* info header */}
                <div
                className='info-header'
                >MAT.</div>
                <div
                className='info-header'
                >{movimentacaoToPrint[0]?.id_resp_sol}</div>
                <div
                className='info-header'
                >NOME:</div>
                <div
                className='info-header'
                >{movimentacaoToPrint[0]?.solicitante.nome}</div>
                <div
                className='info-header'
                >CENTRO</div>
                <div
                className='info-header'
                >{movimentacaoToPrint[0]?.destino.id_centro}</div>

                {/* itens header */}
                {/* codigo */}
                <div
                className='item-header'
                style={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                }}
                >CÓDIGO</div>
                <div
                className='item-header'
                >QTD.</div>
                {/* descricao */}
                <div
                className='item-header'
                style={{
                    gridColumnStart: 4,
                    gridColumnEnd: 6,
                }}
                >DESCRIÇÃO</div>
                <div
                className='item-header'
                >MOTIVO</div>

                {movimentacaoToPrint && movimentacaoToPrint.length > 0 ?
                
                    movimentacaoToPrint?.map((item, index) => (
                        <>

                            {/* itens */}
                            <div
                            className='item'
                            style={{
                                gridColumnStart: 1,
                                gridColumnEnd: 3,
                            }}
                            >{item?.id_material}</div>
                            <div
                            className='item'
                            >{item?.qtde}</div>
                            <div
                            className='item'
                            style={{
                                gridColumnStart: 4,
                                gridColumnEnd: 6,
                            }}
                            >{item?.material.descricao}</div>
                            {/* motivo */}
                            <div
                            className='item'
                            >{item?.tipo}</div>
                        </>
                    ))
                :
                    null
                }

            </div>

            <footer
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            >
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '180px',
                    height: '100%',
                    gap: '10px',
                }}
                >
                    <spam>ASS:__________________</spam>
                    <spam>MAT:___________</spam>
                    <spam>Colaborador</spam>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '180px',
                    height: '100%',
                    gap: '10px'

                }}
                >
                    <spam>ASS:__________________</spam>
                    <spam>MAT:___________</spam>
                    <span>Autorizante</span>
                </div>
            </footer>

        </div>
    </>
};

export default Impressao;