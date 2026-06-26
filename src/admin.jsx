import { useState, useEffect } from "react";
import "./admin.css";

function Admin() {
    // ---------------- STATE VARIABLES ----------------
    const [activeTab, setActiveTab] = useState("products");
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);

    // Products State
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("gym_products");
        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        stock: "",
        discount: "", // DISCOUNT FIELD ADD KARYU
        image: "",
        description: "",
    });

    // Orders State
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem("gym_orders");
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    // Inquiries State
    const [inquiries, setInquiries] = useState(() => {
        const savedInquiries = localStorage.getItem("gym_inquiries");
        return savedInquiries ? JSON.parse(savedInquiries) : [];
    });

    // ---------------- EFFECTS ----------------
    useEffect(() => {
        localStorage.setItem("gym_products", JSON.stringify(products));
    }, [products]);

    // ---------------- HANDLERS ----------------

    // --- Product Handlers ---
    const handleSave = () => {
        if (!newProduct.name || !newProduct.price || !newProduct.stock) {
            alert("Please fill in at least Name, Price, and Stock!");
            return;
        }

        if (editId) {
            setProducts(
                products.map((p) => (p.id === editId ? { ...p, ...newProduct } : p))
            );
        } else {
            setProducts([...products, { id: Date.now(), ...newProduct }]);
        }

        setShowForm(false);
        // FORM RESET VAKHTE DISCOUNT PAN RESET THASE
        setNewProduct({ name: "", price: "", stock: "", discount: "", image: "", description: "" });
        setEditId(null);
        alert(editId ? "✅ Product Updated Successfully!" : "✅ Product Added Successfully!");
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter((p) => p.id !== id));
        }
    };

    // --- Order Handlers ---
    const handleDeleteOrder = (id) => {
        if (window.confirm("શું તમે ખરેખર આ ઓર્ડર કાઢી નાખવા માંગો છો?")) {
            const updatedOrders = orders.filter((order) => order.orderId !== id);
            setOrders(updatedOrders);
            localStorage.setItem("gym_orders", JSON.stringify(updatedOrders));
        }
    };

    const handleStatusChange = (id, newStatus) => {
        const updatedOrders = orders.map((order) => {
            if (order.orderId === id) {
                return { ...order, status: newStatus };
            }
            return order;
        });

        setOrders(updatedOrders);
        localStorage.setItem("gym_orders", JSON.stringify(updatedOrders));
        alert(`ઓર્ડર સ્ટેટસ બદલીને "${newStatus}" કરી દેવામાં આવ્યું છે!`);
    };

    // --- Inquiry Handlers ---
    const handleDeleteInquiry = (id) => {
        if (window.confirm("શું તમે આ ઇન્ક્વાયરી કાઢી નાખવા માંગો છો?")) {
            const updatedInquiries = inquiries.filter((inq) => inq.id !== id);
            setInquiries(updatedInquiries);
            localStorage.setItem("gym_inquiries", JSON.stringify(updatedInquiries));
        }
    };

    const handleViewInquiry = (inquiry) => {
        setSelectedInquiry(inquiry);

        if (!inquiry.isRead) {
            const updatedInquiries = inquiries.map((inq) =>
                inq.id === inquiry.id ? { ...inq, isRead: true } : inq
            );
            setInquiries(updatedInquiries);
            localStorage.setItem("gym_inquiries", JSON.stringify(updatedInquiries));
        }
    };

    const pendingOrdersCount = orders.filter(order => order.status === "Pending").length;
    const newInquiriesCount = inquiries.filter(inq => !inq.isRead).length;

    // ---------------- RENDER ----------------
    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>🏋️ GYM ADMIN</h2>
                <div className="nav-buttons">
                    <button
                        className={activeTab === "products" ? "active" : ""}
                        onClick={() => setActiveTab("products")}
                    >
                        📦 Products
                    </button>

                    <button
                        className={`menu-item ${activeTab === "orders" ? "active" : ""}`}
                        onClick={() => setActiveTab("orders")}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                        <span>🛒 Orders</span>
                        {pendingOrdersCount > 0 && (
                            <span className="notification-badge">{pendingOrdersCount}</span>
                        )}
                    </button>

                    <button
                        className={`menu-item ${activeTab === "inquiries" ? "active" : ""}`}
                        onClick={() => setActiveTab("inquiries")}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                        <span>📞 Inquiries</span>
                        {newInquiriesCount > 0 && (
                            <span className="notification-badge">{newInquiriesCount}</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="content">

                {/* ======================= PRODUCTS TAB ======================= */}
                {activeTab === "products" && (
                    <div className="fade-in">
                        <div className="header">
                            <h1>Products Inventory</h1>
                            <button
                                className="add-btn"
                                onClick={() => {
                                    setShowForm(true);
                                    setEditId(null);
                                    setNewProduct({ name: "", price: "", stock: "", discount: "", image: "", description: "" });
                                }}
                            >
                                + Add Product
                            </button>
                        </div>

                        {showForm && (
                            <div className="product-form slide-down">
                                <h3>{editId ? "Edit Product" : "New Product"}</h3>
                                <div className="form-inputs">
                                    <input
                                        type="text"
                                        placeholder="Product Name *"
                                        value={newProduct.name}
                                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Price (₹) *"
                                        value={newProduct.price}
                                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    />
                                    {/* DISCOUNT INPUT FIELD */}
                                    <input
                                        type="number"
                                        placeholder="Discount (%)"
                                        value={newProduct.discount}
                                        onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Stock Qty *"
                                        value={newProduct.stock}
                                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="full-width"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setNewProduct({ ...newProduct, image: reader.result });
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                    {newProduct.image && (
                                        <img
                                            src={newProduct.image}
                                            alt="Preview"
                                            style={{
                                                width: "120px",
                                                height: "120px",
                                                objectFit: "cover",
                                                marginTop: "10px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    )}
                                    <textarea
                                        placeholder="Product Description..."
                                        value={newProduct.description}
                                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                        rows="3"
                                        style={{
                                            width: "100%",
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "1px solid #ccc",
                                            marginTop: "10px",
                                            fontFamily: "inherit"
                                        }}
                                    ></textarea>
                                </div>
                                <div className="form-actions">
                                    <button className="save-btn" onClick={handleSave}>
                                        {editId ? "Update Product" : "Save Product"}
                                    </button>
                                    <button className="cancel-btn" onClick={() => setShowForm(false)}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Discount</th> {/* DISCOUNT HEADER KARYU */}
                                        <th>Stock</th>
                                        <th className="action-col">Edit</th>
                                        <th className="action-col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="empty-msg">No products found. Add some! 📦</td>
                                        </tr>
                                    ) : (
                                        products.map((product) => (
                                            <tr key={product.id}>
                                                <td>
                                                    {product.image ? (
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }}
                                                        />
                                                    ) : (
                                                        <div className="placeholder-img" style={{ fontSize: "24px" }}>🖼️</div>
                                                    )}
                                                </td>
                                                <td className="fw-bold">{product.name}</td>
                                                <td className="description-cell">
                                                    <div className="description-box">
                                                        {product.description}
                                                    </div>
                                                </td>
                                                <td className="text-success fw-bold">₹{product.price}</td>

                                                {/* DISCOUNT NI VALUE BATAVVA MATE */}
                                                <td className="text-danger fw-bold">
                                                    {product.discount ? `${product.discount}% OFF` : "-"}
                                                </td>

                                                <td>
                                                    <span className={`stock-badge ${product.stock < 5 ? "low-stock" : ""}`}>
                                                        {product.stock} units
                                                    </span>
                                                </td>
                                                <td className="action-col">
                                                    <button
                                                        className="icon-btn edit-icon"
                                                        onClick={() => {
                                                            setShowForm(true);
                                                            setEditId(product.id);
                                                            setNewProduct({
                                                                name: product.name,
                                                                price: product.price,
                                                                stock: product.stock,
                                                                discount: product.discount || "", // EDIT MA DISCOUNT ADD THAY E MATE
                                                                image: product.image || "",
                                                                description: product.description || "",
                                                            });
                                                        }}
                                                    >
                                                        ✏️
                                                    </button>
                                                </td>
                                                <td className="action-col">
                                                    <button className="icon-btn delete-icon" onClick={() => handleDelete(product.id)}>
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ======================= ORDERS TAB ======================= */}
                {/* Omitted for brevity: (Your orders tab code remains unchanged) */}
                {activeTab === "orders" && (
                    <div className="fade-in">
                        <div className="header">
                            <h1>Recent Orders</h1>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ORDER ID</th>
                                        <th>CUSTOMER</th>
                                        <th>PRODUCT</th>
                                        <th>VARIANT</th>
                                        <th>QTY</th>
                                        <th>TOTAL</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <tr key={order.orderId}>
                                                <td>
                                                    <div className="fw-bold">#{order.orderId}</div>
                                                </td>
                                                <td>
                                                    <div className="fw-bold">{order.customerDetails?.customerName}</div>
                                                    <div className="order-details-text">{order.customerDetails?.phoneNumber}</div>
                                                    <div className="order-details-text">{order.customerDetails?.address}</div>
                                                </td>
                                                <td>
                                                    <div className="text-gray">{order.productName}</div>
                                                </td>
                                                <td>{order.customerDetails?.variety || "-"}</td>
                                                <td>{order.quantity}</td>
                                                <td className="fw-bold text-success">₹{order.totalPrice}</td>
                                                <td className="action-col">
                                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                                                        <select
                                                            className="status-select"
                                                            value={order.status}
                                                            onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                                        >
                                                            <option value="Pending">Pending</option>
                                                            <option value="Shipped">Shipped</option>
                                                            <option value="Delivered">Delivered</option>
                                                            <option value="Cancelled">Cancelled</option>
                                                        </select>
                                                        <button
                                                            className="icon-btn delete-icon"
                                                            onClick={() => handleDeleteOrder(order.orderId)}
                                                            title="Delete Order"
                                                        >
                                                            🗑️
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="empty-msg">No orders received yet...!</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ======================= INQUIRIES TAB ======================= */}
                {/* Omitted for brevity: (Your inquiries tab code remains unchanged) */}
                {activeTab === "inquiries" && (
                    <div className="fade-in">
                        <div className="header">
                            <h1>Customer Inquiries</h1>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Message</th>
                                        <th className="action-col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inquiries.length > 0 ? (
                                        inquiries.map((inq) => (
                                            <tr key={inq.id}>
                                                <td className="text-gray">{inq.date}</td>
                                                <td className="fw-bold">{inq.name}</td>
                                                <td>
                                                    <div style={{ maxHeight: "80px", overflowY: "auto" }}>
                                                        <div>{inq.phone}</div>
                                                        <div>{inq.email}</div>
                                                    </div>
                                                </td>
                                                <td className="description-cell">
                                                    <div className="description-box" style={{ maxHeight: "100px" }}>
                                                        {inq.message}
                                                    </div>
                                                </td>
                                                <td className="action-col">
                                                    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                                                        <button
                                                            className="view-btn"
                                                            onClick={() => handleViewInquiry(inq)}
                                                        >
                                                            👁 View
                                                        </button>
                                                        <button
                                                            className="icon-btn delete-icon"
                                                            onClick={() => handleDeleteInquiry(inq.id)}
                                                        >
                                                            🗑️
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="empty-msg">No inquiries found. 📞</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Inquiry Modal */}
                            {selectedInquiry && (
                                <div className="inquiry-modal">
                                    <div className="inquiry-content">
                                        <button className="close-btn" onClick={() => setSelectedInquiry(null)} title="Close">
                                            ❌
                                        </button>
                                        <h2>Customer Full Details</h2>

                                        {/* નવું વ્યવસ્થિત ટેબલ */}
                                        <table className="inquiry-details-table">
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <td>{selectedInquiry.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Phone</th>
                                                    <td>{selectedInquiry.phone}</td>
                                                </tr>
                                                <tr>
                                                    <th>Email</th>
                                                    <td>{selectedInquiry.email}</td>
                                                </tr>
                                                <tr>
                                                    <th>DOB</th>
                                                    <td>{selectedInquiry.dob}</td>
                                                </tr>
                                                <tr>
                                                    <th>Gender</th>
                                                    <td>{selectedInquiry.gender}</td>
                                                </tr>
                                                <tr>
                                                    <th>Joining Date</th>
                                                    <td>{selectedInquiry.joiningDate}</td>
                                                </tr>
                                                <tr>
                                                    <th>Workout Time</th>
                                                    <td>{selectedInquiry.workoutTime}</td>
                                                </tr>
                                                <tr>
                                                    <th>Selected Plan</th>
                                                    {/* Plan ને હાઇલાઇટ કરવા બેજ ઉમેર્યો છે */}
                                                    <td><span className="plan-badge">{selectedInquiry.plan || "Not Selected"}</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Goal</th>
                                                    <td>{selectedInquiry.goal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Weight</th>
                                                    <td>{selectedInquiry.currentWeight} kg (Current) ➡️ {selectedInquiry.targetWeight} kg (Target)</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="message-section">
                                            <strong>Message:</strong>
                                            <div className="message-box">
                                                {selectedInquiry.message || "No message provided."}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;