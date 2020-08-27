import React, { useState } from 'react'
import './maleAesthetics.css'
import TabsContainer from '../tabsContainer/tabsContainer'

const MaleAesthetics = () => {

    const [ tabs, setTabs ] = useState(
        [
            { 
                label: "Estética corporal masculina",
                value: 1,
                title: "Grasa localizada y flacidez corporal",
                text: "Tratamiento de grasa localizada en 6 áreas, flacidez corporal en 4 áreas con hilos rusos, hidroxiapatita de calcio, corrientes rusas, antioxidante, diatermia 5G y electroporación."
            },
            {
                label: "Estética facial masculina",
                value: 2,
                title: "Rejuvenecimiento facial, perfilamiento y manchas",
                text: "Tratamiento para ojeras, surco nasogeniano, líneas marioneta, arrugas de frente, ojos,  boca, papada, flacidez en cuello y manos, rinomodelación, manchas, melasmas, pecas y toxina botulínica, ácido hialurónico, plasma, dermapen, hidroxiapatita de calcio, vital firm, diatermia 5G,  plasma e hilos tensores entre otros."
            }
        ]
    );

    return (
        <div className="container">
            <div className="content">
                <div className="content-data">
                    <h1>Estética masculina</h1>
                    <hr/>
                    <div className="treatment-data">
                        <p>35 Tratamientos  | 21 Zonas de tu cuerpo a tratar</p>
                        <h3>Selecciona tu área de interés:</h3>
                    </div>
                    <TabsContainer data={tabs} />
                </div>
                <div className="content-img">
                    <style jsx>{`
                        .content-img {
                            background-image: url(${require("../../assets/male.jpg")});
                            background-size: cover;
                            background-position: center;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    )
}

export default MaleAesthetics
