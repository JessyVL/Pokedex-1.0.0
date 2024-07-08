import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../pages/styles/homePage.css'

const HomePage = () => {

    const dispatch= useDispatch();

    const navigate= useNavigate();


    const textInput= useRef();

    const HandleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainer(textInput.current.value.trim()));
        textInput.current.value= '';
        navigate('/pokedex');
    }


  return (
    <div className='pokeHome'>
    <div className='pokeHome__container'>
    <h2 className='pokeHome__hello'>Hi trainer</h2>
    <p className='pokeHome__presentation'>To start give me your name</p>
    <form className='pokeHome__form' onSubmit={HandleSubmit}>
        <input className='pokeHome__input' ref={textInput} type="text" />
        <button className='pokeHome__btn'>Start</button>
    </form>
    </div>
    </div>
  )
}

export default HomePage