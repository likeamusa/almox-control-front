import FornecedorCadastroTable from "./FornecedorCadastroTable"
import { useState } from "react";

const data = [
    {
        matricula: 5898,
        nome: 'Empresa 1',
        cpnj: '00.000.000/0000-00',

    }
];


export default function () {

    const [ showAddFornecedor, setAddShowFornecedor ] = useState(false)


    return (
        <div
            className="flex flex-col gap-4 align-middle"
        >
            <div
                className="flex justify-evenly items-center h-11 bg-zinc-300 px-4"
            >
                <a
                    onClick={() => setAddShowFornecedor(true)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                    Adicionar Material
                </a>
            </div>

            {showAddFornecedor && (
                <div className="flex flex-col justify-center gap-4 align-middle">


                    <div
                        className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                    >
                        <form
                            className="flex flex-row gap-4 align-middle justify-evenly"
                        >

                            {/* matricula */}
                            <input
                                placeholder="Matricula"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-28 p-4"
                            />


                            {/* Botao adicionar */}
                            <button
                                onClick={e => e.preventDefault()}
                                className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                            >Adicionar
                            </button>

                            {/* botao cancelar */}
                            <button
                                onClick={() => setAddShowFornecedor(!showAddFornecedor)}
                                className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-48 rounded-md m-auto"
                            >
                                Cancelar
                            </button>


                        </form>
                    </div>


                </div>
            )}

            <FornecedorCadastroTable data={data} />
        </div>
    )
}