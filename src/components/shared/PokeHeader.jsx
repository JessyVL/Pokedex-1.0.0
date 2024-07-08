import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/pokeHeader.css'
import DarkModeButton from '../darkMode/DarkModeButton';

const PokeHeader = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pokedex');
  }


  return (
    <div className='pokeheader'>
        <div className='pokeheader__red'>
          <figure className='pokeheader__img'>
            <img src="../../../assets/pokedex.png" alt="pokedex image" onClick={handleClick} />
          </figure>
        </div>
          <div className='pokeheader__black'>
             <div className='pokeheader__outcircle'>
                <div className='pokeheader__incircle'></div>
          </div>
          <DarkModeButton />
        </div>
    </div>
  )
}

export default PokeHeader