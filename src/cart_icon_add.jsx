import React from "react";
import { useContext,useState } from "react";
import { UserContext } from "./App";

//seperate componenet for icon which is used to add to cart
function CartAdd({ id }) {
  const { setCart } = useContext(UserContext);
 

  function addtoCart(event) {
    let firstChild = event.target;
    //changes the icon
    firstChild.style.transitionDuration = "1s";
    firstChild.style.transform = "rotate(360deg)";

    firstChild.classList.remove("fa-cart-plus");
    firstChild.classList.add("fa-check");
    //upload data to cart context 
    setCart((previousState) => {
      const newId = id;
      return previousState.concat(newId);
    });

    event.target.disabled=true;
  }
  return (
    <div className="card__flex_icon">
      <i  className="fa-solid fa-cart-plus" onClick={(e) => addtoCart(e)}></i>
    </div>
  );
}
//use to memoize component. 
export default React.memo(CartAdd);
