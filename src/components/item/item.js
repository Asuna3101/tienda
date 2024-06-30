import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/item.css';


export default function Item() {
    const navigate = useNavigate();

    return (
        <div className="item">
            <Link to="/product-detail">
                <img src={Product5} alt="Colección de Items 1" />
            </Link>
            <div>
                <Link to="/product-detail">
                    <p>Colección de Items 1: Especiales para regresar al colegio</p>
                </Link>
            </div>
            <div>
                <Link to="#">Learn More</Link>
            </div>
        </div>
    )
}