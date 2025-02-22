import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const { getCartCount, cart, user } = useContext(StoreContext);
    const [cartCount, setCartCount] = useState(getCartCount());

    useEffect(() => {
        setCartCount(getCartCount());
    }, [cart]); // Se actualiza cada vez que cambia el carrito

    return (
        <nav className="navbar">
            <div className="navbar-menu">
                <span className="title">Luxury Auto Sales</span>
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About Us</Link>
                <Link to="/admin">Admin</Link>
                <Link className="end" to="/cart">
                    🛒 View Cart ({cartCount})
                </Link>
                <div className="user-info">
                    <p>{user.name}</p> {/* Mostrar el nombre del usuario */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;