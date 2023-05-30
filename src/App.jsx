import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const incrementar = () => {
    setNumClics (numClics + 1)
  }

  const decrementar = () => {
    setNumClics (numClics - 1)
  }

  const reiniciar = () => {
    setNumClics (0)
  }
  return (
    
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}/>
        <div className='btn'>
        <Boton
        texto='-'
        tipoBoton={decrementar}/>
         <Boton
        texto='+'
        tipoBoton={incrementar}/>
         <Boton
        texto='Reiniciar'
        tipoBoton={reiniciar}/>
        </div>
        
      </div>
  )
}

export default App
