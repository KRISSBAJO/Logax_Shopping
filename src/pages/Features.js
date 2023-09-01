import React from 'react';
import './Features.css'; // Import your custom CSS file

const Features = () => {
  return (
    <section className="features">
      <h2>Explore Our Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Wide Range of Products</h3>
          <p>Discover a vast collection of the latest tech gadgets, including laptops, smartphones, accessories, and more.</p>
          <p>Our products are available in a variety of sizes, colors, and specifications to suit your needs.</p>
        </div>
        <div className="feature">
          <h3>Secure Online Shopping</h3>
          <p>Your safety is our priority. Enjoy secure and encrypted transactions while shopping on our platform.</p>
          <p>We accept a variety of payment methods, including PayPal, credit cards, and more.</p>
          <p>The payment process is simple and straightforward, ensuring a seamless experience.</p>     
          </div>
        <div className="feature">
          <h3>Fast and Reliable Delivery</h3>
          <p>Get your orders delivered swiftly and reliably to your doorstep, ensuring you have your new gadgets in no time.</p>
          <p>We offer free shipping on all orders over $100.</p>
          <p>Our delivery service is available nationwide.</p>
        </div>
        <div className="feature">
          <h3>24/7 Customer Support</h3>
          <p>We're here for you around the clock. Reach out to our dedicated support team whenever you need assistance.</p>
          <p>Our team is available 24/7 via email, phone, and live chat.</p>
        </div>
        <div className="feature">
          <h3>Easy Returns</h3>
          <p>If you're not satisfied with your purchase, our hassle-free return process ensures a smooth experience.</p>
          <p>Return your order within 30 days of purchase to get a full refund.</p>
        </div>
        <div className="feature">
          <h3>Reward Programs</h3>
          <p>Join our loyalty program and earn rewards with every purchase. Enjoy exclusive offers and discounts.</p>
          <p>Get access to special deals and promotions.</p>
          <p>Redeem your rewards for discounts on future purchases.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
