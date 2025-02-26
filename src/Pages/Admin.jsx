import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import "./Admin.css"; 

function Admin() {
    
    const { products, addProduct, coupons, addCoupon } = useContext(StoreContext);
    const [product, setProduct] = useState({ title: "", price: "", image: "", category: "" });
    const [coupon, setCoupon] = useState({ code: "", discount: "" });

    function saveProduct() {
        if (!product.title || !product.price || !product.image || !product.category) {
            alert("Por favor completa todos los campos.");
            return;
        }
        addProduct(product);
        setProduct({ title: "", price: "", image: "", category: "" }); 
    }

    function saveCoupon() {
        if (!coupon.code || !coupon.discount) {
            alert("Ingresa un cupón válido.");
            return;
        }
        addCoupon(coupon);
        setCoupon({ code: "", discount: "" }); 
    }

    return (
        <div className="Admin">
            <h2>Admin Panel</h2>
            <div className="parent">
                <div className="prods">
                    <h4>Agregar Producto</h4>
                    <input className="form-control" type="text" placeholder="Título" value={product.title} onChange={e => setProduct({ ...product, title: e.target.value })} />
                    <input className="form-control" type="number" placeholder="Precio" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} />
                    <input className="form-control" type="text" placeholder="Imagen (URL)" value={product.image} onChange={e => setProduct({ ...product, image: e.target.value })} />
                    <input className="form-control" type="text" placeholder="Categoría" value={product.category} onChange={e => setProduct({ ...product, category: e.target.value })} />
                    <button className="btn-dark" onClick={saveProduct}>Guardar Producto</button>
                </div>

                <div className="cpns">
                    <h4>Agregar Cupón</h4>
                    <input className="form-control" type="text" placeholder="Código" value={coupon.code} onChange={e => setCoupon({ ...coupon, code: e.target.value })} />
                    <input className="form-control" type="number" placeholder="Descuento (%)" value={coupon.discount} onChange={e => setCoupon({ ...coupon, discount: e.target.value })} />
                    <button className="btn-dark" onClick={saveCoupon}>Guardar Cupón</button>
                </div>
            </div>

            <div className="prods">
                <h4>Lista de Productos</h4>
                <ul className="product-list">
                    {products.map((prod, index) => (
                        <li key={index}>
                            <img src={prod.image} alt={prod.title} className="product-image" />
                            <strong>{prod.title}</strong> - ${prod.price}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="cpns">
                <h4>Lista de Cupones</h4>
                <ul className="coupon-list">
                    {coupons.map((cp, index) => (
                        <li key={index}>{cp.code} - {cp.discount}%</li>
                    ))}
                </ul>
            </div>

            {/* Vive tu vida y aprecia lo que tienes */}
            {/* Enfócate, tú sabes lo que te mereces */}
            {/* Quieren compararse con lo que ahora soy */}
            {/* No estás en mis zapatos, no sabes ni quién soy */}

        </div>
    );
}

export default Admin;
