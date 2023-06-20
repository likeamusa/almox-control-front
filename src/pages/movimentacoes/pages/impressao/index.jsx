import { useDispatch, useSelector } from "react-redux";
import { updateApp, getMovimentacao  } from "../../../../store/modules/app/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './styles.css'

const Impressao = () => {

    const dispatch = useDispatch()

    const { id_mov } = useParams()

    const { components } = useSelector(state => state.app)

    const mov = useSelector(state => state.app.movimentacaoToPrint)
    
    useEffect(() => {
        dispatch(updateApp({
            components: {
                ...components,
                headerVisible: false,
            }
        }))
        dispatch(getMovimentacao(id_mov))
    }, [])

    return (

        <div
        className="print-body"
        >
            <div
            className="print-header"
            >
                {/* logo */}
                <th
                className="print-logo"
                >
                    Progen
                </th>

                {/* titulo */}
                <th
                className="print-title"
                >
                    Solicitação de Material ao Almoxarifado
                </th>

                {/* data */}
                <th
                className="print-date"
                >
                    {new Date(mov[0]?.data).toLocaleDateString()}<br/>
                    {new Date(mov[0]?.data).toLocaleTimeString()}
                </th>


            </div>


            {/* solicitante */}
            <div
            className="print-solicitante"
            >
                {/* matricula */}
                <div
                className="print-solicitante-title"
                >
                    {`Matricula: ${mov[0]?.solicitante.matricula}`}
                </div>

                {/* nome */}
                <div
                className="print-solicitante-title"
                >
                    {`Solicitante: ${mov[0]?.solicitante.nome}`}
                </div>
            </div>
           <table
           style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid black',
                marginTop: '10px',
                marginBottom: '10px',

           }}
           >    
                <thead>
                    <tr>
                        <th
                        style={{
                            border: '1px solid black',
                            textAlign: 'center'
                        }}
                        >
                            Índice
                        </th>
                        <th
                        style={{
                            border: '1px solid black',
                            textAlign: 'center'
                        }}
                        >
                            Material
                        </th>
                        <th
                        style={{
                            border: '1px solid black',
                            textAlign: 'center',
                            width: '50%'
                        }}
                        >
                            Descricao
                        </th>
                        <th
                        style={{
                            border: '1px solid black',
                            textAlign: 'center'
                        }}
                        >
                            Qtde.
                        </th>
                        <th
                        style={{
                            border: '1px solid black',
                            textAlign: 'center'
                        }}
                        >
                            Unidade
                        </th>
                        <th
                        style={{
                            border: '1px solid black',
                            textAlign: 'center'
                        }}
                        >
                            Observação
                        </th>
                    </tr>
                </thead>

                {mov[0] && (
                
                <tbody
                style={{
                    border: '1px solid black',
                    textAlign: 'center'
                }}

                >
                    {mov?.map((item, index) => (
                        <tr
                        key={index}
                        >
                            <td
                            style={{
                                border: '1px solid black',
                                textAlign: 'center',
                            }}
                            >
                                {index + 1}
                            </td>
                            <td
                            style={{
                                border: '1px solid black',
                                textAlign: 'center'
                            }}
                            >
                                {item.material.id}
                            </td>
                            <td
                            style={{
                                border: '1px solid black',
                                textAlign: 'start'
                            }}
                            >
                                {item.material.descricao}
                            </td>
                            <td
                            style={{
                                border: '1px solid black',
                                textAlign: 'center'
                            }}
                            >
                                {item.qtde}
                            </td>
                            <td
                            style={{
                                border: '1px solid black',
                                textAlign: 'center'
                            }}
                            >
                                {item.material.umd}
                            </td>
                            <td
                            style={{
                                border: '1px solid black',
                                textAlign: 'center'
                            }}
                            >
                            </td>
                        </tr>
                    ))}
                </tbody>
                    
                )}

           </table>


        </div>
    )
};

export default Impressao;