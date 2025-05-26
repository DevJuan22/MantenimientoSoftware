# Proyecto ChatBot - Mantenimiento de Software

Este proyecto implementa un chatbot en React conectado con un backend Express y MongoDB. Fue desarrollado como parte del curso de Mantenimiento de Software.

---

## 🧾 Historias de Usuario Implementadas

### 🟩 HU01 - Agregar pregunta al chatbot

**Como** administrador,  
**quiero** poder agregar nuevas preguntas y respuestas desde la interfaz,  
**para** que el chatbot responda a nuevos temas personalizados.

- Se modificó el archivo `addquestions.js`.
- Se agregó validación para evitar campos vacíos.
- Se creó la rama `hu01-agregar-pregunta`.

---

### 🟦 HU02 - Mensaje de bienvenida

**Como** usuario del chatbot,  
**quiero** ver un mensaje de bienvenida al iniciar,  
**para** saber que el sistema está listo para atenderme.

- Se modificó el archivo `ChatBot.js`.
- Se agregó un mensaje del bot al iniciar el componente.
- Se creó la rama `hu02-mensaje-bienvenida`.

---

### 🟥 HU03 - Eliminar preguntas existentes

**Como** administrador,  
**quiero** eliminar preguntas registradas,  
**para** mantener la base de datos actualizada y sin contenido innecesario.

- Se modificó el archivo `ListQuestions.js`.
- Se agregó un botón de "Eliminar" para cada pregunta.
- Se creó la rama `hu03-borrar-preguntas`.

---

### 🟨 HU04 - Listar todas las preguntas

**Como** administrador,  
**quiero** ver una lista completa de las preguntas existentes,  
**para** tener visibilidad sobre el contenido disponible.

- Se creó el archivo `ListQuestions.js`.
- Se implementó un componente que lista todas las preguntas desde la API.
- Se creó la rama `hu04-ver-preguntas`.

---

### 🟪 HU05 - Editar una pregunta o respuesta

**Como** administrador,  
**quiero** poder modificar una pregunta o su respuesta,  
**para** corregir errores o actualizar la información del chatbot.

- Se modificó el archivo `ListQuestions.js`.
- Se agregó funcionalidad de edición usando un formulario emergente.
- Se creó la rama `hu05-editar-pregunta`.

---

## 👥 Integrantes

- Julián (GitHub: `JulianTriana11`)
- Juan (GitHub: `DevJuan22`)

---

## 🛠️ Comandos Git utilizados

Se utilizaron los siguientes comandos a lo largo del desarrollo:

- `git clone`
- `git branch`
- `git checkout`
- `git add`
- `git commit`
- `git push`
- `git pull`
- `git status`
- `git log`
- `.gitignore`

---

## 🚀 Tecnologías Utilizadas

- React  
- Node.js  
- Express  
- MongoDB

---

## 📦 Instalación

1. Clonar el repositorio:  
   `git clone https://github.com/DevJuan22/MantenimientoSoftware.git`

2. Instalar dependencias:  
   - Frontend:  
     ```bash
     cd frontend
     npm install
     ```
   - Backend:  
     ```bash
     cd backend
     npm install
     ```

3. Ejecutar servidores:  
   - Backend: `npm start`  
   - Frontend: `npm start`

---

## 📌 Notas

Este proyecto fue desarrollado como actividad académica para demostrar conocimientos de mantenimiento, control de versiones y colaboración con Git.
