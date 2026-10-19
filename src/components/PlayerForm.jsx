import { useState } from "react";
import { validatePlayerForm } from "../js/validation.js";

function PlayerForm({ onSavePlayer }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue automáticamente

    const playerData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    // Valida usando validatePlayerForm de validation.js
    const validationErrors = validatePlayerForm(playerData);
    setErrors(validationErrors);

    // Si hay mensajes de error en el objeto se frena
    if (Object.values(validationErrors).length > 0) {
      return;
    }

    onSavePlayer(playerData);
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <h2>Registro de Jugador</h2>

      <div className="form-group">
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="Nombre"
        />
        {errors.firstName && <span className="error-text">{errors.firstName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Apellido"
        />
        {errors.lastName && <span className="error-text">{errors.lastName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="age">Edad:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="10"
        />
        {errors.age && <span className="error-text">{errors.age}</span>}
      </div>

      <button type="submit" className="btn-submit">
        Guardar Jugador
      </button>
    </form>
  );
}

export default PlayerForm;