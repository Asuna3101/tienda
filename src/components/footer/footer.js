import React from 'react';
import '../css/footer.css'; // Ensure your CSS path is correct
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
                    <Link to="/">Carrito</Link>
                </div>
                <div className="footer-section">
                    <h3>Productos</h3>
                    <Link to="/">Más Vendidos</Link>
                    <Link to="/">Nuevos</Link>
                    <Link to="/">Ofertas</Link>
                </div>
                <div className="footer-section">
                    <h3>Ayuda</h3>
                    <Link to="/">Acerca de Nosotros</Link>
                    <Link to="/">Política de Envío</Link>
                    <Link to="/">FAQ</Link>
                </div>
                <div className="footer-section">
                    <h3>Síguenos</h3>
                    <div className="footer-social">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/footer/fb.png').default} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/footer/instagram.png').default} alt="Instagram" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/footer/twitter-sign.png').default} alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/footer/youtube.png').default} alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
