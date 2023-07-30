import Container from "../../../../components/container";
import MovimentacaoTable from "../../components/MovimentacaoTable";
import { useNavigate } from "react-router-dom";

const data = [
    {
        id: 1,
        mov: 'Entrada',
        origem: 'Fornecedor',
        material: 634,
        descricao: 'LUVA VAQUETA BR',
        unidade: 'UN',
        quantidade: 1,
        unidades: 'UN',
        data: '01/01/2021',
        solicitante: 'João',
        observacao: 'Observação 1',
        usuario: 'João',
        destino: 'Estoque',
        tipo: 'Ferramental',
        nf: 123,


    }
]


export default function Movimentacoes(){

    const navigate = useNavigate();

    return(
        <Container>
            <div className="flex justify-evenly items-center h-11 bg-zinc-300 px-4">
                {/* voltar */}
                <a 
                onClick={() => navigate('/estoque')}
                className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    Voltar
                </a>
                <a 
                onClick={() => navigate('/estoque/movimentacoes/nova')}
                className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    Nova Movimentação
                </a>
            </div>
            <MovimentacaoTable data={data} />
        </Container>
    )
}