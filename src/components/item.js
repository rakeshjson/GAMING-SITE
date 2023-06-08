import "./item.css";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

import PUBG from "../images/PUBG.webp";
import COD from "../images/COD.jpg";
import Mario from "../images/marioRun.jpeg";
import NFS from "../images/NFS.jpg";
import GTA from "../images/GTA.jpg";

const Item = ({ item }) => {
  const img_arr = [PUBG, COD, Mario, NFS, GTA];
  const { addCartData } = useContext(CartContext);
  return (
    <>
      <div id="main-container">
        <section>
          <img id="Game-img" src={img_arr[item.id - 1]} alt="Game" />
        </section>
        <div id="child-container">
          <section id="section-2">
            <article id="title">{item.attributes.Title}</article>
            <article id="description">{item.attributes.Description}</article>
          </section>
          <section id="section-3">
            <article id="price">${item.attributes.price}</article>
            <button
              id="btn"
              onClick={() => {
                addCartData(item);
              }}
            >
              Add to Cart
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
export default Item;
