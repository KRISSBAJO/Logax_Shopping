import { useCart } from "../context/CartContext";
import "./cartCard.css";

function CartCard ({product})  {
  const { removeFromCart } = useCart();

  const {name, price, image} = product;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
  )
}

export default CartCard;
