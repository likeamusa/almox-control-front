import Container from "../../../../components/container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function NovaMov() {

    const [tipoMov, setTipoMov] = useState('');

    const navigate = useNavigate();

    return (
        <Container>
            <div className="flex justify-evenly items-center h-11 bg-zinc-300 px-4">


                {/* cancelar */}
                <a
                    onClick={() => navigate('/estoque')}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                    Cancelar
                </a>

                {/* tipo de entrada */}
                <select
                    className="border border-gray-300 rounded-md text-gray-500 h-8 w-48"
                    onChange={(e) => setTipoMov(e.target.value)}
                >
                    {/* Selecione */}
                    <option value="">Selecione</option>
                    {/* nf */}
                    <option value="nf">Nota Fiscal</option>

                    {/* inbound */}
                    <option value="inbound">In-Bound</option>

                    {/* outboud*/}
                    <option value="outbound">Out-Bound</option>

                </select>

            </div>
            {/* nf */}
            {tipoMov === "nf" && (
                <div className="flex flex-col items-center justify-center">
                    <label className="text-gray-500 font-bold text-xl">Nota Fiscal</label>
                    <input
                        className="border border-gray-300 rounded-md text-gray-500 h-8 w-48"
                    />
                </div>
            )}

            {/* inbound */}
            {tipoMov === "inbound" && (
                <div className="flex flex-col items-center justify-center">
                    <label className="text-gray-500 font-bold text-xl">In-Bound</label>
                    <input
                        className="border border-gray-300 rounded-md text-gray-500 h-8 w-48"
                    />
                </div>
            )}

            {/* outbound */}
            {tipoMov === "outbound" && (
                <div className="flex flex-col items-center justify-center">
                    <label className="text-gray-500 font-bold text-xl">Out-Bound</label>
                    <input
                        className="border border-gray-300 rounded-md text-gray-500 h-8 w-48"
                    />
                </div>
            )}

        </Container>
    )
}