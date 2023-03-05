import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import CartIcon from "./cartIcon";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

  //NAVIGATION BAR
  const navigate = useNavigate();

  const cart = useContext(UserContext);

  function userInput(e){
    
    if (e.currentTarget.value == "") {
      cart.setSearch("");
      cart.setWindow(true);
    } else {

      
      cart.setSearch(
        e.currentTarget.value.replace(/\s/g, "").toLocaleLowerCase()//APPLYING SEARCH BY CLEARING ALL SPACES
      );
      cart.setWindow(false);
    }
  }

  return (
    <div className="navBar">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="navBar__main"
      >
        Nest
      </div>

      <div className={cart.nav}>
        <div className="navBar__center_input">
          <input
            type="text"
            placeholder="Search Products |"
            onChange={
              userInput
            }
          ></input>
        </div>
      </div>
      <div className="navBar__right">
        <CartIcon />
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
  );
}
