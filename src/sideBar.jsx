import { UserContext, } from "./App";
import {React, useContext} from 'react';

export default function SideBar(){

    function setCategory(category){
        
       if(category==""){
        cart.setFilter("")
        
       }
       else{
        cart.setFilter(`category/${category}`)
     
       }
        

    }

    let cart = useContext(UserContext)
    return(
        <div className="sideBar">
            <div className="sideBar__header">Categories</div>
            <div className="sideBar__radio">
         
            <div>
                <input type="radio" defaultChecked={true} name="radio"  onClick={()=>{
                   setCategory("");
                }}></input>
                <label className="Radio">All
         
                </label>
                </div>

                <div>
                <input type="radio"  name="radio"  onClick={()=>{
                    setCategory("electronics")
                }}></input>
                <label className="Radio">Electronics
         
                </label>
                </div>
                
                <div>
                <input type="radio" name="radio" onClick={()=>{
                    setCategory("jewelery")
                }}></input>
                <label className="container">Jewelery
               
              
                </label>
                </div>
                
                <div>
                <input type="radio" name="radio" onClick={()=>{
                    setCategory(`men's%20clothing`)
                }}></input>
                <label className="container">Men's clothing
               
             
                </label>
                </div>
                
                <div>
                <input type="radio" name="radio" onClick={()=>{
                    
                    setCategory(`women's%20clothing`)
                }}></input>
                <label className="container">Women's clothing
     
                </label>
                </div>
            </div>

            <div className="sideBar__header" style={{marginTop:"4vh"}}>Price Range</div>
            <div className="sideBar__range" style={{marginTop:"2vh"}}>
            1<input type="range" min="1" max="1000"  className="slider" onChange={(e)=>{cart.setPrice(e.target.value)}} ></input>1000
           
            </div>

            <div style={{marginTop:"2vh"}}>  Filter Price  :  &#8377;{cart.price}</div>
           


            <button onClick={()=>{
                    cart.setPrice(0);alert("Filter Cleared.")
                }}>Clear Price Filter</button>
        </div>
    )
}