import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import cartIcon from "../images/cart001.png";
import "./header.css";

function Header() {
  const { cartData } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div id="header-component">
      <section>
        <h3 id="logo"> Demo site</h3>
      </section>
      <h1 id="header">MODERN GAMES </h1>
      <section
        onClick={() => {
          navigate("/cart");
        }}
      >
        <span id="noOfItems-inCart">{cartData.length}</span>
        <img id="icon" src={cartIcon} alt="cart" />
      </section>
    </div>
  );
}

export default Header;
