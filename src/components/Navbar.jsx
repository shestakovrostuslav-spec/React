import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">LENS & LIGHT</div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" end>Головна</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">Галерея</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Зв’язок</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;