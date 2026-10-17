
import { useState } from "react";

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
      return "Buen tiro!";
    }
  }

  return (
    <div>
      <h1>Simulador de Dado</h1>

      <div>{carasDado[dado - 1]}</div>

      <button onClick={lanzarDado}>
        Lanzar Dado
      </button>

      <p>{obtenerMensaje()}</p>
    </div>
  );
}

export default App;