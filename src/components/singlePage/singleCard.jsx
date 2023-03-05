import React from "react";

import { useNavigate } from "react-router-dom";
import CartAdd from "../landingPage/cart_icon_add";

function SingleCard({ products }) {
  const navigate = useNavigate();

  function gotoProduct(id) {
    // cart.setId(id);
    navigate(`/product/${id}`);
  }

  return (
    <div className="card">
      <div
        className="card__img"
        onClick={() => {
          gotoProduct(products.id);
        }}
      >
        <img
          alt="product "
          onClick={() => {
            gotoProduct(products.id);
          }}
          src={products.image}
        ></img>
      </div>
      <div className="card__flex">
        <div
          onClick={() => {
            gotoProduct(products.id);
          }}
        >
          {products.title}
        </div>

        <CartAdd id={products.id} />
      </div>

      <div
        className="card__price"
        onClick={() => {
          gotoProduct(products.id);
        }}
      >
        &#8377; {products.price}
      </div>
    </div>
  );
}

export default React.memo(SingleCard);
