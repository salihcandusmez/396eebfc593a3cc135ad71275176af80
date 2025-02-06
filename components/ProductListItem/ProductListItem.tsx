import { IProductListItem } from "./ProductListItem.types";
import Image from "next/image";
import React from "react";
import styles from "./ProductListItem.module.scss";

const ProductListItem = ({
  name,
  price,
  image,
  date,
  onClick,
}: IProductListItem) => {
  return (
    <div className={styles["product-list-item"]} onClick={onClick}>
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className={styles["product-list-item__image"]}
      />
      <div className={styles["product-list-item__content"]}>
        <span className={styles["product-list-item__name"]}>{name}</span>
        <span className={styles["product-list-item__details"]}>
          <span>{price}</span>
          {date && <span>{date}</span>}
        </span>
      </div>
    </div>
  );
};

export default ProductListItem;
