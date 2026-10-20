import { useState } from "react";
import PlayerForm from "./components/PlayerForm.jsx";
import PlayerCard from "./components/PlayerCard.jsx";
import GameResults from "./components/GameResults.jsx";
import "./css/style.css";
import "./css/player-return.css";

function App() {
  // 1. Estado para guardar los datos del jugador registrado
  const [player, setPlayer] = useState(null);

  // 2. Estados para el juego de dados
  const [rolls, setRolls] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  // Se ejecuta cuando el usuario se registra con éxito en el PlayerForm
  const handleSavePlayer = (playerData) => {
    setPlayer(playerData);
  };

  // Función para lanzar el dado (adaptada a tu estilo y guardando el historial)
  const lanzarDado = () => {
    const resultado = Math.floor(Math.random() * 6) + 1;

    // Obtiene la hora actual para la tabla de resultados
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Creamos el objeto de la tirada para GameResults
    const nuevaTirada = {
      time: timeString,
      result: resultado,
      sum: resultado
    };

    // Actualizamos el historial y el puntaje acumulado
    setRolls(rolls.concat(nuevaTirada));
    setTotalScore(totalScore + resultado);
  };

  // Función para reiniciar o cambiar de jugador
  const handleReset = () => {
    setPlayer(null);
    setRolls([]);
    setTotalScore(0);
  };

  return (
    <div className="main-card">
      <h1 className="titulo">Simulador de Dado</h1>

      {!player ? (
        /* Si NO hay jugador*/
        <PlayerForm onSavePlayer={handleSavePlayer} />
      ) : (
        /* SÍ hay jugador */
        <div className="game-active-section">

          {/* Datos del jugador */}
          <PlayerCard player={player} />

          {/* Sección del juego de dados */}
          <div className="grid-container" style={{ marginTop: '20px' }}>
            <div className="columna-botones">
              <button className="btn-dado" onClick={lanzarDado}>
                Lanzar Dado
              </button>
            </div>

            <div className="box-centro">
              <span className="numero-resultado">{rolls.length > 0 ? rolls[rolls.length - 1].result : "-"}</span>
            </div>

            <div className="box-dado">
              <span className="icono-dado">
                {rolls.length > 0 ? ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][rolls[rolls.length - 1].result - 1] : "🎲"}
              </span>
            </div>
          </div>

          {/* Historial de tiradas */}
          <GameResults rolls={rolls} totalScore={totalScore} />

          {/*Botón para salir del usuario registrado*/}
          <div className="button-player-return">
            <button onClick={handleReset} className="btn-submit">
              Cambiar de Jugador
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;