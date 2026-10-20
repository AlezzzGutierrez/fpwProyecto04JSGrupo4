export const validatePlayerForm = (playerData) => {
  const errors = {};

  //Verificará q no se ingresen simbolos especiales en los campos
  const lettersRegex = /^[\p{L}\s]+$/u;

  // Verifica que ninguno de los campos esté vacío (!) o solo con espacios (.trim) y el largo de las cadenas ingresadas (.length)
  if (!playerData.firstName.trim()) {
    errors.firstName = "El nombre es obligatorio.";
  } else if (!lettersRegex.test(playerData.firstName.trim())) {
    errors.firstName = "El nombre no puede contener símbolos especiales ni números.";
  }else if (playerData.firstName.trim().length > 20) {
    errors.firstName = "El nombre no puede tener más de 20 caracteres.";
  }

  if (!playerData.lastName.trim()) {
    errors.lastName = "El apellido es obligatorio.";
  } else if (!lettersRegex.test(playerData.lastName.trim())) {
    errors.lastName = "El apellido no puede contener símbolos especiales ni números.";
  }else if (playerData.lastName.trim().length > 10) {
    errors.lastName = "El apellido no puede tener más de 10 caracteres.";
  }

  // Verifica además que  que sea un numero (isNaN), que sea mayor a 0 y menor a 100 
  if (!playerData.age) {
    errors.age = "La edad es obligatoria.";
  } else if (isNaN(playerData.age) || Number(playerData.age) <= 0) {
    errors.age = "Por favor ingresa una edad válida.";
  } else if (Number(playerData.age) > 100) {
    errors.age = "La edad no puede ser mayor a 100 años.";
  }

  return errors;
};