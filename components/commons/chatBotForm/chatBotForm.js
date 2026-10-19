import React, { useState, useEffect } from 'react'
import botAvatar from '../../../assets/bot-avatar.png'
import iconSubmit from '../../../assets/icon-submit.svg'

function Main() {
    return <div className="message-bubble loading"><p>...</p></div>;
}

const ChatBotForm = () => {

    const [ open, setOpen ] = useState(false)

    const [ loadMessage, setLoadMessage ] = useState(false)

    useEffect(() =>{
        setTimeout(() => setLoadMessage(true), 3000)
    }, [])

    return (
        <div className="chat-bot">
            <div className={open ? "chat-bot-form" : "chat-bot-form hide"} >
                <div className="chat-bot-header">
                    <img src={botAvatar} alt=""/>
                    <div className="bot-info">
                        <p className="bot-name">
                            Catalina
                        </p>
                        <div className="bot-status">
                            <span className="online"></span>
                            <p>Disponible</p>
                        </div>
                    </div>
                    <p className="bot-refresh">O</p>
                    <p className="btn-close" onClick={() => { setOpen(!open); }}>X</p>
                </div>
                <div className="chat-bot-body">
                    {loadMessage ? <div className="message-bubble"><p>¡Hola!</p></div> : <Main />}
                </div>
                <div className="chat-bot-footer">
                    <input type="text" placeholder="Excribe tu respuesta aquí..."/>
                    <button type="submit"><img src={iconSubmit} alt=""/></button>
                </div>
            </div>
            <div className="chat-bot-greeting">
                <div className={open ? "greeting-message hide" : "greeting-message"} >
                    <p>¡Hola! ¿Puedo ayudarte?</p>
                </div>
                <div className="chat-bot-button" onClick={() => {
                    setOpen(!open);
                }}>
                    <img src={botAvatar} alt=""/>
                    <span className="online"></span>
                </div>
            </div>
        </div>
    )
}

export default ChatBotForm
