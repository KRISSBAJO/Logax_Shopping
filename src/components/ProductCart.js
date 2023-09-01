import React, { useState } from 'react';
import './productCard.css';

export default function ProductCard({ product }) {
  const { name, price, image } = product;
  const [addedToCart, setAddedToCart] = useState(false);

  const toggleCartStatus = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className={`productCard ${addedToCart ? 'added' : ''}`}>
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button
          className={`btn ${addedToCart ? 'remove' : 'add'}`}
          onClick={toggleCartStatus}
        >
          {addedToCart ? 'Remove' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

