import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../components/footer/footer";
import UserNavBar from '../components/navbar/user.navbar.js';
import '../components/css/UserProfile.css';

export default function UserProfile() {
    const [userData, setUserData] = useState({});
    const { correo } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/user/profile/${correo}`, {
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

        fetchData();
    }, [correo]);

    return (
        <>
            <UserNavBar />
            <div className='user-profile'>
                <div className="sidebar">
                    <h3 className="sidebar-title">Mi Cuenta</h3>
                    <ul>
                        <li><a href="/recent-orders">Órdenes Recientes</a></li>
                        <li><a href="/account-settings">Datos de Registro</a></li>
                        <li><a href="/change-password">Cambiar Password</a></li>
                    </ul>
                </div>
                <div className="content">
                    <h2>Welcome to Your Account, {userData.name}</h2>
                    <p>Here you can manage your account settings and orders.</p>
                    {/* Display user details */}
                    <p>Email: {userData.email || correo}</p> {/* Corregido: Comentario dentro de llaves */}
                </div>
            </div>
            <Footer />
        </>
    );
}
