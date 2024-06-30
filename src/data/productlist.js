import React from 'react';
import Item from './Item';

export default function ProductList() {
    const products = [
        {
            id: 1,
            name: 'Colección de Items 1',
            description: 'Especiales para regresar al colegio',
            image: '../assets/img/home/img1.webp'
        },
        {
            id: 2,
            name: 'Colección de Items 2',
            description: 'Ideales para el verano',
            image: '../../assets/img/home/img2.webp'
        },
    ];

    return (
        <div>
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}