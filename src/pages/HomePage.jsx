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
    <div>
    <h1>Pokedex</h1>
    <h2>Hi trainer</h2>
    <p>To start give me your name</p>
    <form onSubmit={HandleSubmit}>
        <input ref={textInput} type="text" />
        <button>Start</button>
    </form>
    </div>
  )
}

export default HomePage