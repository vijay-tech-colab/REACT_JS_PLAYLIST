import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useFetchData from "../hooks/useFetchData";
const Product = () => {
  const {data : products , error , loading} = useFetchData('https://fakestoreapi.com/products');
  if(loading){
    return <>
      <Loading/>
    </>
  }
  if(error){
    return <>
      <h1 style={{color : "red"}}>{error}</h1>
    </>
  }
  return (
    <div className="container">
      <h2 className="title">Product List</h2>
      <ul className="list">
        {products.map((product, index) => (
          <>
            <li key={index} className="list-item">
              {product.category}
            </li>
            <p>{product.description}</p>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Product;
