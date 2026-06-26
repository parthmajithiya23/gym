import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./products.css";

function Gymitem() {
    const [showFullDesc, setShowFullDesc] = useState(false);
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

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    if (!product) {
        return <h2 className="gym-dark-no-products">Product not found!</h2>;
    }

    // ==========================================
    // DISCOUNT CALCULATION LOGIC
    // ==========================================
    const adminDiscount = Number(product.discount) || 0;
    let currentDiscount = adminDiscount; // Default discount

    // Quantity pramane discount check
    if (quantity >= 5) {
        currentDiscount = 25; // 5 thi vadhare mate 25%
    } else if (quantity >= 3) {
        currentDiscount = 15; // 3 thi vadhare mate 15%
    }

    const basePrice = Number(product.price);
    const discountAmount = (basePrice * currentDiscount) / 100;
    const discountedPrice = basePrice - discountAmount;
    const finalTotal = Number((discountedPrice * quantity).toFixed(2));
    // ==========================================

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
                    <p className="gym-detail-price">Base Price: ₹{product.price}</p>
                    <h3>Description:</h3>

                    {/* Wrapper div જે એનિમેશન કંટ્રોલ કરશે */}
                    <div className={`gym-desc-wrapper ${showFullDesc ? "expanded" : ""}`}>
                        <p className="gym-detail-desc" style={{ marginBottom: '5px' }}>
                            {product.description}
                        </p>
                    </div>

                    {/* જો 40 character થી મોટું description હશે તો જ બટન આવશે */}
                    {product.description?.length > 40 && (
                        <span
                            onClick={() => setShowFullDesc(!showFullDesc)}
                            style={{
                                color: '#ff7b00', /* તમારી થીમ મુજબ ઓરેન્જ કલર */
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                marginBottom: '15px',
                                fontSize: '15px'
                            }}
                        >
                            {showFullDesc ? "Read Less ▲" : "Read More ▼"}
                        </span>
                    )}

                    <div className="gym-quantity-container" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Quantity:</span>
                        <button onClick={handleDecrement} style={{ padding: '5px 15px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px' }}>-</button>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{quantity}</span>
                        <button onClick={handleIncrement} style={{ padding: '5px 15px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px' }}>+</button>
                    </div>

                    {/* TOTAL PRICE WITH DISCOUNT */}
                    <div style={{ marginTop: '20px' }}>
                        {currentDiscount > 0 && (
                            <p style={{ color: '#ff4b2b', fontWeight: 'bold', margin: '0' }}>
                                🎉 {currentDiscount}% Discount Applied!
                            </p>
                        )}
                        <h2 className="gym-total-price" style={{ color: '#28a745', marginTop: '5px' }}>
                            Total: ₹{finalTotal}
                        </h2>
                    </div>

                    <button
                        className="gym-dark-btn"
                        style={{ marginTop: '20px' }}
                        onClick={() => navigate(`/product/${product.id}`, {
                            state: {
                                selectedQuantity: quantity // Khali quantity moklvi, total nahi (karan ke tya pachu calculate thase)
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