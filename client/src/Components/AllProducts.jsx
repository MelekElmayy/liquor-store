import React from "react";
import ProductDetails from "./ProductDetails.jsx";
import "./index.css";

const AllProducts = ({ data, handleDelete,handelUpdate }) => {
  return (
    <div className="allProducts">
      {data.map((e) => {
        return <ProductDetails e={e} handleDelete={handleDelete} handelUpdate={handelUpdate} />;
      })}
    </div>
  );
};


export default AllProducts;
