import EstoqueTable from "../../components/EstoqueTable";
import Container from "../../../../components/container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    material: 'Material 1',
    descricao: 'LUVA VAQUETA BR',
    quantidade: 10,
    unidade: 'UN',
    valor: 10.00,
    estoque_medio: 30,
    estoque_minimo: 10,
    tipo: "Ferramental"
  },
  {
    material: 'Material 2',
    descricao: 'OCULOS DE PROTEÇÃO',
    quantidade: 20,
    unidade: 'UN',
    valor: 20.00,
    estoque_medio: 30,
    estoque_minimo: 10,
    tipo: "EPI"
  },
]
export default function Estoque() {

  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const concatData = data.map((item) => {
      return Object.values(item).join('-').toLowerCase();
    });
    if (value !== '') {
      const filtered = concatData.filter((item) => {
        return item.includes(value);
      });
      const newData = filtered.map((item) => {
        return data[concatData.indexOf(item)];
      });
      setFilteredData(newData);
    }
  }

  return (
    <Container>
      <div className="flex justify-evenly items-center h-11 bg-zinc-300 px-4">
        <a className="text-blue-500 hover:text-blue-600 cursor-pointer">
          Atualizar
        </a>

        {/* movimentacoes */}
        <a
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={() => {
            navigate('/estoque/movimentacoes')
          }}
        >
          Movimentações
        </a>

        {/* filtrar material */}
        <input
          className="border border-gray-300 rounded-md px-2 py-1 w-64"
          placeholder="Filtrar Material"
          onChange={handleSearch}
        />

        <select
          className="border border-gray-300 rounded-md px-2 py-1 w-48"
        >
          <option value="">Todos</option>
          <option value="pl">Portelandia-Go</option>
          <option value="rv">Rio Verde-Go</option>
        </select>
      </div>
      <EstoqueTable data={filteredData} />
    </Container>
  );
}