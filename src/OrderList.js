import React, { useState } from 'react';

const OrderList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', budget: 50, quantity: 1 },
    { id: 2, name: 'Item 2', budget: 30, quantity: 2 },
    { id: 3, name: 'Item 3', budget: 70, quantity: 1 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 0) } : item
      )
    );
  };

  return (
    <div style={styles.orderListContainer}>
      <header style={styles.orderListHeader}>
        <h1>Order List</h1>
      </header>

      <div style={styles.itemList}>
        {items.map(item => (
          <div key={item.id} style={styles.itemRow}>
            <div style={styles.itemInfo}>
              <span style={styles.itemName}>{item.name}</span>
              <span style={styles.itemBudget}>${item.budget.toFixed(2)}</span>
            </div>
            <div style={styles.itemQuantity}>
              <button
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
              <span style={styles.quantity}>{item.quantity}</span>
              <button
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.orderActions}>
        <button style={styles.actionButton}>Scan Items</button>
        <button style={styles.actionButton}>Checkout in 5 Minutes</button>
        <button style={styles.actionButton}>Appoint Trial Room</button>
        <button style={styles.actionButton}>Cancel Order</button>
      </div>
    </div>
  );
};

const styles = {
  orderListContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  orderListHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  itemList: {
    marginBottom: '20px',
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  itemInfo: {
    flex: 2,
  },
  itemName: {
    fontSize: '16px',
  },
  itemBudget: {
    marginLeft: '10px',
    fontSize: '14px',
    color: '#888',
  },
  itemQuantity: {
    display: 'flex',
    alignItems: 'center',
  },
  quantityButton: {
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  quantity: {
    margin: '0 10px',
    fontSize: '16px',
  },
  orderActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default OrderList;
