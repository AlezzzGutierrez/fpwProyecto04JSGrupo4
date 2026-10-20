import "../css/player-card.css";

function PlayerCard({ player }) {
  if (!player) return null;

  return (
    <div className="player-card">
      <h3>Datos del Jugador</h3>
      <p><strong>Nombre:</strong> {player.firstName}</p>
      <p><strong>Apellido:</strong> {player.lastName}</p>
      <p><strong>Edad:</strong> {player.age} años</p>
    </div>
  );
}

export default PlayerCard;