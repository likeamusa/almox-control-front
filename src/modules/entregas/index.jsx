import ColabTableComponent from "./components/table";
import Container from "../../components/container";
import { useState } from "react";

const data = [
    {
        matricula: '2019000001',
        nome: 'João da Silva',
        funcao: 'Auxiliar de Almoxarifado',
        status: 'Irregular',
    },
    {
        matricula: '2019000002',
        nome: 'Maria da Silva',
        funcao: 'Auxiliar de Administrativo',
        status: 'Regular',
    }
];

export default function Entregas() {

    const [filteredData, setFilteredData] = useState(data);

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
                <input 
                type="text" 
                placeholder="Pesquisar Colaborador"
                name="colaborador" 
                className="w-[30%] h-8 border border-gray-400 rounded-md px-2"
                onChange={handleSearch}
                />
            </div>
            {/* tabela de colaboradores */}
            <ColabTableComponent data={filteredData} />
        </Container>
    );
}