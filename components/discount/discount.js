import React from 'react'
import Link from 'next/link'

const Discount = () => {
    return (
        <div className="discount">
            <div className="discount-content">
                <h4>** Oferta de iniciación 2020 **</h4>
                <h2>50% de <br/> descuento</h2>
                <h3>en tu tratamiento</h3>
                <Link href="#contact">
                    <button className="btn-default-hover">Registrate ahora</button>
                </Link>
            </div>
        </div>
    )
}

export default Discount