
# Robert Fuentes Facundo Guillermo

## Proyecto 04 - Grupo N.º 4 / Componentes de Registro, Datos del Jugador e Historial de Tiradas

**Fecha de actualización: 19/10/2026**

Se trabajó en el diseño y maquetación visual de los componentes encargados del registro del jugador, la visualización de sus datos y el historial de tiradas. Se mantuvo la coherencia cromática y estética con el resto de la aplicación, utilizando la paleta de colores acordada (verde salvia, azul marino y verde oscuro), contenedores semitransparentes y bordes redondeados.

### Actividades realizadas

1. **Estilos del formulario de jugador**
* Diseño visual y maquetación de los campos de entrada para nombre, apellido y edad.
* Estilizado del botón para guardar la información del jugador.
* Aplicación de estilos específicos para resaltar mensajes de validación y campos activos.


2. **Estilos de la tarjeta del jugador**
* Diseño del contenedor de presentación con datos del jugador (nombre, apellido y edad).
* Implementación de fondos semitransparentes y bordes redondeados alineados a la línea gráfica general.


3. **Estilos del historial de tiradas**
* Maquetación de la tabla de resultados para mostrar el número de tirada, hora, valor del dado y suma acumulada.
* Estilizado de encabezados, filas y contenedor del puntaje total.
* Adaptación responsive de la tabla para visualización en pantallas pequeñas.


4. **Estilo independiente para el botón de cambio de jugador**
* Creación de una hoja de estilos propia para el botón "Cambiar de Jugador".
* Aplicación de efectos interactivos (`:hover`, `:active`) manteniendo el aislamiento CSS para evitar interferencias con otros botones.



### Archivos y carpetas creados, modificados y eliminados

**Creados:**

* `src/css/PlayerForm.css`
* `src/css/PlayerCard.css`
* `src/css/GameResults.css`
* `src/css/PlayerReturn.css`

**Modificados:**

* `src/components/PlayerForm.jsx`: importación de sus estilos correspondientes.
* `src/components/PlayerCard.jsx`: importación de sus estilos correspondientes.
* `src/components/GameResults.jsx`: importación de sus estilos correspondientes.
* `src/App.jsx`: importación del estilo para el botón de cambio de jugador.

**Eliminados:**

* [Ninguno]

### Uso de IA

**Sí.** Se utilizó como herramienta de apoyo para estructurar de manera limpia la organización de archivos CSS, definir reglas de estilo para componentes específicos y mantener la coherencia estética con el diseño preexistente.


# Nayla Leiva

## Implementación de Formulario, Validación, Tarjeta de Jugador e Historial de Tiradas

---

### 1. Actividades realizadas
- **Diseño y modularización de la arquitectura:** Separación del proyecto en componentes independientes del ejercicio 2 del práctico (`PlayerForm`, `PlayerCard`, `GameResults`) bajo la carpeta `src/components/` para cumplir con el principio de responsabilidad única.
- **Lógica de validación robusta (`validation.js`):** 
  * Implementación de expresión regular `lettersRegex` (`/^[\p{L}\s]+$/u`) para restringir nombres y apellidos exclusivamente a letras y espacios, evitando símbolos especiales y números.
  * Control estricto de longitudes máximas (20 caracteres para el nombre, 10 para el apellido) y validación de campos obligatorios con `.trim()`.
  * Validación numérica de la edad mediante `isNaN()` y `Number()`, asegurando un rango lógico entre 1 y 100 años.

  - **Gestión de estado y flujo principal (`App.jsx`):** Conexión del formulario con la tarjeta de visualización del usuario (`PlayerCard`) y el registro de la sesión de juego mediante renderizado condicional.
- **Historial de tiradas de dados (`GameResults.jsx`):** 
  * Creación de una tabla dinámica para registrar lanzamientos usando iteración con `.map()`.
  * Incorporación de marcas de tiempo exactas por cada tirada utilizando `new Date().toLocaleTimeString()`.
  * Cálculo y visualización en tiempo real del puntaje total acumulado y formato amigable de los valores de los dados.
- **Actualización de estado con métodos tradicionales:** Uso de `concat()` para la adición segura de elementos al array de tiradas (`rolls`), manteniendo una estructura limpia y fácil de interpretar.

