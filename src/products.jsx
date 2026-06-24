import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedProducts = localStorage.getItem("gym_products");
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        }
    }, []);

    return (
        <section className="gym-dark-section">
            <h2 className="gym-dark-title">OUR PRODUCTS</h2>

            <div className="gym-dark-container">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            className="gym-dark-card"
                            key={product.id}
                            onClick={() => navigate(`/view-item/${product.id}`)} // 1. Card par click karvathi details khulse
                            style={{ cursor: "pointer" }}
                        >
                            <img src={product.image} alt={product.name} className="gym-dark-img" />
                            <h3 className="gym-dark-name">{product.name}</h3>

                            {product.description && (
                                <p className="gym-dark-desc">
                                    {product.description}
                                </p>
                            )}

                            <p className="gym-dark-price">₹{product.price}</p>

                            <button
                                className="gym-dark-btn"
                                onClick={(e) => {
                                    e.stopPropagation(); // 2. Aa line card ni click ne rokse
                                    navigate(`/product/${product.id}`); // 3. Sidhe form par lai jase
                                }}
                            >
                                Add to card
                            </button>
                        </div>
                    ))
                ) : (
                    <h3 className="gym-dark-no-products">No Products Available</h3>
                )}
            </div>
        </section>
    );
}

export default Products;