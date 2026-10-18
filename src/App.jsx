import { useState } from "react";
import "./css"; // 1. Importamos el archivo CSS

function App() {
  const [dado, setDado] = useState(1);

  const carasDado = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setDado(resultado);
  }

  // Devuelve el mensaje según el valor actual del dado
  function obtenerMensaje() {
    if (dado === 1) {
      return "Mala suerte, sacaste 1";
    } else if (dado === 6) {
      return "¡FELICIDADES! ¡Sacaste el mayor!";
    } else {
      return `¡Buen tiro, sacaste ${dado}!`;
    }
  }

  return (
    <div className="main-card">
      {/* Título estilizado */}
      <h1 className="titulo">Simulador de Dado</h1>

      {/* Contenedor principal de 3 columnas */}
      <div className="grid-container">
        {/* Columna 1: Botones a la izquierda */}
        <div className="columna-botones">
          <button className="btn-dado" onClick={lanzarDado}>
            Lanzar Dado 1
          </button>
          <button className="btn-dado" onClick={lanzarDado}>
            Lanzar Dado 2
          </button>
        </div>

        {/* Columna 2: Número en el medio */}
        <div className="box-centro">
          <span className="numero-resultado">{dado}</span>
        </div>

        {/* Columna 3: Icono/Caras del dado a la derecha */}
        <div className="box-dado">
          <span className="icono-dado">{carasDado[dado - 1]}</span>
        </div>
      </div>

      {/* Banner de resultado inferior */}
      <div className={`banner-resultado ${dado === 1 ? 'mala-suerte' : ''}`}>
        {obtenerMensaje()}
      </div>
    </div>
  );
}

export default App;