import { IProductListItem } from "./ProductListItem.types";
import Image from "next/image";
import React from "react";
import styles from "./ProductListItem.module.scss";

const ProductListItem = ({
  title,
  price,
  stock,
  image,
  vendor,
  productType,
}: IProductListItem) => {
  return (
    <div className={styles["product-list-item"]}>
      <div className={styles["product-list-item__image-container"]}>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div className={styles["product-list-item__content"]}>
        <h3 className={styles["product-list-item__title"]}>{title}</h3>
        <p className={styles["product-list-item__vendor"]}>
          {vendor} - {productType}
        </p>
        <p className={styles["product-list-item__price"]}>
          <span>${price}</span>
        </p>
        <p className={styles["product-list-item__stock"]}>Stock: {stock}</p>
      </div>
    </div>
  );
};

export default ProductListItem;
