const Chat = require("../models/chat")

exports.addchat = async(req, res) => {
    try{
        const { question, answer} = req.body
        const newChat = new Chat ({question, answer})
        await newChat.save()
        res.status(201).json(newChat)
    } catch (error){
        res.status(500).json8({ message: "Error al guardar la pregunta ", error})
    }
}

exports.getChats = async(req, res) => {
    try{
        const chats = await Chat.find()
        res.status(200).json(chats)
    } catch (error){
        res.status(500).json8({ message: "Error al obtener la pregunta "})
    }
}
