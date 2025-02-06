import React, { useRef } from "react";

import { IModalRef } from "../Modal/Modal.types";
import { IProductListItem } from "./ProductListItem.types";
import Image from "next/image";
import Modal from "../Modal/Modal";
import ProductDetail from "../ProductDetail/ProductDetail";
import styles from "./ProductListItem.module.scss";

const ProductListItem = ({
  id,
  title,
  price,
  stock,
  image,
  vendor,
  productType,
}: IProductListItem) => {
  const modalRef = useRef<IModalRef>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <div className={styles["product-list-item"]} onClick={handleOpenModal}>
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
      <Modal ref={modalRef} size="medium">
        <ProductDetail
          product={{
            id,
            title,
            price,
            stock,
            image,
            vendor,
            productType,
          }}
        />
      </Modal>
    </>
  );
};

export default ProductListItem;
