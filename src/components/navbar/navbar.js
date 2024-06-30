import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/navbar.css';

function NavBar({ title, renderNavItems, renderRightItems }) {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1>{title}</h1>
                <nav>
                    {renderNavItems()}
                </nav>
            </div>
            <div className="navbar-right">
                {renderRightItems({ handleLoginClick, handleCartClick })}
            </div>
        </div>
    );
}

export default NavBar;
