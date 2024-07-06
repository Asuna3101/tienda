import React, { useState, useEffect } from 'react';

function RecentOrders() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/orders?page=${currentPage}`);
                const data = await response.json();
                setOrders(data.orders);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h2>Órdenes Recientes</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Orden #{order.id}: {order.total} - Fecha: {order.date}
                        <button onClick={() => alert('Detail of ' + order.id)}>Ver Detalle</button>
                    </li>
                ))}
            </ul>
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} disabled={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default RecentOrders;
