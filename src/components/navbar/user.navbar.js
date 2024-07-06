import React from 'react';
import NavBar from './navbar.js';
import { BsCart3 } from 'react-icons/bs';

export default function UserNavBar() {
    const renderNavItems = () => (
        <>
            <a href='/error-page'>Más vendidos</a>
            <a href='/error-page'>Nuevos</a>
            <a href='/error-page'>Ofertas</a>
        </>
    );
    
    const renderRightItems = ({ handleLoginClick, handleCartClick }) => (
        <>
            <BsCart3 className="cart-icon" onClick={handleCartClick} />
            <a href='/error-page'>Ayuda</a>
            <button onClick={handleLoginClick}>Mi cuenta</button>
        </>
    );

    return <NavBar title="TIENDA" renderNavItems={renderNavItems} renderRightItems={renderRightItems} />;
}

