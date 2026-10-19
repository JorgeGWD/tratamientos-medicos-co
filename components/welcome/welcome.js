import React, { useState } from 'react'
import ContactForm from '../contactForm/contactForm'

const Welcome = () => {
    return (
        <div className="welcome">
            <style jsx>{`
                .welcome {
                    background-image: url(${require("../../assets/welcome-bg.jpg")});
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }
            `}</style>
            <div className="welcome-content">
                <div className="text-panel">
                    <div className="welcome-text">
                        <h1>¿Qué parte de tu cuerpo deseas mejorar hoy?</h1>
                        <hr/>
                        <p>Atendemos más de <span>47 tratamientos para 58 soluciones</span> corporales y faciales en 15 años de experiencia como IPS en estética.</p>
                    </div>
                </div>
                <div className="form">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Welcome