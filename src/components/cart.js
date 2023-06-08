import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../context/cart-context";
import useRazorpay from "react-razorpay";
import "./cart.css";
import PUBG from "../images/PUBG.webp";
import COD from "../images/COD.jpg";
import Mario from "../images/marioRun.jpeg";
import NFS from "../images/NFS.jpg";
import GTA from "../images/GTA.jpg";

const Cart = () => {
  const arr = [PUBG, COD, Mario, NFS, GTA];
  const { cartData } = useContext(CartContext);
  let total = 0;
  const RazorPay = useRazorpay();
  const razorPayDisplay = useCallback(
    async (total) => {
      const options = {
        key: "rzp_test_cvnNSTuIfaTAYG",
        amount: total * 100,
        currency: "INR",
        name: "Game Store",
        description: "Gaming Transaction",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "rakesh",
          email: "rakeshwillliam@gmail.com",
          contact: "0123456789",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new RazorPay(options);
      rzp1.open();
    },
    [RazorPay]
  );
  return (
    <div>
      <h1 id="billing-heading"> Billing Cart </h1>
      <section id="cart-bill">
        {cartData.map((cart, key) => {
          return (
            <article key={key}>
              <span className="gen"> {cart.attributes.Title}</span>
              <span className="gen"> ${cart.attributes.price}</span>
              <span id="mini-total">
                {(total = total + cart.attributes.price)}
              </span>
            </article>
          );
        })}
        <article id="total">Total: ${total}</article>
        <button
          id="checkout"
          className="general"
          onClick={() => {
            razorPayDisplay(100);
          }}
        >
          Checkout
        </button>
      </section>
      <section>
        <section>
          {cartData.map((cartItem) => {
            // console.log(cartItem);
            return (
              <div key={cartItem.id} id="main-div">
                <img id="img" src={arr[cartItem.id - 1]} alt="Game" />

                <section id="section-abc">
                  <article className="abc">{cartItem.attributes.Title}</article>
                  <article className="abc">
                    ${cartItem.attributes.price}
                  </article>
                  <button id="button">Remove</button>
                </section>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
export default Cart;
