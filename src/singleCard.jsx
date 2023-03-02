import { useState, createContext, useContext } from "react";
import {React} from "react";
import { UserContext } from "./App";
import { useNavigate } from 'react-router-dom';

let rotateStatus = false;


export default  function SingleCard({products}){
    const navigate = useNavigate();

    function gotoProduct(id){

        cart.setId(id);
        navigate('/product');

    }

 
  

    const cart = useContext(UserContext);
   
   




    async  function addtoCart(event,id){
    
        let firstChild = event.target;
     

        firstChild.style.transitionDuration='1s';
        firstChild.style.transform = 'rotate(360deg)';

        rotateStatus=true

        firstChild.classList.remove('fa-cart-plus');
        firstChild.classList.add('fa-check');

        
        await cart.setCart(previousState => {
            return [ ...previousState, id ]
          });
       


        
        
        }

    return(
    
        <div className="card" >
            <div  className="card__img"  onClick={()=>{gotoProduct(products.id)}}>
            <img  onClick={()=>{gotoProduct(products.id)}}  src={products.image}></img>
            </div>
            <div   className="card__flex" >
            <div  onClick={()=>{gotoProduct(products.id)}}>{products.title}</div>
            <div  className="card__flex_icon" >
            <i   className="fa-solid fa-cart-plus" onClick={(e)=>addtoCart(e,products.id)} ></i>
            </div>

            </div>

            <div    className="card__price" onClick={()=>{gotoProduct(products.id)}}>
            &#8377; {products.price}
            </div>
                
        </div>
      
    )

}



