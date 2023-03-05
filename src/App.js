import React from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import SinglePage from './singlePage';
import Layout from './LayoutWindow'
import './App.css';
import './navBar'

import './css/main.css'

import { useState, } from "react";

import HomeWindow from './home';
import SearchWindow from './searchWindow';
import CartWindow from './cartWindow';
import AddProduct from './addProduct';
export const  UserContext = React.createContext();
export const CartConsumer = UserContext.Consumer;



         

export default function App() {
  const [cart, setCart] = useState([]);
 
  const [currentWindow,setWindow] = useState(true);
  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("");
  const [currentId,setId] = useState(1);
  const [nav,setNav]  = useState("navBar__center")
  const [total,setTotal] = useState(0)
  const [add,setAdd] = useState("form")
  const [price,setPrice] = useState(0)
  const [load,setLoad] = useState(false)







return (

<UserContext.Provider value={{
        "cart":cart,
        "setCart" : setCart,
        "currentWindow":currentWindow,
        "setWindow":setWindow,
        "search":search,
        "setSearch":setSearch,
        "filter":filter,
        "setFilter":setFilter,
        "currentId":currentId,
         "setId":setId,
         "nav": nav,
         "setNav":setNav,
         "total":total,
         "setTotal":setTotal,
         "add" : add,
         "setAdd":setAdd,
         "price":price,
         "setPrice":setPrice,
         "load":load,
         "setLoad":setLoad

        
       }}>
       
  

       <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ currentWindow ? (<HomeWindow />) : (<SearchWindow />)} />
          <Route path="/product/:id" element={<SinglePage />} />
          <Route path="/cart" element={<CartWindow />} />
          <Route path="/add" element={<AddProduct />} />

         
        </Route>
      </Routes>
    </Router>

       

  


 



 </UserContext.Provider> 


);



  

}



