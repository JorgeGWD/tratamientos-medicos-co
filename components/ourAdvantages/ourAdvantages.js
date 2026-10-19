import React, { useState } from 'react'
import Link from 'next/link'
import chatBubble from '../../assets/chat-bubble.svg'
import thumbsUp from '../../assets/thumbs-up.svg'
import diamond from '../../assets/diamond.svg'
import calendarCheck from '../../assets/calendar-check.svg'
import heartBeat from '../../assets/heartbeat.svg'

const OurAdvantages = () => {

    const [ data, useData] = useState([
        {
            id: 'one',
            icon: chatBubble,
            title: `Consulta sin costo`,
            content: `Tus consultas con nuestros especialistas no tienen costo. Puedes consultar con ellos cualquiera de las 58 categorías de tratamientos.`
        },
        {
            id: 'two',
            icon: thumbsUp,
            title: `Garantía de satisfacción`,
            content: `Damos garantía que al finalizar un tratamiento si no quedas satisfecho, lo repetiremos*. (Aplica condiciones y restricciones).`
        },
        {
            id: 'three',
            icon: diamond,
            title: `Luvania Premium`,
            content: `Al vincularte como paciente regular te acreditarán cliente Premium con beneficios en formaciones, descuentos y regalos especiales.`
        },
        {
            id: 'four',
            icon: calendarCheck,
            title: `Ahorra tiempo`,
            content: `Agendamiento y valoración online harán ahorrarte horas de desplazamiento.`
        },
        {
            id: 'five',
            icon: heartBeat,
            title: `Tratamientos seguros`,
            content: `Tratamientos mínimamente invasivos para tu tranquilidad.`
        }
    ])

    return (
        <div className="our-advantages">
            <div className="our-advantages-content">
                <h2>Nuestras ventajas</h2>
                <hr/>
                <div className="our-advantages-cards">
                    {
                        data.map((data, key) => 
                        <div id={data.id} className="card-box" key={key}>
                            <img src={data.icon} alt=""/>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                        )
                    }
                </div>
                <Link href="#contact">
                    <button className="btn-withe">Solicitar información</button>
                </Link>
            </div>
        </div>
    )
}

export default OurAdvantages