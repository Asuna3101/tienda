import '../css/homepage.css';
import UserNavBar from '../components/navbar/user.navbar.js';
import Item from '../components/item/item.js';
import Product14 from '../assets/img/home/img10.webp';
import SearchBar from '../components/searchbar/searchbar.js';
import Footer from '../components/footer/footer.js';


export default function HomePage() {

    const products = [
        {
            id: 1,
            name: 'Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva Temporada',
            image: Product14,
            description: 'Nuevos productos para la temporada de invierno'
        },
        {
            id: 2,
            name: 'GI Joe Classified Series Big Boa, Airborne & More',
            image: Product14,
            description: 'Figuras de acción de la serie GI Joe'
        },
        {
            id: 3,
            name: 'Spawn 30 Anniversary',
            image: Product14,
            description: 'Edición especial por el 30 aniversario de Spawn'
        },
    ];

    return (
        <>
            <UserNavBar />
            <div className="home-page">
                <SearchBar />
                <div className="content">
                    {products.map(product => (
                        <Item key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}