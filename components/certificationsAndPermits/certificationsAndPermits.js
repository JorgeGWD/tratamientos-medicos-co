import React, { useState } from 'react'
import minSalud from '../../assets/minsalud.png'
import alcaldiaBogota from '../../assets/alcaldia-bogota.png'
import superSalud from '../../assets/supersalud.png'
import serviSalud from '../../assets/servisalud.png'

const CertificationsAndPermits = () => {

    const [ data, useData ] = useState([
        {
            id: 1,
            img: minSalud,
            text: 'Registrados'
        },
        {
            id: 2,
            img: alcaldiaBogota,
            text: 'Autorizados'
        },
        {
            id: 3,
            img: superSalud,
            text: 'Entidad responsables'
        },
        {
            id: 4,
            img: serviSalud,
            text: 'Servicio habilitado'
        }
    ])

    return (
        <div className="certifications-and-permits">
            <div className="certifications-content">
                <h2>Certificaciones y permisos</h2>
                <hr/>
                <div className="certifications-cards">
                    {
                        data.map((data, key) =>
                        <div className="card-box" key={key}>
                            <img src={data.img} alt={data.text}/>
                            <h3>{data.text}</h3>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CertificationsAndPermits