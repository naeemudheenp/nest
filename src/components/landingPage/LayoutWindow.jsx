import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./navBar";

import AddProduct from "../formPage/addProduct";
import { UserContext } from "../../App";
import Footer from "./footer";

const Layout = () => {
  const cart = useContext(UserContext);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />

      <div>
        <AddProduct />
        <div
          onClick={() => {
            cart.setAdd("form height");
          }}
          className="float"
        >
          <i className="fa fa-plus my-float"></i>
        </div>
      </div>
    </>
  );
};

export default Layout;
