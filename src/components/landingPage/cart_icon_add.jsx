import React from "react";
import { useContext,useState,useEffect } from "react";
import { UserContext } from "../../App";

//seperate componenet for icon which is used to add to cart
function CartAdd({ id }) {
  const cart  = useContext(UserContext);
  const [disabled, setdisabled] = useState(false);
  const [style, setstyle] = useState( "fa-solid fa-cart-plus");

  useEffect(() => {
    checkCart();
  }, []);
 
  function checkCart(){
    let status = cart.cart.find((id1)=>{
      return id1==id
    });
    if(status){
      setdisabled(true)
      setstyle("fa-solid fa-check no-click")
    }
  }

  function addtoCart(event) {
    let firstChild = event.target;
    //changes the icon
    firstChild.style.transitionDuration = "1s";
    firstChild.style.transform = "rotate(360deg)";

    firstChild.classList.remove("fa-cart-plus");
    firstChild.classList.add("fa-check");
    firstChild.classList.add("no-click");

    //upload data to cart context 
    cart.setCart((previousState) => {
      const newId = id;
      return previousState.concat(newId);
    });

    event.target.disabled=true;
  }
  return (
    <div className="card__flex_icon">
      <i  className={style} onClick={(e) => addtoCart(e)}></i>
    </div>
  );
}
//use to memoize component. 
export default React.memo(CartAdd);
