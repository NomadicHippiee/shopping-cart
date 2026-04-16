import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {

    return (
        <>
        <header>
            <h1>Fake Shop</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>

            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        
        </>
    )
}