import Button from "../Button/Button";
import { IPagination } from "./Pagination.types";
import RcPagination from "rc-pagination";
import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ current, total, pageSize, onChange }: IPagination) => {
  return (
    <div className={styles["pagination"]}>
      <RcPagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        itemRender={(page, type, element) => {
          if (type === "prev") {
            return (
              <Button
                label="Prev"
                variant="secondary"
                onClick={() => onChange(current - 1)}
              />
            );
          }
          if (type === "next") {
            return (
              <Button
                label="Next"
                variant="primary"
                onClick={() => onChange(current + 1)}
              />
            );
          }
          return (
            <button
              className={`${styles["pagination__item"]} ${
                page === current ? styles["pagination__item--active"] : ""
              }`}
              onClick={() => onChange(page)}
            >
              {page}
            </button>
          );
        }}
      />
    </div>
  );
};

export default Pagination;
