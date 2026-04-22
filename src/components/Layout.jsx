import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {

    return (
        <div className='layout'> 
        <header>
            <h1>Fake Shop</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
                    <li><NavLink to="/cart" className="nav-link">Cart</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>

                </ul>

            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
        
        </div>
    )
}