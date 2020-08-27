import React, { useState } from 'react'
import './facialAesthetics.css'
import TabsContainer from '../tabsContainer/tabsContainer'

const FacialAesthetics = () => {

    const [ tabs, setTabs ] = useState(
        [
            { 
                label: "Eliminación de arrugas",
                value: 1,
                title: "Líneas de expresión, arrugas profundas y finas",
                text: "Tratamiento para surco nasogeniano, líneas marioneta, arrugas de frente, ojos, boca con toxina botulínica, ácido hialurónico, plasma, dermapen e hilos tensores."
            },
            {
                label: "Perfilamiento facial y flacidez",
                value: 2,
                title: "Ojeras, flacidez facial moderada a severa",
                text: "Tratamiento para ojeras, papada, perfilamiento de labios, pómulos, mentón, flacidez en cuello y manos, rinomodelación (perfilamiento de nariz) con hidroxiapatita de calcio, vital firm, radiofrecuencia 3G,  plasma e hilos tensores entre otros."
            },
            {
                label: "Eliminación de manchas",
                value: 3,
                title: "Manchas, melasmas, pecas y lunares",
                text: "Tratamiento para Manchas rojas, manchas marrones difusas y extensas pecas con peeling, cosmelan."
            },
            {
                label: "Eliminación de Acné",
                value: 4,
                title: "Acné leve y severo",
                text: "Tratamiento para Acné comedogénico, conglobata con autosanguis, biorevitalización y detoxificación."
            }
        ]
    );

    return (
        <div className="container">
            <div className="content">
                <div className="content-data">
                    <h1>Estética Facial</h1>
                    <hr/>
                    <div className="treatment-data">
                        <p>17 Tratamientos | 14 Zonas de tu cara a tratar</p>
                        <h3>Selecciona tu área de interés:</h3>
                    </div>
                    <TabsContainer data={tabs} />
                </div>
                <div className="content-img">
                    <style jsx>{`
                        .content-img {
                            background-image: url(${require("../../assets/facial.jpg")});
                            background-size: cover;
                            background-position: center;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    )
}

export default FacialAesthetics