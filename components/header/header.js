import React from 'react'
import Logo from './logo/logo'
import ContactNumbers from './contactNumbers/contactNumbers'

const Header = () => {
    return (
        <div className="header">
            <div className="hesder-content">
                <Logo />
                <ContactNumbers />
            </div>
        </div>
    )
}

export default Header