import React, { useState } from 'react'
import './contactNumbers.css'

const ContactNumbers = () => {

    const [ data, useData ] = useState({
        phoneNumber: '749 8903',
        extNumber: '601 - 316 509 5657'
    })

    return (
        <div className="contact-numbers">
            <h2>Llámenos ahora: {data.phoneNumber} Ext. {data.extNumber}</h2>
        </div>
    )
}

export default ContactNumbers