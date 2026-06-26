import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ProductDetails.css";
import { FaArrowLeft } from "react-icons/fa";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false); // Read More / Read Less state

    const initialQuantity = location.state?.selectedQuantity || 1;

    const [formData, setFormData] = useState({
        customerName: "",
        phoneNumber: "",
        address: "",
        variety: "",
        quantity: initialQuantity
    });

    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("gym_products")) || [];
        const foundProduct = savedProducts.find((p) => p.id.toString() === id);
        setProduct(foundProduct);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "quantity" ? Number(value) : value });
    };

    const handleIncrease = () => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }));
    const handleDecrease = () => setFormData(prev => ({ ...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 }));

    if (!product) return <h2 className="loading-text">Loading Product Details...</h2>;

    const adminDiscount = Number(product.discount) || 0;
    let currentDiscount = adminDiscount;

    if (formData.quantity >= 5) {
        currentDiscount = 25;
    } else if (formData.quantity >= 3) {
        currentDiscount = 15;
    }

    const basePrice = Number(product.price);
    const originalTotal = basePrice * formData.quantity;
    const discountAmount = (basePrice * currentDiscount / 100) * formData.quantity;
    const finalTotal = Number((originalTotal - discountAmount).toFixed(2));

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const randomOrderId = Math.floor(100000 + Math.random() * 900000);

        const newOrder = {
            orderId: randomOrderId,
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: formData.quantity,
            totalPrice: finalTotal, 
            appliedDiscount: currentDiscount, 
            customerDetails: formData,
            date: new Date().toLocaleString(),
            status: "Pending"
        };

        const existingOrders = JSON.parse(localStorage.getItem("gym_orders")) || [];
        localStorage.setItem("gym_orders", JSON.stringify([...existingOrders, newOrder]));

        alert(`તમારો ઓર્ડર સફળતાપૂર્વક નોંધાઈ ગયો છે! Order ID: #${randomOrderId}`);
        navigate("/");
    };

    // Read more logic limits text to 150 characters
    const textLimit = 150;
    const descriptionText = product.description || "";
    const isLongText = descriptionText.length > textLimit;

    return (
        <div className="product-details-page">
            <div className="top-navigation">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="back-icon" />
                    <span>Back to Products</span>
                </button>
            </div>

            <div className="product-content-wrapper">
                <div className="product-info-card">
                    <div className="image-container"><img src={product.image} alt={product.name} /></div>
                    <div className="details-container">
                        <h2>{product.name}</h2>
                        <h3 className="product-price">₹{product.price} <span>/ item</span></h3>
                        
                        {/* Modified Description Box */}
                        <div className="disc-box">
                            <p className="disc-text" style={{ display: 'inline', margin: 0 }}>
                                {isExpanded ? descriptionText : (isLongText ? `${descriptionText.slice(0, textLimit)}...` : descriptionText)}
                            </p>
                            {isLongText && (
                                <button 
                                    className="read-more-btn" 
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="order-form-card">
                    <h3>Order This Product</h3>
                    <form onSubmit={handleOrderSubmit} className="order-form">
                        <div className="input-group">
                            <input type="text" name="customerName" placeholder="Enter Full Name" required onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <textarea name="address" placeholder="Delivery Address..." rows="3" required onChange={handleChange}></textarea>
                        </div>
                        <div className="input-group">
                            <input type="text" name="variety" placeholder="Variety (e.g. Size L, Color Black)" onChange={handleChange} />
                        </div>

                        <div className="quantity-group">
                            <label>Quantity:</label>
                            <div className="quantity-controls">
                                <button type="button" className="qty-btn" onClick={handleDecrease}>−</button>
                                <span className="qty-display">{formData.quantity}</span>
                                <button type="button" className="qty-btn" onClick={handleIncrease}>+</button>
                            </div>
                        </div>

                        <div className="total-amount-box" style={{ background: '#000000', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                            <h4>Order Summary:</h4>

                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#0afde9' }}>
                                <span>Subtotal:</span>
                                <span style={currentDiscount > 0 ? { textDecoration: 'line-through' } : {}}>₹{originalTotal}</span>
                            </div>

                            {currentDiscount > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#28a745', margin: '5px 0' }}>
                                    <span>Discount ({currentDiscount}%):</span>
                                    <span>- ₹{discountAmount}</span>
                                </div>
                            )}

                            <hr style={{ margin: '10px 0', borderTop: '1px solid #dee2e6' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                <span>Final Total:</span>
                                <span className="total-price" style={{ color: '#e53935' }}>₹{finalTotal}</span>
                            </div>
                        </div>

                        <button type="submit" className="confirm-order-btn" style={{ marginTop: '15px' }}>Confirm Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;