import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>LA TIENDITA DEL ABUELO</h2>
                    <p>© 2010 — 2020</p>
                    <Link to="/privacy">Privacy - Terms</Link>
                </div>
                <div className="footer-section">
                    <h3>Cuenta</h3>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registro</Link>
                    <Link to="/cart">Carrito</Link>
                </div>
                <div className="footer-section">
                    <h3>Productos</h3>
                    <Link to="/bestsellers">Más Vendidos</Link>
                    <Link to="/new">Nuevos</Link>
                    <Link to="/offers">Ofertas</Link>
                </div>
                <div className="footer-section">
                    <h3>Ayuda</h3>
                    <Link to="/about">Acerca de Nosotros</Link>
                    <Link to="/shipping-policy">Política de Envío</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="footer-section">
                    <h3>Síguenos</h3>
                    <div className="footer-social">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}