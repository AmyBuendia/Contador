import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotondeClic, manejarClic }) {
    return (
        <button
            className={ esBotondeClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton;
