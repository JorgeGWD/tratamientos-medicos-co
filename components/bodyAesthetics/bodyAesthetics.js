import React, { useState } from 'react'
import TabsContainer from '../tabsContainer/tabsContainer'

const BodyAesthetics = () => {

    const [ tabs, setTabs ] = useState(
        [
            { 
                label: "Grasa localizada",
                value: 1,
                title: "Tratamientos especializados en 8 áreas del cuerpo",
                text: "Tratamiento para grasa localizada en abdomen, cintura, espalda, piernas, brazos, banana subglútea y entrepierna con tratamientos de shock Therapy, hidrolipoclasia, onda pulsada y ultracavitación, diatermia 5G, lipólisis y electroporación."
            },
            {
                label: "Flacidez corporal",
                value: 2,
                title: "Flacidez en abdomen, brazos, piernas y escote",
                text: "Tratamiento para la flacidez en brazos, escote, abdomen, cara interna y externa de piernas y brazos, hilos rusos, mesoterapia, hidroxiapatita de calcio, corrientes rusas, antioxidante, diatermia 5G y electroporación."
            },
            {
                label: "Tratamiento para celulitis",
                value: 3,
                title: "Celulitis en brazos, piernas y glúteos",
                text: "Tratamiento para celulitis flácida, dura o mixta con dercell y diatermia 5G."
            }
        ]
    );

    return (
        <div className="container">
            <div className="content">
                <div className="content-img">
                    <style jsx>{`
                        .content-img {
                            background-image: url(${require("../../assets/corporal.jpg")});
                            background-size: cover;
                            background-position: center;
                        }
                    `}</style>
                </div>
                <div className="content-data">
                    <h1>Estética Corporal</h1>
                    <hr/>
                    <div className="treatment-data">
                        <p>27 Tratamientos | 17 Zonas de tu cuerpo a tratar</p>
                        <h3>Selecciona tu área de interés:</h3>
                    </div>
                    <TabsContainer data={tabs} />
                </div>
            </div>
        </div>
    )
}

export default BodyAesthetics
