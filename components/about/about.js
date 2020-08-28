import React from 'react'
import './about.css'
import Link from 'next/link'
import ReactPlayer from "react-player"

const About = () => {
    return (
        <div className="about">
            <style jsx>{`
                .about {
                    background-image: url(${require("../../assets/about-bg.jpg")});
                    background-size: cover;
                    background-position: botton left;
                    background-attachment: fixed;
                }
            `}</style>
            <div className="about-content">
                <div className="about-text">
                    <h2>Acerca de LUVANIA <br/> Innovación estética</h2>
                    <hr/>
                    <p><span>Financiamos tu proyecto de mejoramiento corporal sin intereses</span> con garantía, efectividad y <span>control post tratamiento</span>.</p>

                    <p>Contamos con expertos profesionales en el área estética con más de 47 tratamientos para <span>58 soluciones corporales</span> y faciales que hacen de nuestros centros los mejores del país</p>

                    <p>Cada uno de nuestros tratamientos se encuentran protocolizados para no dejar al azar cada detalle técnico y estético llevando registro fotográfico del proceso para evidenciar tus resultados y alcances tu satisfacción.</p>

                    <Link href="#contact">
                        <button className="btn-withe-blue">Solicitar información</button>
                    </Link>
                </div>
                <div className="about-video">
                    <ReactPlayer url="https://www.youtube.com/watch?v=fusF3D2Vddk" />
                </div>
            </div>
        </div>
    )
}

export default About
