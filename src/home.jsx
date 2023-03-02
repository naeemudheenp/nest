
import MainScreen from './mainScreen';
import ProductList from './productList';
import React from 'react';
import NavBar from "./navBar";      


export default function HomeWindow(){
   
    return(
        <>
     
        <MainScreen />
        <ProductList />
        </>
    );
}