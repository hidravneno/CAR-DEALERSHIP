import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [coupons, setCoupons] = useState([]);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [user, setUser] = useState({ name: "Aramburo Eduardo" }); // Ejemplo de usuario

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addProduct(product) {
        setProducts(prev => [...prev, product]);
    }

    function addCoupon(coupon) {
        setCoupons(prev => [...prev, coupon]);
    }

    function addToCart(item) {
        setCart([...cart, item]);
    }

    function removeFromCart(index) {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    }

    function clearCart() {
        setCart([]); // Vaciar el carrito
    }

    function getCartCount() {
        return cart.length;
    }

    function getCartTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    return (
        <StoreContext.Provider value={{
            products, addProduct,
            coupons, addCoupon,
            cart, addToCart, removeFromCart, clearCart, getCartCount, getCartTotal,
            user, setUser // Añadir usuario al contexto
        }}>
            {children}
        </StoreContext.Provider>
    );
}