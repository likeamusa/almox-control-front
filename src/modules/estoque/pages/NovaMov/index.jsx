import Container from "../../../../components/container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NovMovTable from "../../components/NovMovTable";


export default function NovaMov() {

    const [tipoMov, setTipoMov] = useState('');

    const navigate = useNavigate();

    const data = [
        {
            materialId: 123,
            descricao: "luva de vaqueta",
            quantidade: 2,
            umb: "UN",
            c_a_: 1234,
            laudo: '5027052/0752067',
            lote: 20584,
        }
    ]

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

                <a
                    onClick={() => navigate('/estoque')}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                    Adicionar
                </a>

                {/* salvar */}
                <a
                    onClick={() => navigate('/estoque')}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                    Salvar
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
                    <option value="inbound">InBound</option>

                    {/* outbound */}
                    <option value="outbound">OutBound</option>

                    {/* outboud*/}
                    <option value="transferencia">Transferencia</option>

                    {/* Inventario */}
                    <option value="inventario">Inventario</option>

                </select>

            </div>

            {/* NOTA FISCAL */}
            {tipoMov === "nf" && (
                <div className="flex flex-col justify-center gap-4 align-middle">

                    <form
                        className="border border-gray-300 rounded-md p-4 flex flex-row gap-4 align-middle"
                        onClick={(e) => e.preventDefault()}
                    >

                        {/* fornecedor */}
                        <input
                            placeholder="Fornecedor"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-48 p-4"
                        />

                        {/* Nota Fiscal */}
                        <input
                            placeholder="Nota Fiscal"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-48 p-4"
                        />

                        <input
                            placeholder="Data"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-48 p-4"
                        />

                        {/* n pedido */}
                        <input
                            placeholder="Nº Pedido"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-48 p-4"
                        />

                        {/* botao confirmar / editar */}
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                        >Confirmar</button>

                        {/* botao cancelar */}
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-48 rounded-md m-auto"
                        >Cancelar</button>

                    </form>


                    <div
                        className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                    >
                        <form
                            className="flex flex-row gap-4 align-middle justify-evenly"
                        >

                            {/* material */}
                            <input
                                placeholder="Material"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-[28rem] p-4"
                            />

                            {/* quantidade */}
                            <input
                                placeholder="Quantidade"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* valor */}
                            <input
                                placeholder="Valor"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* Botao adicionar */}
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                            >Adicionar</button>

                        
                        </form>
                    </div>


                </div>
            )}

            {/* INBOUND */}
            {tipoMov === "inbound" && (
                <div className="flex flex-col justify-center gap-4 align-middle">

                    <form
                        className="border border-gray-300 rounded-md p-4 flex flex-row gap-4 align-middle"
                        onClick={(e) => e.preventDefault()}
                    >

                        {/* numero do pedido de transferencia */}
                        <input
                            placeholder="Nº Pedido de Transferencia"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-48 p-4"
                        />

                      
                        {/* botao confirmar / editar */}
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                        >Confirmar</button>

                        {/* botao cancelar */}
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-48 rounded-md m-auto"
                        >Cancelar</button>

                    </form>


                    <div
                        className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                    >
                        <form
                            className="flex flex-row gap-4 align-middle justify-evenly"
                        >

                            {/* material */}
                            <input
                                placeholder="Material"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-[28rem] p-4"
                            />

                            {/* quantidade */}
                            <input
                                placeholder="Quantidade"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* valor */}
                            <input
                                placeholder="Valor"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* Botao adicionar */}
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                            >Adicionar</button>


                        </form>
                    </div>


                </div>
            )}

            {/* OUTBOUND */}
            {tipoMov === "outbound" && (
                <div className="flex flex-col justify-center gap-4 align-middle">

                <form
                    className="border border-gray-300 rounded-md p-4 flex flex-row gap-4 align-middle"
                    onClick={(e) => e.preventDefault()}
                >

                    {/* numero do pedido de transferencia */}
                    <input
                        placeholder="Nº Pedido de Transferencia"
                        className="border border-gray-300 rounded-md text-gray-500 h-8 w-48 p-4"
                    />

                  
                    {/* botao confirmar / editar */}
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                    >Confirmar</button>

                    {/* botao cancelar */}
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-48 rounded-md m-auto"
                    >Cancelar</button>

                </form>


                <div
                    className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                >
                    <form
                        className="flex flex-row gap-4 align-middle justify-evenly"
                    >

                        {/* material */}
                        <input
                            placeholder="Material"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-[28rem] p-4"
                        />

                        {/* quantidade */}
                        <input
                            placeholder="Quantidade"
                            type="number"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                        />

                        {/* valor */}
                        <input
                            placeholder="Valor"
                            type="number"
                            className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                        />

                        {/* Botao adicionar */}
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                        >Adicionar</button>


                    </form>
                </div>


            </div>
            )}

            {/* TRANSFERENCIA */}
            {tipoMov === "transferencia" && (
                <div className="flex flex-col justify-center gap-4 align-middle">

                    <form
                        className="border border-gray-300 rounded-md p-4 flex flex-row gap-4 align-middle"
                        onClick={(e) => e.preventDefault()}
                    >

                        {/* origem */}
                        <select
                        className="border border-gray-300 rounded-md text-gray-500 h-8 w-48"
                        >
                            <option value="">Selecione origem</option>
                            <option value="pl">Portelandia</option>
                            <option value="rv">Rio-Verde</option>
                        </select>

                        {/* destino */}
                        <select
                        className="border border-gray-300 rounded-md text-gray-500 h-8 w-48"
                        >
                            <option value="">Selecione destino</option>
                            <option value="pl">Portelandia</option>
                            <option value="rv">Rio-Verde</option>
                        </select>
                      
                        {/* botao confirmar / editar */}
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                        >Confirmar</button>

                        {/* botao cancelar */}
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-48 rounded-md m-auto"
                        >Cancelar</button>

                    </form>


                    <div
                        className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                    >
                        <form
                            className="flex flex-row gap-4 align-middle justify-evenly"
                        >

                            {/* material */}
                            <input
                                placeholder="Material"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-[28rem] p-4"
                            />

                            {/* quantidade */}
                            <input
                                placeholder="Quantidade"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* valor */}
                            <input
                                placeholder="Valor"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* Botao adicionar */}
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                            >Adicionar</button>


                        </form>
                    </div>


                </div>

            )}

            {/* inventario */}
            {tipoMov === "inventario" && (
                <div className="flex flex-col justify-center gap-4 align-middle">


                    <div
                        className="border border-gray-300 rounded-md p-4 flex flex-col align-middle"
                    >
                        <form
                            className="flex flex-row gap-4 align-middle justify-evenly"
                        >

                            {/* material */}
                            <input
                                placeholder="Material"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-[28rem] p-4"
                            />

                            {/* quantidade */}
                            <input
                                placeholder="Quantidade"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* valor */}
                            <input
                                placeholder="Valor"
                                type="number"
                                className="border border-gray-300 rounded-md text-gray-500 h-8 w-32 p-4"
                            />

                            {/* Botao adicionar */}
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-48 rounded-md m-auto"
                            >Adicionar</button>


                        </form>
                    </div>


                </div>
            )}

            {/* TABELA */}
            {tipoMov !== "" && (
                <NovMovTable data={data} />
            )}

        </Container>
    )
}