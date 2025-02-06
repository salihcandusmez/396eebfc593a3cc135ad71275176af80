import { IModalProps, IModalRef, ModalSize } from "./Modal.types";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.scss";

const Modal = forwardRef<IModalRef, IModalProps>(
  ({ children, size = "medium" }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    return (
      <div className={styles["modal-overlay"]}>
        <div className={`${styles.modal} ${styles[`modal--${size}`]}`}>
          <button
            className={styles["modal__close"]}
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={24} />
          </button>
          <div className={styles["modal__content"]}>{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
