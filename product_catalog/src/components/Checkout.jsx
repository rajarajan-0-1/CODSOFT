import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    console.log('Checkout button clicked');
  };

  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <h4>{item.product_name}</h4>
            <p>
              {item.quantity} x {item.price} {item.currency}
            </p>
          </div>
        ))}
        <h4>Total: {totalPrice} {cartItems[0]?.currency}</h4>
      </div>
      <Link to="/checkout">
        <button className="btn" onClick={handleCheckout}>Checkout</button>
      </Link>
    </div>
  );
};

export default Checkout;
