import React from 'react'
import WhatsAppInputs from './whatsAppInputs'

const whatsAppForm = () => {
    function whatsAppWeb() {
        window.open("https://api.whatsapp.com/send?phone=577448989", "_blank")
    }

    return <WhatsAppInputs submitForm={whatsAppWeb} />
}

export default whatsAppForm
