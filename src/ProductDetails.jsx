import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ProductDetails.css";
import { FaArrowLeft } from "react-icons/fa";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState(null);

    const [isExpanded, setIsExpanded] = useState(false);
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
        setFormData({
            ...formData,
            [name]: name === "quantity" ? Number(value) : value
        });
    };
    // Quantity વધારવા માટેનું ફંક્શન
    const handleIncrease = () => {
        setFormData(prevData => ({
            ...prevData,
            quantity: prevData.quantity + 1
        }));
    };

    // Quantity ઘટાડવા માટેનું ફંક્શન (1 થી ઓછી ન થવા દેવા માટે)
    const handleDecrease = () => {
        setFormData(prevData => ({
            ...prevData,
            quantity: prevData.quantity > 1 ? prevData.quantity - 1 : 1
        }));
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const randomOrderId = Math.floor(100000 + Math.random() * 900000);
        const calculatedTotal = product.price * formData.quantity;

        const newOrder = {
            orderId: randomOrderId,
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: formData.quantity,
            totalPrice: calculatedTotal,
            customerDetails: formData,
            date: new Date().toLocaleString(),
            status: "Pending"
        };

        const existingOrders = JSON.parse(localStorage.getItem("gym_orders")) || [];
        localStorage.setItem("gym_orders", JSON.stringify([...existingOrders, newOrder]));

        alert(`તમારો ઓર્ડર સફળતાપૂર્વક નોંધાઈ ગયો છે! Order ID: #${randomOrderId}`);
        navigate("/");
    };

    if (!product) return <h2 className="loading-text">Loading Product Details...</h2>;

    const totalPrice = product.price * formData.quantity;
    const descriptionWords = product.description ? product.description.split(" ") : [];
    const isLongDescription = descriptionWords.length > 40;

    const displayDescription = isLongDescription && !isExpanded
        ? descriptionWords.slice(0, 40).join(" ") + "..."
        : product.description;

    return (
        <div className="product-details-page">
            {/* Back Button ને સૌથી ઉપર ગોઠવ્યું છે */}
            <div className="top-navigation">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="back-icon" />
                    <span>Back to Products</span>
                </button>
            </div>

            <div className="product-content-wrapper">
                {/* ડાબી બાજુ: પ્રોડક્ટ ની માહિતી */}
                <div className="product-info-card">
                    <div className="image-container">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="details-container">
                        <h2>{product.name}</h2>
                        <h3 className="product-price">₹{product.price} <span>/ item</span></h3>

                        <div className="description-box">
                            <p>{displayDescription}</p>
                            {isLongDescription && (
                                <button onClick={() => setIsExpanded(!isExpanded)} className="read-more-btn">
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* જમણી બાજુ: ઓર્ડર ફોર્મ */}
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

                        <div className="total-amount-box">
                            <h4>Total Amount:</h4>
                            <span className="total-price">₹{totalPrice}</span>
                        </div>

                        <button type="submit" className="confirm-order-btn">Confirm Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;