---

### 2. Archivos y carpetas creados, modificados y eliminados

- **Creados:**
  * `src/components/PlayerForm.jsx`: Componente visual y lógico para la captura y validación inicial de los datos del jugador.
  * `src/components/PlayerCard.jsx`: Componente modular para mostrar de forma limpia los datos personales del usuario registrado.
  * `src/components/GameResults.jsx`: Componente dedicado a renderizar el puntaje de los dados, el número de intento y sus respectivas horas en una tabla dinámica.
  * `src/js/validation.js`: Archivo centralizado con la función `validatePlayerForm` que encapsula todas las reglas de validación del formulario.

- **Modificados:**
  * `src/App.jsx`: Integración de los componentes desarrollados, gestión de los estados (`player`, `rolls`, `totalScore`), lógica del simulador de dados y control del flujo de la interfaz.

  - **Eliminados:**
  * *(Ninguno / Se mantuvo una refactorización limpia sobre los archivos base)*

---

### 3. Uso de IA
- Utilizada como herramienta de colaboración técnica para:
  * Refinar la expresión regular unicode (`\p{L}`) para admitir acentos y caracteres propios del español de forma correcta.
  * Estructurar la lógica de validación de edad evitando errores comunes con campos vacíos y valores no numéricos (`NaN`).
  * Aplicar buenas prácticas de modularización en React (separando `PlayerCard` de `GameResults`) y el formateo dinámico de fechas/horas con `toLocaleTimeString()`.
  * Asesorar en la integración armónica de la lógica del simulador de dados original dentro del flujo condicional del nuevo diseño con componentes.


# Salas Yesica Fabiana


