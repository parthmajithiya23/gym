import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./products.css";

function Gymitem() {
    const [showFullDesc, setShowFullDesc] = useState(false);
    // 1. Quantity માટે નવું state ઉમેર્યું (ડિફોલ્ટ 1 રહેશે)
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const savedProducts = localStorage.getItem("gym_products");
        if (savedProducts) {
            const allProducts = JSON.parse(savedProducts);
            const foundProduct = allProducts.find((p) => p.id.toString() === id);
            setProduct(foundProduct);
        }
    }, [id]);

    // 2. + અને - બટન માટેના ફંક્શન્સ
    const handleIncrement = () => {
        setQuantity(prevQty => prevQty + 1);
    };

    const handleDecrement = () => {
        // Quantity 1 કરતા ઓછી ના થવી જોઈએ
        setQuantity(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
    };

    if (!product) {
        return <h2 className="gym-dark-no-products">Product not found!</h2>;
    }

    return (
        <section className="gym-dark-section">
            <button className="gym-back-btn" onClick={() => navigate(-1)}>
                ⬅ Back to Products
            </button>

            <div className="gym-detail-container">
                <div className="gym-detail-image-box">
                    <img src={product.image} alt={product.name} className="gym-detail-img" />
                </div>

                <div className="gym-detail-info">
                    <h2 className="gym-detail-title">{product.name}</h2>
                    <p className="gym-detail-price">Price: ₹{product.price}</p>

                    <h3>Description:</h3>
                    <p className="gym-detail-desc">
                        {showFullDesc
                            ? product.description
                            : product.description?.slice(0, 120) + (product.description?.length > 120 ? "..." : "")
                        }
                    </p>

                    {product.description?.length > 120 && (
                        <button
                            className="read-more-btn"
                            onClick={() => setShowFullDesc(!showFullDesc)}
                        >
                            {showFullDesc ? "Read Less" : "Read More"}
                        </button>
                    )}

                    {/* 3. Quantity વધારવા-ઘટાડવા માટેનું UI */}
                    <div className="gym-quantity-container" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Quantity:</span>
                        <button
                            onClick={handleDecrement}
                            style={{ padding: '5px 15px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px' }}
                        >
                            -
                        </button>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            style={{ padding: '5px 15px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px' }}
                        >
                            +
                        </button>
                    </div>

                    {/* 4. Total Price બતાવવા માટે (Price * Quantity) */}
                    <h2 className="gym-total-price" style={{ marginTop: '20px', color: '#ff4b2b' }}>
                        Total: ₹{product.price * quantity}
                    </h2>

                    <button
                        className="gym-dark-btn"
                        style={{ marginTop: '20px' }}
                        onClick={() => navigate(`/product/${product.id}`, {
                            state: {
                                selectedQuantity: quantity,
                                totalPrice: product.price * quantity
                            }
                        })}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Gymitem;