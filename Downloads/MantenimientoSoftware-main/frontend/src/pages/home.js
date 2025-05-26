import React from "react";
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Bienvenido al Chatbot</h1>
            <button onClick={()=> navigate("/chat")}>Iniciar Chat</button>
            <button onClick={()=> navigate("/add")}>Agregar Pregunta</button>
        </div>
    )
}

export default Home
