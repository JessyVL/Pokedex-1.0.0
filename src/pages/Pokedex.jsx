import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeSelect from '../components/pokedex/PokeSelect'
import '../pages/styles/pokedex.css'
import PokeCard from '../components/pokedex/PokeCard'
import Pagination from '../components/pagination/Pagination'



const Pokedex = () => {

    const trainer=useSelector((store) => store.trainer)
    const [inputValue, setInputValue]= useState('')
    const [typeFilter, setTypeFilter] = useState('')

    const [itemsPerPage, setItemsPerPage] = useState(12); 

    const [pokemons,getPokemons,getType]= useFetch();
    
    useEffect(() => {
        if (typeFilter) {
            getType(typeFilter)    
        } else {
        const url='https://pokeapi.co/api/v2/pokemon/?limit=1400'
        getPokemons(url)      
        }
    }, [typeFilter])
    
    const textInput= useRef()

    const handleSubmit= (event) => {
        event.preventDefault()
        setInputValue(textInput.current.value.trim().toLowerCase())
        textInput.current.value=''
    }


    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setPage(1); 
      }


    const cbFilter= (poke) => {
        return poke.name.includes(inputValue)
    }


     // creando la pagination
    const [page, setPage] = useState(1);
    const quantity = itemsPerPage;
    const filteredPokemons = pokemons?.results?.filter(cbFilter) || [];
    const total = Math.ceil(filteredPokemons.length / quantity);

    const paginatedPokemons = () => {
    const end = quantity * page;
    const start = end - quantity;
    return filteredPokemons.slice(start, end);
  }




  return (
    <div className='pokedex'>
        <div className='pokedex__header'>
        <h3 className='pokedex__title'> 
        Welcome <span className='pokedex__wave'>{trainer}</span>,<span> here you could find your favorite pokemon, let's go!</span></h3>
        <div className='pokedex__filters'>

        <div className='pokedex__items-per-page'>
            <label htmlFor='itemsPerPage' className='pokedex__label'>Items: </label>
            <input 
              type='number' 
              id='itemsPerPage' 
              value={itemsPerPage} 
              onChange={handleItemsPerPageChange} 
              className='pokedex__input-number' 
              min={1} 
            />
          </div>
            <form onSubmit={handleSubmit}>
                <input className='pokedex__input' ref={textInput} type="text" />
                <button className='pokedex__btn'>Search</button>
            </form>
            <PokeSelect
            setTypeFilter={setTypeFilter}
            />
        </div>
        </div>
        <Pagination
         page={page}
         setPage={setPage}
         total={total}
        />

        <div className='pokedex__container'>
            {
            // Con la paginacion ignoramos lo sgte: pokemons?.results.filter(cbFilter).map((poke) => (
                paginatedPokemons().map((poke) => (
                <PokeCard
                key={poke.url}
                url={poke.url}
                />
            ))
            }
        </div>

        <Pagination
            page={page}
            setPage={setPage}
            total={total}
        />
        
    </div>
  )
}

export default Pokedex