import { IProductList } from "./ProductList.types";
import ProductListItem from "../ProductListItem/ProductListItem";
import React from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }: IProductList) => {
  return (
    <div className={styles["product-list"]}>
      {products.map((product) => (
        <ProductListItem key={product.name} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
