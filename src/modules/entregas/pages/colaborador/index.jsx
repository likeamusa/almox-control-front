import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Container from "../../../../components/container";
import ColabEpiTableComponent from "./components/TableEntregas";
import HistoryColabMaterialTableComponent from "./components/HistoryColabMaterialTable";
import ColabFerramentalTableComponent from "./components/ColabFerramentalTableComponent";
import ColabEpcsTableComponent from "./components/ColabEpcsTableComponent";

const data = [
    {
        material: '123',
        descricao: 'LUVA VAQUETA BR',
        quantidade: 1,
        data_entrega: '01/01/2021',
        proxima_entrega: '01/01/2021',
        status: 'Vencido',
    }
];

const colab = {
    funcaoId: 2
}

export default function ColaboradorPage() {

    const [showForm, setShowForm] = useState(false);

    const navigate = useNavigate();

    const { matricula } = useParams();

    return (
        <Container>

            <div
                className="flex justify-between items-center h-11 bg-zinc-300 px-4"
            >

                <a
                    onClick={() => navigate('/entregas')}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                    Voltar
                </a>
                <h1
                    className="text-2xl font-bold"
                >{matricula}</h1>
            </div>

            {/* Form */}

            {showForm && (


                < div
                    className="h-auto bg-zinc-100 w-full m-auto flex flex-col justify-center border border-gray-400 rounded-md p-4"
                >
                    <h1 className='text-2xl font-bold m-auto'>
                        Novo Fornecimento / Troca / Devolução
                    </h1>
                    <form
                        className="flex flex-row justify-evenly items-center h-11 bg-zinc-300 p-4"
                    >

                        {/* material */}
                        <input
                            type="text"
                            placeholder="Material"
                            className="w-60 h-8 border border-gray-400 rounded-md px-2"
                        />

                        {/* quantidade */}
                        <input
                            type="number"
                            placeholder="Quantidade"
                            className="w-30 h-8 border border-gray-400 rounded-md px-2"
                        />

                        {/* proxima entrega */}
                        <input
                            type="date"
                            placeholder="Proxima Entrega"
                            className="w-50 h-8 border border-gray-400 rounded-md px-2"
                        />

                        {/* observacao */}
                        <textarea
                            placeholder="Observacao"
                            className="w-60 h-8 border border-gray-400 rounded-md px-2"
                        />

                        {/* botao salvo */}
                        <button
                            className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                            onClick={() => alert('Salvo')}
                        >
                            Salvar
                        </button>

                        {/* botao cancelar */}
                        <button
                            className="bg-gray-400 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowForm(false)}
                        >
                            Cancelar
                        </button>
                    </form>

                </div>
            )}


            {/* epis e uniforme */}

            < div
                className="h-auto bg-zinc-100 w-full m-auto flex flex-col justify-center border border-gray-400 rounded-md"
            >

                <h1 className='text-2xl font-bold m-auto'>
                    EPIs e Uniforme
                </h1>

                <div className="flex justify-between items-center h-11 bg-zinc-300 px-4">
                    <a
                        onClick={() => alert('Novo Fornecimento')}
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    >
                        Novo Fornecimento
                    </a>
                </div>

                <ColabEpiTableComponent data={data} onClick={() => setShowForm(true)} />
            </div>

            {/* ferramental */}
            <div
                className="h-auto bg-zinc-100 w-full m-auto flex flex-col justify-center border border-gray-400 rounded-md"
            >

                <h1
                    className="text-2xl font-bold m-auto"
                >Ferramental
                </h1>

                <div className="flex justify-center items-center h-11 bg-zinc-300 px-4">
                </div>

                <ColabFerramentalTableComponent data={data} onClick={() => setShowForm(true)} />

            </div>

            {/* epcs */}
            {
                colab.funcaoId === 2 &&
                <div
                    className="h-auto bg-zinc-100 w-full m-auto flex flex-col justify-center border border-gray-400 rounded-md"
                >
                    <h1
                        className="text-2xl font-bold m-auto"
                    >
                        EPCs
                    </h1>
                    {/* barra de funcoes */}
                    <div className="flex justify-center items-center h-11 bg-zinc-300 px-4">
                    </div>

                    {/* tabela */}
                    <ColabEpcsTableComponent data={data} onClick={() => setShowForm(true)} />

                </div>
            }

            {/* historico */}
            <div
                className="h-auto bg-zinc-100 w-full m-auto flex flex-col justify-center border border-gray-400 rounded-md"
            >


                <h1 className='text-2xl font-bold m-auto'>
                    Historico de Entregas
                </h1>

                <div className="flex justify-between items-center h-11 bg-zinc-300 px-4">
                    <span></span>
                    <a
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        onClick={() => { alert(`Imprimir Historico`) }}
                    >
                        Imprimir Historico
                    </a>
                </div>
                <HistoryColabMaterialTableComponent data={data} />
            </div>

        </Container >
    );
}