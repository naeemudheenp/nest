import {React, useContext} from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";import { UserContext,CartConsumer } from "./App";


import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { upload } from '@testing-library/user-event/dist/upload';
export default function AddProduct(){

    // const titleRef = React.useRef(null);
    // const priceRef = React.useRef(null);
    // const categoryRef = React.useRef(null);
    // const descRef = React.useRef(null);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image,setImage] = useState("");
    let cart = useContext(UserContext)  
    useEffect(() => {
        cart.setNav("navBar__center hidden ")
    }, [cart.form,image]);

   


    return(

        <form  className={cart.add}>
            <div className="form__header">
                Add Product
            </div>
            <div className="form__inputs">
                <input type="text" name='title'placeholder='Title' onChange={(e)=>setTitle(e.target.value)}></input>
              
                <input type="text"  placeholder='Price' onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text"  placeholder='Category' onChange={(e)=>setCategory(e.target.value)}></input>
                <input type="text"  placeholder='Description' onChange={(e)=>setDescription(e.target.value)}></input>

               
                <input type="file" id="myFile" name="filename" onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}}></input>
                <img src={image} height="20%" width="20%" alt="Select Image"></img> 

            </div>
            <div className="form__button">
                
                <button  type="button"  onClick={Upload}>Upload</button>
                <button type="button" onClick={()=>{
 cart.setAdd("form") 
}}>Close</button>
            </div>
        </form>
    );

   async  function Upload(e){
    e.stopPropagation();

    if(title!="" & price != "" & category != "" & description !=""){
        try {
            const response = await axios.post('https://fakestoreapi.com/products', {
                title:title,
                price:price,
                category:category,
                description:description
            });
           
            alert( `Form submitted. values ${response.data.title} ,${response.data.price} ,${response.data.category} ,${response.data.description} , `)
          
          } catch (e) {
            alert(e)
          }
    
    }else{
        alert("Please fill all fields.")
    }
    

    

   






    }
}