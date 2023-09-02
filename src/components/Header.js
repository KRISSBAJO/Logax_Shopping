import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/mylogo.jpg";
import "./header.css";

export default function Header() {
  const { cartList } = useCart();

  return (
    <header>
      <Link to="/" className="">
        <img className="logo" src={logo} alt="logo" />
        <span> LogaXP Shopping</span>
        </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
}

