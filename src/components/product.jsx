import React from "react";
import "./product.css";

function Product({ data, addToCart }) {
    return (
        <div className="product">
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>${data.price}</p>
            <button onClick={() => addToCart(data)}>Add to Cart</button>
        </div>
    );
}

export default Product;