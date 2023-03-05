import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "./singleCard";
import { UserContext } from "./App";

function ProductList() {
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(3);
  const [isLoading, setLoading] = useState(true);

  let cart = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    getData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [cart.filter, cart.search, cart.price]);

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
    setLoading(true);

    //FETCH DATA FROM SERVER
    let resp = "";

    cart.window
      ? (resp = await axios.get(process.env.REACT_APP_BASE_URL))
      : (resp = await axios.get(process.env.REACT_APP_BASE_URL + cart.filter));

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
