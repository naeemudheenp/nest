import { React, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext, CartConsumer } from "./App";
import FormInput from "./formInput";


export default function AddProduct() {
  // const titleRef = React.useRef(null);
  // const priceRef = React.useRef(null);
  // const categoryRef = React.useRef(null);
  // const descRef = React.useRef(null);

  //state used store value from form
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  //context
  let cart = useContext(UserContext);

  //use effect
  useEffect(() => {
    //changing height of form by changing class
    cart.setNav("navBar__center hidden ");
  }, [cart.form, image,title]);

  function Setter(e,type){
    e.preventDefault()
    if(type==="title"){
     
      setTitle(e.target.value)
    }
    else if(type==="price"){
      setPrice(e.target.value)
    }
    else if(type==="Category"){
      setCategory(e.target.value)

    }
    else if(type==="Description"){
      setDescription(e.target.value)
    }
  }

 

  return (
    //accessing values
    <form className={cart.add}>
      <div className="form__header">Add Product</div>
      <div className="form__inputs">
   

        <FormInput  name={"Title"} func={(e)=>{Setter(e,"title")}}  />
        <FormInput  name={"Price"} func={(e)=>{Setter(e,"price")}}  />
        <FormInput  name={"Category"} func={(e)=>{Setter(e,"Category")}}  />
        <FormInput  name={"Description"} func={(e)=>{Setter(e,"Description")}}  />





      
        {/* <input
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        ></input> */}
        {/* <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        ></input> */}
        {/* <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input> */}

        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        ></input>
        <img src={image} height="20%" width="20%" alt="Select Image"></img>
      </div>
      <div className="form__button">
        <button type="button" onClick={Upload}>
          Upload
        </button>
        <button
        //hiding form
          type="button"
          onClick={() => {
            cart.setAdd("form");
          }}
        >
          Close
        </button>
      </div>
    </form>
  );

  async function Upload(e) {
    e.stopPropagation();


    if (
      (title != "") &
      (price != "") &
      (category != "") &
      (description != "")
    ) {
      //uploading the data
      try {
        const response = await axios.post("https://fakestoreapi.com/products", {
          title: title,
          price: price,
          category: category,
          description: description,
        });
        //response from the server
        alert(
          `Form submitted. values ${response.data.title} ,${response.data.price} ,${response.data.category} ,${response.data.description} , `
        );
      } catch (e) {
        alert(e);
      }
    } else {
      alert("Please fill all fields.");
    }
  }
}
