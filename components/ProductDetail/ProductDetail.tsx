import { IProductDetail } from "./ProductDetail.types";
import Image from "next/image";
import React from "react";
import styles from "./ProductDetail.module.scss";

const ProductDetail = ({ product }: IProductDetail) => {
  return (
    <div className={styles["product-detail"]}>
      <Image
        priority
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className={styles["product-detail__image"]}
      />
      <div className={styles["product-detail__info"]}>
        <h2 className={styles["product-detail__title"]}>{product.title}</h2>
        <p className={styles["product-detail__vendor"]}>
          {product.vendor} - {product.productType}
        </p>
        <p className={styles["product-detail__price"]}>
          Price: <strong>${product.price}</strong>
        </p>
        <p className={styles["product-detail__stock"]}>
          Stock: <strong>{product.stock}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
