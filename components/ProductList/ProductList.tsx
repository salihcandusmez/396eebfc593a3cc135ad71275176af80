import { IProductListItem } from "../ProductListItem/ProductListItem.types";
import ProductListItem from "../ProductListItem/ProductListItem";
import React from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }: { products: IProductListItem[] }) => {
  return (
    <div className={styles["product-list"]}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductListItem key={product.id} {...product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
