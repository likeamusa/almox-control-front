import { useEffect, useState } from 'react';
import './index.css'

const Autocomplete = ({ data, ...props }) => {

    const [ inputSearch, setInputSearch ] = useState('');
    const [ filterSearch, setFilterSearch ] = useState([]);

    const handleFilter = (e) => {
        setInputSearch(e.target.value);

        props.onChange(e);

        if(!data) return setFilterSearch([])
        
        const newFilter = data.filter((value) => {
            
            return value.nome.toLowerCase().includes(inputSearch.toLowerCase());

        })

        if(inputSearch === ''){
            setFilterSearch([]);
        }else{
            setFilterSearch(newFilter);
        }

    }

    useEffect(() => { 
        if(inputSearch === ''){
            setFilterSearch([]);
        }   
    }, [inputSearch]);

    return (
        <div
        className="form-group"
        >
            <input
            className="form-control"
            type="text"
            autoComplete='off'
            name={props.name}
            onChange={handleFilter}
            value={inputSearch}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            />
            {filterSearch !== 0 && (

                    <div 
                    className="data-result"
                    >
                    {filterSearch.map((item) => (
                        <div
                        key={item.id}
                        className="data-item"
                        onClick={() => {
                            setInputSearch(item.nome);
                            setFilterSearch([]);
                        }}
                        >
                            <p>{item.nome}</p>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
};

export default Autocomplete;