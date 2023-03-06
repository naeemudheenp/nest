import { React, useContext, useId } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function SinglePage() {
  const [products, setProducts] = useState();
  let cart = useContext(UserContext);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getProducts();
  }, []);

  function CheckCart() {
    let buttonComponent = [
      <button
        key={useId}
        onClick={() => {
          addtoCart(cart.currentId);
        }}
      >
        Add To Cart
      </button>,
    ];

    if (cart.cart != undefined) {
      cart.cart.map((item) => {
        if (item == cart.currentId) {
          buttonComponent.splice(
            0,
            1,
            <button
              key={useId}
              onClick={() => {
                removefromCart(cart.currentId);
              }}
            >
              Remove From Cart
            </button>
          );
        }
      });
    }

    return <div>{buttonComponent}</div>;
  }

  async function getProducts() {
    cart.setNav("navBar__center hidden ");

    let url = "";

    url = `https://fakestoreapi.com/products/${id}`;

    let resp = await axios.get(process.env.REACT_APP_BASE_URL + id);

    let result = resp.data;

    setProducts(result);
  }
  async function addtoCart(id) {
    cart.setCart([...cart.cart, id]);
  }

  async function removefromCart(id) {
    cart.setCart(cart.cart.filter((item) => item != id));
  }

  function getStar(rate) {
    let componentArray = [
      <i key="sample1" className="fa-solid fa-star"></i>,
      <i key="sample2" className="fa-solid fa-star"></i>,
      <i key="sample3" className="fa-solid fa-star"></i>,
      <i key="sample4" className="fa-solid fa-star"></i>,
      <i key="sample5" className="fa-solid fa-star"></i>,
    ];

    componentArray = componentArray.slice(0, Math.ceil(rate));

    return <div>{componentArray}</div>;
  }

  return products != null ? (
    <>
      <div className="singlePage">
        <div className="singlePage__text">
          <div className="singlePage__text_title">{products.title}</div>

          <div className="singlePage__text_desc">{products.description}</div>

          <div className="singlePage__text_rate">
            {getStar(products.rating.rate)}
          </div>

          <div className="singlePage__text_flex">
            <div className="singlePage__text_flex_price">
              &#8377;{products.price}
            </div>

            <div className="singlePage__text_flex_button">
              <CheckCart key={useId} />
            </div>
          </div>

          <div className="singlePage__text_nav">
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <i className="fa-solid fa-house"></i>
            </div>
            <div
              onClick={() => {
                navigate("/cart");
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        <div className="singlePage__img">
          <img src={products.image}></img>
        </div>
      </div>
    </>
  ) : (
    <div className="loader">Loading...</div>
  );
}
