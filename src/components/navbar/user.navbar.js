import React from 'react';
import NavBar from './navbar.js';
import { BsCart3 } from 'react-icons/bs';

export default function UserNavBar() {
    const isLoggedIn = () => {
        return Boolean(localStorage.getItem('token')); // Verifica la existencia del token
    }

    const handleLoginClick = () => {
        if (isLoggedIn()) {
            window.location.href = '/user/profile'; // Redirige al perfil de usuario
        } else {
            window.location.href = '/login'; // Redirige a login
        }
    }

    const renderNavItems = () => (
        <>
            <a href='/error-page'>Más vendidos</a>
            <a href='/error-page'>Nuevos</a>
            <a href='/error-page'>Ofertas</a>
        </>
    );

    const renderRightItems = () => (
        <>
            <BsCart3 className="cart-icon" onClick={() => console.log("Carrito")} />
            <a href='/error-page'>Ayuda</a>
            <button onClick={handleLoginClick}>Mi cuenta</button>
        </>
    );

    return <NavBar title="TIENDA" renderNavItems={renderNavItems} renderRightItems={renderRightItems} />;
}
