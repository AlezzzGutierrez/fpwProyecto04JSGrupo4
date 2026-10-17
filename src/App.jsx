
import { useState } from "react";

function App() {
  const [dado, setDado] = useState(1);

  function lanzarDado() {
    setDado(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div>
      <h1>Simulador de Dado</h1>

      <div>
        {dado}
      </div>

      <button onClick={lanzarDado}>
        Lanzar Dado
      </button>
    </div>
  );
}

export default App;
