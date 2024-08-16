import React from "react";
import { Link } from 'react-router-dom';

import Footer from './components/Footer.js'



const orders = [
  {
    date: "Jan 24, 2020",
    time: "20:04",
    location: "Walmart Store - Baker Street",
    products: "15 Products",
    price: "£ 147,99",
    additionalProducts: 9,
  },
  {
    date: "Jan 13, 2020",
    time: "13:16",
    location: "Walmart Store - Baker Street",
    products: "30 Products",
    price: "£ 372,45",
    additionalProducts: 24,
  },
  {
    date: "Jan 2, 2020",
    time: "16:32",
    location: "Walmart Store - Baker Street",
    products: "20 Products",
    price: "£ 225,89",
    additionalProducts: 12,
  },
];

function OrderHistory() {
  const hasOrders = orders.length > 0;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>Orders</h1>
      {hasOrders ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <button
                style={{ fontWeight: "bold", borderBottom: "2px solid black" }}
              >
                Past Orders
              </button>
              <Link to="/order-list"><button style={{ color: "#888" }}>Upcoming Orders</button></Link>
            </div>
            <div style={{ color: "#888" }}>{orders.length} Orders</div>
          </div>
          {orders.map((order, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3>{order.location}</h3>
                  <p>
                    {order.date} | {order.time}
                  </p>
                </div>
                <div style={{ color: "#888" }}>▶</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div>
                  <p>Products: {order.products}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p>Order Price: {order.price}</p>
                  <p>+{order.additionalProducts} more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "50px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <img
            src="no-orders-icon.png"
            alt="No Orders"
            style={{ width: "50px", marginBottom: "20px" }}
          />
          <h3>No Orders Yet</h3>
          <p>
            Browse products and start an order. Delivery fee is free for your
            first order!
          </p>
          <button
            style={{
              backgroundColor: "red",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Start Shopping
          </button>
        </div>
      )}

      {/* <Footer/> */}
    </div>
    
  );
}

export default OrderHistory;

   

