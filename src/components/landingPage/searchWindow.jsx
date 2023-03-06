import ProductList from "./productList";
import SideBar from "./sideBar";

import { UserContext } from "../../App";
import { React, useContext, useEffect } from "react";

export default function SearchWindow() {
  let cart = useContext(UserContext);
  useEffect(() => {
    cart.setFilter("");
  }, []);

  return (
    <>
      <div className="searchWindow">
        <SideBar />
        <ProductList />
      </div>
    </>
  );
}
