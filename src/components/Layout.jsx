import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from '../context/useCart';

export default function Layout() {
    const { cart } = useCart();
    const cartCount = cart?.reduce((sum, item) => sum + item.quantity, 0);


    return (
        <div className='layout'> 
        <header>
            <h1>Fake Shop</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
                    <li><NavLink to="/cart" className="nav-link">Cart{cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}</NavLink></li>
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