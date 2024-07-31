import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px'
    }}>
      <h3>Cart</h3>
      <div style={{ marginTop: '20px' }}>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                padding: '15px',
                marginBottom: '15px',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                backgroundColor: '#fff'
              }}>
                <h4>{item.product_name}</h4>
                <p>{item.quantity} x ₹{item.price}</p>
              </div>
            ))}
            <div style={{
              marginTop: '20px',
              padding: '10px',
              borderTop: '1px solid #dee2e6',
              textAlign: 'right'
            }}>
              <h4>Total: ₹{totalPrice}</h4>
            </div>
            <button style={{
              marginTop: '20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
