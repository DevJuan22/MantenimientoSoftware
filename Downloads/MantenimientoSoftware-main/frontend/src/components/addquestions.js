import React, { useState, useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

useEffect(() => {
    axios
        .get("http://localhost:5000/api/chats")
        .then((res) => setChats(res.data))
        .catch((err) => console.error(err));
}, []);

const AddQuestion = () => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [chats, setChats] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/api/chats/add", {question, answer})
            alert("Pregunta asignada con exito")
            setQuestion("")
            setAnswer("")
        } catch(error){
            console.error("Error al cargar la pregunta", error)
        }
    }
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/chats/${id}`);
            setChats(chats.filter(chat => chat._id !== id));
        } catch (error) {
            console.error("Error al eliminar la pregunta:", error);
        }
    };
    

    return(
        <div>
            <h2>Agregar Pregunta</h2>
            <button onClick={()=> navigate("/")}>Volver al inicio</button>
            <h3>Preguntas existentes</h3>
            <ul>
                {chats.map((chat) => (
                    <li key={chat._id}>
                        <strong>{chat.question}</strong>: {chat.answer}
                        <button onClick={() => handleDelete(chat._id)} style={{ marginLeft: "10px" }}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
            <div>
            <label>Pregunta</label>
            <input
            type= 'text'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            >
            </input>
            </div>
            <div>
            <label>Respuesta</label>
            <input
            type= 'text'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            >
            </input>
            </div>
            <button type="submit">Guardar</button>
            </form>
        </div>
        
    )

}

export default AddQuestion