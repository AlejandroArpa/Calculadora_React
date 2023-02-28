
import './App.css';
import Pantalla from "./components/Pantalla"
import Boton from "./components/boton"
import BotonClear from "./components/BotonClear"
import { useState } from 'react';
import { evaluate } from "mathjs"

function App() {

  const [input, setInput] = useState("");
  
  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResul = () => {
    if (input){
      setInput(evaluate( input ))
    } else{
      alert("ingrese pues un valor")
    }
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResul}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'></div>
          <BotonClear manejarClear={() => setInput("")}>Borrar</BotonClear>
      </div>
    </div>
  );
}

export default App;
