import React, { useState, useEffect } from 'react';
import Footer from "../components/footer/footer";
import UserNavBar from '../components/navbar/user.navbar.js';
import '../components/css/UserProfile.css';
import RecentOrders from '../components/recentOrders/RecentOrders.js';
import AccountSettings from '../components/accountSettings/AccountSettings.js';
import ChangePassword from '../components/chancePassword/ChancePasSword.js';


export default function UserProfile() {
    const [userData, setUserData] = useState({});
    const [section, setSection] = useState('');  // Cambia el estado inicial a una cadena vacía

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setUserData(data);
            } else {
                throw new Error(data.message || "Unable to fetch data");
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <>
            <UserNavBar />
            <div className='user-profile'>
                <div className="sidebar">
                    <h3 className="sidebar-title">Mi Cuenta</h3>
                    <ul>
                        <li><button onClick={() => setSection('recent-orders')}>Órdenes Recientes</button></li>
                        <li><button onClick={() => setSection('profile')}>Datos de Registro</button></li>
                        <li><button onClick={() => setSection('change-password')}>Cambiar Password</button></li>
                        <li><button onClick={logout}>Cerrar Sesión</button></li>
                    </ul>
                </div>
                <div className="content">
                    {section === '' && 
                    <div>
                        <h2>Bienvenido a tu cuenta</h2>
                    <p><strong>Nombre:</strong> {userData.nombre}</p>
                    <p><strong>Apellido:</strong> {userData.apellido}</p>
                    <p><strong>Correo:</strong> {userData.correo}</p>
                    <p>Aquí podras gestionar todos los aspectos de tu perfil.</p>
                    </div>}
                    
                    {section === 'profile' && <AccountSettings userData={userData} />}
                    {section === 'recent-orders' && <RecentOrders />}
                    {section === 'change-password' && <ChangePassword />}
                </div>
            </div>
            <Footer />
        </>
    );
}