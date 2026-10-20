import "../css/game-results.css";

function GameResults({ rolls = [], totalScore = 0 }) {

  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Historial de Tiradas</h3>
        <p><strong>Puntaje Total:</strong> {totalScore}</p>
      </div>

      {/* Si no hay tiradas aún */}
      {rolls.length === 0 ? (
        <p>Sin tiradas registradas.</p>
      ) : (
        /* Tabla de resultados */
        <table className="results-table">
          <thead>
            <tr>
              <th>N° de Tirada</th>
              <th>Hora</th>
              <th>Dados</th>
              <th>Suma</th>
            </tr>
          </thead>
          <tbody>
            {rolls.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.time}</td>
                <td>{item.result}</td>
                <td>{item.sum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default GameResults;