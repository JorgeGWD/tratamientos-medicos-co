import React from 'react'
import Link from 'next/link'

const TabsContent = ({ data, activeTab }) => {
    return (
        <div className="tab-content">
            <h3>{data.filter((x) => x.value === activeTab)[0].title}</h3>
            <p>{data.filter((x) => x.value === activeTab)[0].text}</p>
            <Link href="#contact">
                <button className="btn-default-hover">Agenda tu cita</button>
            </Link>
        </div>
    )
}

export default TabsContent
