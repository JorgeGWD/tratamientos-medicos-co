import React from 'react'
import ContactForm from '../contactForm/contactForm'
import locationPin from '../../assets/location-pin.svg'
import phone from '../../assets/phone_thin.svg'
import envelope from '../../assets/envelope.svg'

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <style jsx>{`
                .contact {
                    background-image: url(${require("../../assets/contact-bg.jpg")});
                    background-size: cover;
                    background-position: botton left;
                }
            `}</style>
            <div className="contact-content">
                <ContactForm />
                <div className="contact-data">
                    <h2>Contáctanos</h2>
                    <hr/>
                    <div className="contact-data-content">
                        <div className="contact-data-address">
                            <img src={locationPin} alt=""/>
                            <h3>Direccion</h3>
                            <div className="contact-address-data">
                                <div className="contact-address-one">
                                    <h4>Restrepo:</h4>
                                    <p>Crr. 24 #15-19 Sur</p>
                                    <p>Bogotá - Colombia</p>
                                </div>
                                <div className="contact-address-three">
                                    <h4>Modelia:</h4>
                                    <p>Cll. 24 #74a-37</p>
                                    <p>Bogotá - Colombia</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data-data">
                            <div className="contact-data-phone">
                                <img src={phone} alt=""/>
                                <h3>Teléfono</h3>
                                <p>744 8989 Ext. 601</p>
                                <p>Cel. 316 509 5657</p>
                            </div>
                            <div className="contact-data-email">
                                <img src={envelope} alt=""/>
                                <h3>Email</h3>
                                <p>agenda@cifes.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact