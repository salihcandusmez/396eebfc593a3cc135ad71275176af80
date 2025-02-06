import { IButton } from "./Button.types";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, variant = "primary", onClick }: IButton) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
