
import { useState } from "react";

function App() {
  const [dado, setDado] = useState(1);

  const carasDado = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setDado(resultado);
  }

  return (
    <div>
      <h1>Simulador de Dado</h1>

      <div>{carasDado[dado - 1]}</div>

      <button onClick={lanzarDado}>
        Lanzar Dado
      </button>
    </div>
  );
}

export default App;
