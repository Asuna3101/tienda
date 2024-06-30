import '../css/homepage.css';
import UserNavBar from '../components/navbar/user.navbar.js';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Product1 from '../assets/img/home/img1.webp';
import Product4 from '../assets/img/home/img2.webp';
import Product3 from '../assets/img/home/img3.webp';
import Product5 from '../assets/img/home/img4.webp';
import Product6 from '../assets/img/home/img5.webp';
import Product7 from '../assets/img/home/img6.webp';
import Product2 from '../assets/img/home/img7.webp';
import Product8 from '../assets/img/home/img8.webp';
import Product14 from '../assets/img/home/img10.webp';
import SearchBar from '../components/searchbar/searchbar.js';


export default function HomePage() {

    const navigate = useNavigate();

    const handlerBuscarClick = () => {
        navigate('/search-result');
    };

    return (
        <>
        <UserNavBar />
        <div className="home-page">
            <SearchBar />
            <div className="content">
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
                <div className="item">
                    <Link to="/product-detail">
                        <img src={Product1} alt="Colección de Items 2" />
                    </Link>
                    <div>
                        <Link to="/product-detail">
                            <p>Colección de Items 2: Especiales para la casa</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="item">
                    <Link to="/product-detail">
                        <img src={Product2} alt="Colección de Items 3" />
                    </Link>
                    <div>
                        <Link to="/product-detail">
                            <p>Colección de Items 3: Especiales para los pequeños</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="separador"></div>

            <div className="content">
                <h2>NUEVOS</h2>
                <div className="large-item">
                    <Link to="/product-detail">
                        <img src={Product14} alt="Nuevo Producto 1" />
                    </Link>
                    <div>
                        <Link to="/product-detail">
                            <p>Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva Temporada</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="large-item">
                    <Link to="/product-detail">
                        <img src={Product14} alt="Nuevo Producto 2" />
                    </Link>
                    <div>
                        <Link to="/product-detail">
                            <p>GI Joe Classified Series Big Boa, Airborne & More</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="large-item">
                    <Link to="/product-detail">
                        <img src={Product14} alt="Nuevo Producto 3" />
                    </Link>
                    <div>
                        <Link to="/product-detail">
                            <p>Spawn 30 Anniversary</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="separador"></div>

            <div className="content">
                <div className="small-item">
                    <img src={Product3} alt="Item 1" />
                    <div>
                        <p>Item 1</p>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="small-item">
                    <img src={Product4} alt="Item 2" />
                    <div>
                        <p>Item 1</p>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="small-item">
                    <img src={Product6} alt="Item 3" />
                    <div>
                        <p>Item 1</p>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="small-item">
                    <img src={Product7} alt="Item 4" />
                    <div>
                        <p>Item 1</p>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="small-item">
                    <img src={Product8} alt="Item 5" />
                    <div>
                        <p>Item 1</p>
                    </div>
                    <div>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}