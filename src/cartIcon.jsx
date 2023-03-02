import {React, useContext} from 'react';
import { UserContext,CartConsumer } from "./App";
import { useNavigate } from 'react-router-dom';
export default function CartIcon( ){

    const navigate = useNavigate();

    const cart = useContext(UserContext)

    return(
        <div onClick={()=>{   navigate('/cart');}} className="cartIcon">
                <i className="fa-solid fa-cart-shopping"></i>
            <div className="cartIcon__counter">
                {cart.cart.length}
            </div>
         
        </div>
    );

}