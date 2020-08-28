import React, { useState } from 'react'
import './contactForm.css'

const ContactForm = () => {

    const [ data, setData ] = useState({
        name: '',
        phone: '',
        email: '',
        details: '',
        checkbox: false
    })

    const [ addOption, setAddOption ] = useState(["Elija área a tratar", "Estetica facial", "Estética corporal", "Depilación laser", "Estética masculina", "Otras especialidades"])

    const Add = addOption.map(Add => Add)

    const handleOption = (e) => {
        // console.clear(),
        // console.log(addOption[e.target.value])

        setData({
            ...addOption,
            [e.target.value] : e.target.name
        })
    }

    const handleChange = (e) => {
        // console.log(e.target.value)

        setData({
            ...data,
            [e.target.value] : e.target.key
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data.name + '\n' + data.phone + '\n' + data.email + '\n' + addOption.key)
    }
    
    return (
        <div className="contact-form">
            <h2>Escríbenos y obtén asesoría inicial personalizada y sin costo</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Nombre y apellido" onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} />
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
                <select name="selector" onChange={e => handleOption(e)}>
                    {
                        Add.map((address, key) => 
                            <option key={key} value={key}>{address}</option>
                        )
                    }
                </select>
                <input type="text" name="details" placeholder="¿Podría darnos más detalles?" onChange={handleChange} />
                <div className="checkbox-privaci">
                    <input type="checkbox" id="privaci"/>
                    <label htmlFor="privaci">He leído y acepto la <a href="">política de privacidad</a></label>
                </div>
                <button className="btn-default" type="submit">Solicitar información</button>
            </form>
        </div>
    )
}

export default ContactForm