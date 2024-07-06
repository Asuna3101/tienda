import React, { useState } from 'react';
import UserNavBar from '../components/navbar/user.navbar.js';
import Footer from '../components/footer/footer';
import '../components/css/PasswordRecovery.css';

export default function PasswordRecovery() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); //Evitar que el formulario actualice la pagina
        try {
            const response = await fetch('http://localhost:4000/password/recovery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo: email })
            });
            const data = await response.json();
            console.log(data);
            // manejar diferentes respuestas según los datos recibidos
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <UserNavBar  />
            <div className='password-recovery'>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Recupera tu cuenta</h1>
                        <div className="input-box">
                            <input type="email" placeholder="Correo" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <button type="submit">Buscar</button>
                        <div className="register-link">
                            <p><a href="/login">Regresar al login</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
