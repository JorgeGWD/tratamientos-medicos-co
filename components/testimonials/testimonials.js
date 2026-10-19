import React, { useState } from 'react'
import testimonials01 from '../../assets/testimonials-01.jpg'
import testimonials02 from '../../assets/testimonials-02.jpg'
import testimonials03 from '../../assets/testimonials-03.jpg'
import testimonials04 from '../../assets/testimonials-04.jpg'
import testimonials05 from '../../assets/testimonials-05.jpg'
import testimonials06 from '../../assets/testimonials-06.jpg'

const Testimonials = () => {

    const [ data, useData ] = useState([
        {
            img: testimonials01
        },
        {
            img: testimonials02
        },
        {
            img: testimonials03
        }
    ])

    return (
        <div className="testimonials">
            <h2>Testimonios reales de Google</h2>
            <hr/>
            <div className="testimonials-cards">
                {
                    data.map((data, key) =>
                        <div className="card-box" key={key}>
                            <img src={data.img} alt=""/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Testimonials