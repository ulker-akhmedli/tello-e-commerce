import React from "react";
import "./Products.scss";
import Filter from "./Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";
import Info from "./Info/Info";
import Card from "../../components/Card/Card"
import Pagination from "./Pagination/Pagination";

const Products = () => {
  return (
    <div className="products container">
      <div className="left">
        <Navigation />
        <Filter />
      </div>
      <div className="product-list">
        <Info/>
        <div className="card-list">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Pagination/>
      </div>
    </div>
  );
};

export default Products;
