import React from 'react';

export default function ProductDetail({ location }) {
    const { state } = location;
  if (!state) {
    return <div>Loading...</div>; // Or display an error message
  }
  const { name, price, image, features } = state.product;

  return (
    <div className="product-detail">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <h3>Features:</h3>
      <ul>
        <li>RAM: {features.ram}</li>
        <li>HDD: {features.hdd}</li>
        <li>Color: {features.color}</li>
        <li>Size: {features.size}</li>
        <li>Processor: {features.processor}</li>
        {/* ... other features ... */}
      </ul>
    </div>
  );
}
