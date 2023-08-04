import MaterialCadastroTable from "./MaterialCadastroTable"
import { useState } from "react"

const data = [
    {
        materialId: 145,
        descricao: "Material 1",
        unidade: "UN",
        tipo: "EPI",
        fracionavel: "Não",
        rastreavel: "Não",
        vida_util: "12"
    }
]

export default function () {

    const [showAddMaterial, setShowAddMaterial] = useState(false)

    return (
        <div
            className="flex flex-col gap-4 align-middle"
        >
            <div
                className="flex justify-evenly items-center h-11 bg-zinc-300 px-4"
            >
                <a
                    onClick={() => setShowAddMaterial(true)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                    Adicionar Material
                </a>
            </div>

            {
                showAddMaterial && (

                    <div className="flex flex-col justify-center gap-4 align-middle">


                        <div
                            className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                        >
                            <form
                                className="flex flex-row gap-4 align-middle justify-evenly"
                            >

                                {/* material */}
                                <input
                                    placeholder="Código"
                                    className="border border-gray-300 rounded-md text-gray-500 h-8 w-28 p-4"
                                />

                                {/* descricao */}
                                <input
                                    placeholder="Descrição"
                                    className="border border-gray-300 rounded-md text-gray-500 h-8 w-15 p-4"
                                />

                                {/* unidade */}
                                <input
                                    placeholder="Unidade"
                                    className="border border-gray-300 rounded-md text-gray-500 h-8 w-28 p-4"
                                />

                                {/* tipo */}
                                <input
                                    placeholder="Tipo"
                                    className="border border-gray-300 rounded-md text-gray-500 h-8 w-[12rem] p-4"
                                />

                                {/* vida util */}
                                <input
                                    placeholder="Vida Útil"
                                    className="border border-gray-300 rounded-md text-gray-500 h-8 w-[12rem] p-4"
                                />


                                {/* Botao adicionar */}
                                <button
                                    onClick={e => e.preventDefault()}
                                    className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                                >Adicionar
                                </button>

                                {/* botao cancelar */}
                                <button
                                    onClick={() => setShowAddMaterial(!showAddMaterial)}
                                    className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-48 rounded-md m-auto"
                                >
                                    Cancelar
                                </button>


                            </form>
                        </div>


                    </div>
                )}
            <MaterialCadastroTable data={data} />
        </div>
    )
}