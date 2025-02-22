import React, { useState, useContext } from "react";
import Product from "../components/product";
import { StoreContext } from "../context/StoreContext"; // Importa el contexto
import "./catalog.css";

const catalog = [
    { title: "Honda NSX", image: "/images/hondansx.png", price: 25000, category: "Deportivo", _id: "12346" },
    { title: "Lamborghini Urus", image: "/images/suv.webp", price: 35000, category: "SUV", _id: "762524" },
    { title: "Truck", image: "/images/truck.png", price: 40000, category: "Truck", _id: "564733" },
    { title: "Convertible", image: "/images/convertible.png", price: 55000, category: "Convertible", _id: "976588" },
];

const categories = ["All", "Deportivo", "SUV", "Truck", "Convertible"];

function Catalog() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { addToCart, getCartCount } = useContext(StoreContext); // Obtiene la función para agregar productos y el contador

    const filteredProducts = selectedCategory === "All"
        ? catalog
        : catalog.filter(prod => prod.category === selectedCategory);

    return (
        <div className="catalog page">
            <h1>🚗 Browse Our Latest Car Collection 🚙</h1>
            <p>🛒 You have {getCartCount()} items in your cart.</p> {/* Muestra el número de productos en el carrito */}

            <div className="filters">
                {categories.map((category, index) => 
                    <button 
                        key={index} 
                        className={`btn-filter ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                )}
            </div>

            <div className="products">
                {filteredProducts.map(prod => (
                    <Product key={prod._id} data={prod} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default Catalog;