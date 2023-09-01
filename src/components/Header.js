import { Link, NavLink } from "react-router-dom";
import logo from "../assets/mylogo.jpg";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="">
        <img className="logo" src={logo} alt="logo" />
        <span className="logo-name"> LogaXP Shopping</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  );
};
