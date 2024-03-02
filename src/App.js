import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import logoAmy from './imagenes/AMY.png';
import { useState } from 'react';



function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo-amy'
          src={logoAmy}
          alt='logo de amy'/> 
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotondeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotondeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
