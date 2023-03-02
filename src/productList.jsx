import {React, useContext} from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import SingleCard from './singleCard';
import { UserContext,CartConsumer } from "./App";


 


export default function  ProductList (){
  const  [products, setProducts] = useState();
    const  [limit,setLimit] = useState(3);


  let cart = useContext(UserContext)
    useEffect(() => {
   
        getProducts();
    }, [cart.filter,limit,cart.search,cart.price]);

    

  
  
    

    return (
      
        <CartConsumer>
        {
       
          value => (
          
        
            <div className="productList">
          <div className="prouductList__header">
              Our Products
          </div>
  
          {
        
        products?.length>0 ? (
        
          <>
                 <div className='cardList'>
        {
          
             products.map( (item)=> (
      
     <SingleCard key={item.id} products = {item} />
  
             
            ) )
      }
            </div>,
  
            <div >
              <button className="product__Load" hidden={cart.load} onClick={loadMore}>Load More</button>
            </div>
          </>
            
        ):(
        
          
           <>
        
       
           <div style={{textAlign:'center',fontWeight:"Bold",fontSize:"30px"}}>
            <i className="fa-brands fa-dropbox"></i><br></br>
            Could Not Find AnyThing</div> 

           </>
          
        )
       }
      
  
      </div>
           
        
          )
        }
        </CartConsumer>
      
    );

async function getProducts(){
  let url =""
  
  cart.window ? url =`https://fakestoreapi.com/products?limit=${limit}` : url=`https://fakestoreapi.com/products/${cart.filter}` 

   
  
    let resp = await axios.get(url)
  



    let result=resp.data.filter((items)=>{
   
      
      
      return items.title.replace(/\s/g, "").toLowerCase().includes(cart.search.toLowerCase());
    })

    if(cart.price!=0){
   
     result = result.filter((items)=>{
       
        return items.price <= cart.price;
      })
    }

    if(result?.length>limit){
      cart.setLoad(false)
    }else{
      cart.setLoad(true)
    }
  
    if(!cart.window){
      result = result.slice(0,limit)
    }

   
   

    setProducts(result)

    cart.setNav("navBar__center")

    
}



function loadMore(){
  setLimit(limit+3)

}
}

