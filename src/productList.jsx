import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "./singleCard";
import { UserContext, } from "./App";

function ProductList() {
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(3);
  const [isLoading, setLoading] = useState(true);

  const [slice, setSlice] = useState([]);
  let cart = useContext(UserContext);

  useEffect(() => {
    getData();
  }, [cart.filter, cart.search, cart.price]);

  useEffect(() => {}, [limit]);

  return (
 

    <div className="productList">
      <div className="prouductList__header">Our Products</div>

      {!isLoading ? (
        products?.length > 0 ? (
          <>
            <div className="cardList">
             
              {products.slice(0, limit).map((item) => (
                <SingleCard key={item.id} products={item} />
              ))}
            </div>
            ,
            <div>
              <button
                className="product__Load"
                hidden={cart.load}
                onClick={loadMore}
              >
                Load More
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                textAlign: "center",
                fontWeight: "Bold",
                fontSize: "30px",
              }}
            >
              <i className="fa-brands fa-dropbox"></i>
              <br></br>
              Could Not Find AnyThing
            </div>
          </>
        )
      ) : (
        <div className="loader">Loading...</div>
      )}
    </div>

    // </CartConsumer>
  );
  async function getData() {

    //FETCH DATA FROM SERVER
    let url = "";

    cart.window
      ? (url = `https://fakestoreapi.com/products`)
      : (url = `https://fakestoreapi.com/products/${cart.filter}`);

    let resp = await axios.get(url);

    setLoading(false);

    //SEARCH THE DATA FROM SERVER 

    let result = resp.data.filter((items) => {
      return items.title
        .replace(/\s/g, "")
        .toLowerCase()
        .includes(cart.search.toLowerCase());
    });

    //FILTER BASED ON PRICE
    if (cart.price != 0) {
      result = result.filter((items) => {
        return items.price <= cart.price;
      });
    }

    setSlice(result);
    if (result?.length > limit) {
      cart.setLoad(false);
    } else {
      cart.setLoad(true);
    }

    setProducts(result);
    cart.setNav("navBar__center");
  }

  function loadMore() {
    //CHANGINNG LIMIT
    setLimit(limit + 3);
  }
}

export default ProductList;
