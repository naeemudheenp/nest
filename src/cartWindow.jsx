import {React, useContext} from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import CartCard from './cartCard';
import { UserContext } from "./App";
import { useNavigate } from 'react-router-dom';

export default function CartWindow(){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
 
    let cart = useContext(UserContext)

    useEffect(() => {
        getProducts()
    },[cart.cart]);

  


    return(
        <div className="cart">
            
            <div className="cart__items">
               {
                products?.length > 0 ? (
                    
                        products.map((item)=>{
                            
                            return <CartCard  key={Math.random()} products = {item} />
                        })
                    
                ):
                (
                    <div style={{textAlign:'center',fontWeight:"Bold",fontSize:"60px"}}>
                        <i className="fa-brands fa-dropbox"></i><br></br>
                        Your Cart Is Empty</div>
                )
               }
                </div>
            <div className="cart__summary">
                <div className="cart__summary_user">
                    Naeemudheen P
                </div>
                <div className="cart__summary_user">
                    4 th Floor, SurveySparrow,Kakkand,Kochi
                </div>
                <div className="cart__summary_total">
                   
                &#8377; Total:{cart.total}
                </div>
                <div className="cart__summary_button">
                    <button>Pay Now</button>
                    <button  onClick={()=>{   navigate('/');}}> Home</button>

                </div>
                


            </div>
        </div>

    );

   

    async function getProducts(){
        let total=0

     
        
        let finalArray =[];
        
      
        let url =`https://fakestoreapi.com/products`;
      
      
        
          let resp = await axios.get(url)
        
      
      
      
      
          await cart.cart.map(function (value){
            resp.data.filter((items) =>{
                if(value==items.id){

                

                    let cartObject = {
                        id:"",
                        title:"",
                        price:"",
                        description:"",
                        category:"",
                        image:"",
                        rating:"",
            
            
                    }

                   
                    total=total+items.price
                   
                    cartObject.id=items.id;
                    cartObject.title = items.title;
                    cartObject.price = items.price;
                    cartObject.description = items.description;
                    cartObject.category = items.category;
                    cartObject.image = items.image;
                    cartObject.rating = items.rating.rate

                    finalArray.push(cartObject);

                   



                    
                    
          

                }
            })
          })

         await setProducts(finalArray)
      
         
         cart.setTotal(total)
          cart.setNav("navBar__center hidden")
      
          
      }
}