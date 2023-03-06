import { React, useContext, useId } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CartCard from "./cartCard";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function CartWindow() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let cart = useContext(UserContext);

  useEffect(() => {
    getProducts();
  }, [cart.cart]);

  async function getProducts() {
    let total = 0;

    let finalArray = [];

    let resp = await axios.get(process.env.REACT_APP_BASE_URL);

    setLoading(false);

    await cart.cart.map(function (value) {
      resp.data.filter((items) => {
        if (value == items.id) {
          let cartObject = {
            id: "",
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
            rating: "",
          };

          total = total + items.price;

          cartObject.id = items.id;
          cartObject.title = items.title;
          cartObject.price = items.price;
          cartObject.description = items.description;
          cartObject.category = items.category;
          cartObject.image = items.image;
          cartObject.rating = items.rating.rate;

          finalArray.push(cartObject);
        }
      });
    });

    await setProducts(finalArray);

    cart.setTotal(total);

    //HIDE SEARCH BAR
    cart.setNav("navBar__center hidden");
  }

  //CART WINDOW
  return (
    <div className="cart">
      <div className="cart__items">
        {!isLoading ? (
          products?.length > 0 ? (
            products.map((item) => {
              return <CartCard key={useId} products={item} />;
            })
          ) : (
            <div
              style={{
                textAlign: "center",
                fontWeight: "Bold",
                fontSize: "60px",
              }}
            >
              <i className="fa-brands fa-dropbox"></i>
              <br></br>
              Your Cart Is Empty
            </div>
          )
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
      <div className="cart__summary">
        <div className="cart__summary_user">Naeemudheen P</div>
        <div className="cart__summary_user">
          4 th Floor, SurveySparrow,Kakkand,Kochi
        </div>
        <div className="cart__summary_total">&#8377; Total:{cart.total}</div>
        <div className="cart__summary_button">
          <button>Pay Now</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