# Proyecto 04 - React / #Ejercicio: El Dado de la Suerte
# Fecha de Actualización: 19/10/26
# Tarea: 
Diseño y maquetación visual en CSS (style.css) para la aplicación "El Dado de la Suerte", implementando una maquetación adaptable en 3 columnas mediante CSS Grid, botones estilizados con efectos interactivos (:hover), contenedores semitransparentes para el número y un banner de resultado con cambios de color dinámicos según el valor del dado.
# Métodos y propiedades CSS utilizadas
 * Alineación global y maquetación Flexbox (body, .main-card): centrado vertical y horizontal de la tarjeta principal en pantalla usando display: flex, justify-content: center y align-items: center con la altura fija min-height: 100vh.

 * Distribución en rejilla (.grid-container): estructuración en 3 columnas iguales mediante display: grid y grid-template-columns: 1fr 1fr 1fr, generando un espacio coordinado con gap: 20px para organizar los botones, el número del resultado y el ícono del dado.
 * Disposición de controles (.columna-botones): alineación vertical de las acciones en columna mediante display: flex y flex-direction: column con espaciado uniforme gap: 15px.
 * Estilizado de botones interactivos (.btn-dado y .btn-dado:hover): diseño de botones redondeados (border-radius: 30px) en tono azul marino (#1e4570) con sombra (box-shadow), cursor interactivo y efecto de elevación suave usando transition y transform: translateY(-2px).
 * Contenedores de resultados (.box-centro, .box-dado): diseño de cajas contenedoras con fondo semitransparente rgba(255, 255, 255, 0.35) y bordes redondeados (border-radius: 16px) para mostrar de forma limpia el número y el emoji (.icono-dado con font-size: 6rem).
 * Banner de mensaje condicional (.banner-resultado y .banner-resultado.mala-suerte)
# Métodos modificados: 
*creacion del archivo: style.css
*scr/App.jsx
# Uso de IA:
Si se utilizo, en el proceso
Paleta y tonos de colores: consulta a Inteligencia Artificial para la selección de una combinación cromática armónica y accesible, definiendo el fondo verde suave (#9caf88), los botones en azul marino (#1e4570), el banner principal en verde oscuro (#1c3b22) y el tono rojo de alerta (#8b0000) para la condición de mala suerte.


# Esmeralda González Tolay

## Proyecto 04 - Grupo N.º 4 / Mensajes Condicionales en El Dado de la Suerte

**Fecha de actualización: 17/10/2026**

Se continuó el desarrollo del ejercicio **El Dado de la Suerte**, agregando mensajes condicionales que cambian según el número obtenido al lanzar el dado. Para esto se utilizó el estado de React y el renderizado condicional, de modo que la interfaz se actualiza automáticamente cada vez que se presiona el botón.

### Actividades realizadas

1. **Implementación de mensajes condicionales**
   - Uso de estructuras condicionales (`if`/`else` y/o operador ternario) para evaluar el valor del dado.
   - Definición de mensajes distintos según el resultado, por ejemplo: [ej. "¡Sacaste un 6, mucha suerte!" / "Intentá de nuevo"].
   - Visualización del mensaje en pantalla mediante renderizado condicional en JSX.

2. **Integración con la lógica existente**
   - Uso del estado (`useState`) para almacenar el número del dado y mostrar el mensaje correspondiente.
   - Actualización del mensaje cada vez que se presiona el botón de lanzamiento.

3. **Pruebas**
   - Verificación del funcionamiento con distintos resultados del dado.
   - Corrección de errores detectados durante las pruebas.

### Archivos y carpetas creados, modificados y eliminados

**Creados:**
- [Ninguno].

**Modificados:**
- `src/App.jsx`: incorporación de los mensajes condicionales y actualización de la interfaz.

**Eliminados:**
- [Ninguno]

### Uso de IA

**Sí.** Se utilizó como herramienta de apoyo para comprender el renderizado condicional en React.


# Gianella Gutierrez

## Proyecto 04 - Grupo N.º 4 / Inicialización del Proyecto e Implementación de la Lógica del Dado

**Fecha de actualización: 18/10/2026**

Se realizó la configuración inicial del entorno de desarrollo, instalando Node.js y utilizando Vite para crear y ejecutar el servidor local del proyecto React. Se organizó la estructura de carpetas para facilitar la distribución y el desarrollo de los componentes, páginas, estilos y lógica de la aplicación.

Posteriormente, se inició el desarrollo del ejercicio **El Dado de la Suerte**, implementando la lógica para generar un número aleatorio entre 1 y 6 al presionar el botón de lanzamiento, utilizando el estado de React para actualizar el valor mostrado.

### Actividades realizadas

1. **Configuración del entorno de desarrollo**
   - Instalación de Node.js y npm.
   - Creación e inicialización del proyecto con Vite utilizando React y JavaScript.
   - Instalación de las dependencias necesarias.
   - Ejecución del servidor local de desarrollo mediante `npm run dev`.

2. **Organización de la estructura del proyecto**
   - Creación de carpetas para separar los distintos elementos de la aplicación.
   - Organización inicial de la estructura para facilitar el trabajo individual y grupal.

3. **Ejercicio: El Dado de la Suerte**
   - Implementación de la lógica para generar un número aleatorio entre 1 y 6.
   - Utilización de `useState` para almacenar y actualizar el valor del dado.
   - Implementación del evento de lanzamiento mediante un botón.
   - Preparación de la lógica para mostrar el resultado obtenido.

   ### Archivos y carpetas creados, modificados y eliminados

**Creados:**
- `src/components/`: componentes reutilizables.
- `src/css/`: archivos de estilos.
- `src/js/`: archivos JavaScript.
- `src/pages/`: páginas del proyecto.
- `src/services/`: organización de servicios y lógica auxiliar.
- Archivos iniciales para la implementación del ejercicio del dado.

**Modificados:**
- `src/App.jsx`: implementación de la lógica principal del dado y actualización de la interfaz.
- Archivos de configuración y estructura inicial del proyecto, según las necesidades del desarrollo.

**Eliminados:**
- `src/App.css`: estilos predeterminados de la aplicación que no eran necesarios.
- Archivos de iconos y recursos visuales predeterminados que no se utilizarían.
- `src/index.css`: estilos globales iniciales que se decidió retirar para adaptar la estructura del proyecto.

### Uso de IA

**Sí.** Se utilizó como herramienta de apoyo para resolver dudas sobre la configuración del entorno de desarrollo, la organización de carpetas, el funcionamiento de React y la implementación de la lógica para generar números aleatorios en el ejercicio del dado.