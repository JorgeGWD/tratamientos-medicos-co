import React, { useState } from 'react'
import './otherSpecialties.css'
import TabsContainer from '../tabsContainer/tabsContainer'

const OtherSpecialties = () => {

    const [ tabs, setTabs ] = useState(
        [
            { 
                label: "Rechinamiento de dientes",
                value: 1,
                title: "Bruxismo",
                text: "Tratamiento del bruxismo o rechinar de dientes con toxina botulínica."
            },
            {
                label: "Sudoración excesiva",
                value: 2,
                title: "Hiperhidrosis",
                text: "Tratamiento para las glándulas sudoríparas hiperactivas en manos y axilas con toxina botulínica tipo A."
            },
            {
                label: "Regeneración capilar",
                value: 3,
                title: "Prevención, corrección de caída del cabello y regeneración",
                text: "Tratamiento para prevenir la caída del cabello, regeneración y disminución de la velocidad de caída con plasma rico en factores de crecimiento."
            }
        ]
    );

    return (
        <div className="container">
            <div className="content">
                <div className="content-img">
                    <style jsx>{`
                        .content-img {
                            background-image: url(${require("../../assets/other.jpg")});
                            background-size: cover;
                            background-position: center;
                        }
                    `}</style>
                </div>
                <div className="content-data">
                    <h1>Otras especialidades</h1>
                    <hr/>
                    <div className="treatment-data">
                        <p>9 problemas a tratar | 8 tratamientos</p>
                        <h3>Selecciona tu área de interés:</h3>
                    </div>
                    <TabsContainer data={tabs} />
                </div>
            </div>
        </div>
    )
}

export default OtherSpecialties
