import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeSelect.css'

const PokeSelect = ({setTypeFilter}) => {

    const [types,getTypes] = useFetch()

    
    useEffect(() => {
        const url= 'https://pokeapi.co/api/v2/type'
        getTypes(url)
    }, [])
    
    const valueSelect= useRef()

    const handleChange = () => {
        setTypeFilter(valueSelect.current.value)
    }


  return (
    <select onChange={handleChange} ref={valueSelect}>
    <option value="">All types of pokemons</option>
    {
        types?.results.map(type => (
            <option className='pokeselector__list' key={type.url} value={type.url}>
                {type.name}
            </option>
        ))
    }

    </select>
  )
}

export default PokeSelect