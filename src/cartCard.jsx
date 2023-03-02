import { useState, createContext, useContext } from "react";
import {React} from "react";
import { UserContext } from "./App";
import { useNavigate } from 'react-router-dom';

let rotateStatus = false;


export default  function CartCard({products}){
    const navigate = useNavigate();

    function gotoProduct(id){

        cart.setId(id);
        navigate('/product');

    }

 
  

    const cart = useContext(UserContext);
   
   






    return(
    
        <div className="cartCard" >
            <div className="cartCard__img"  onClick={()=>{gotoProduct(products.id)}}>
            <img onClick={()=>{gotoProduct(products.id)}}  src={products.image}></img>
            </div>
            <div  className="cartCard__flex" >
            <div onClick={()=>{gotoProduct(products.id)}}>{products.title}</div>

            <div className="cartCard__flex_desc" onClick={()=>{gotoProduct(products.id)}}>{products.description}</div>
            
            <div className="cartCard__rate">
                
                {
                    getStar(products.rating)
                }
            </div>    

            <div className="cartCard__price" onClick={()=>{gotoProduct(products.id)}}>
            
            <div onClick={(e)=>removefromCart(e,products.id)} className="cartCard__flex_icon" >
            <i  className="fa-solid fa-trash" onClick={(e)=>removefromCart(e,products.id)} ></i>
            </div>
            &#8377;  {products.price}
            </div>
                
            </div>

            
        </div>
      
    )

    async function removefromCart(e,id){
        e.stopPropagation();

        cart.setCart(cart.cart.filter(item => item!= id))
     }
    

    function getStar(rate){
        let componentArray = [
            <i key="sample1" class="fa-solid fa-star"></i>,
            <i  key="sample2" class="fa-solid fa-star"></i>,
            <i key="sample3" class="fa-solid fa-star"></i>,
            <i  key="sample4" class="fa-solid fa-star"></i>,
            <i  key="sample5" class="fa-solid fa-star"></i>,
    
            ];
       
           
        
          componentArray=componentArray.slice(0,Math.ceil(rate))
            
            return (
                <div>
                  {componentArray}
                </div>
              );
          
            
            
        
     } 
    

}



