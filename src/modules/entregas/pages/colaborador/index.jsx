import { useParams, useNavigate } from "react-router-dom";
import Container from "../../../../components/container";
import Barra from "../../../../components/Barra";
import ColabEpiTableComponent from "./components/TableEntregas";
import HistoryColabMaterialTableComponent from "./components/HistoryColabMaterialTable";
import ColabFerramentalTableComponent from "./components/ColabFerramentalTableComponent";

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


export default function ColaboradorPage() {

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
            <div
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

                <ColabEpiTableComponent data={data} />
            </div>


            <div
                className="h-auto bg-zinc-100 w-full m-auto flex flex-col justify-center border border-gray-400 rounded-md"
            >

                <h1
                    className="text-2xl font-bold m-auto"
                >Ferramental
                </h1>

                <div className="flex justify-center items-center h-11 bg-zinc-300 px-4">
                </div>

                <ColabFerramentalTableComponent data={data} />

            </div>

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

        </Container>
    );
}