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

    // Formula to calculate the final price after discount
    const getDiscountedPrice = (price, discount) => {
        return Math.round(price - (price * discount) / 100);
    };

    return (
        <section className="gym-dark-section">
            <h2 className="gym-dark-title">OUR PRODUCTS</h2>

            <div className="gym-dark-container">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            className="gym-dark-card"
                            key={product.id}
                            onClick={() => navigate(`/view-item/${product.id}`)}
                            style={{ cursor: "pointer" }}
                        >
                            {/* --- DISCOUNT BADGE CONDITION --- */}
                            {product.discount && (
                                <span className="gym-dark-discount-badge">
                                    {product.discount}% OFF
                                </span>
                            )}

                            <img src={product.image} alt={product.name} className="gym-dark-img" />
                            <h3 className="gym-dark-name">{product.name}</h3>

                            {product.description && (
                                <p className="gym-dark-desc">
                                    {product.description}
                                </p>
                            )}

                            {/* --- FLIPKART STYLE PRICE SECTION --- */}
                            {product.discount ? (
                                <div className="gym-dark-price-wrapper">
                                    <span className="gym-dark-new-price">
                                        ₹{getDiscountedPrice(product.price, product.discount)}
                                    </span>
                                    <span className="gym-dark-old-price">
                                        ₹{product.price}
                                    </span>
                                    <span className="gym-dark-discount-text">
                                        {product.discount}% off
                                    </span>
                                </div>
                            ) : (
                                <p className="gym-dark-price">₹{product.price}</p>
                            )}

                            <button
                                className="gym-dark-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/product/${product.id}`);
                                }}
                            >
                                Add to cart
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