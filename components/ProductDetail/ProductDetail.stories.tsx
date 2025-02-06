import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";

import { IModalRef } from "../Modal/Modal.types";
import { IProductListItem } from "../ProductListItem/ProductListItem.types";
import Modal from "../Modal/Modal";
import ProductDetail from "./ProductDetail";

const exampleProduct: IProductListItem = {
  id: 1,
  title: "Example Product",
  price: "99.99",
  stock: 5,
  image: "https://placehold.co/600x400",
  vendor: "Example Vendor",
  productType: "Skis",
};

const meta: Meta<typeof ProductDetail> = {
  title: "Components/ProductDetailModal",
  component: ProductDetail,
  args: {
    product: exampleProduct,
  },
};

export default meta;
type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  render: (args) => {
    const modalRef = useRef<IModalRef>(null);

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button
          onClick={() => modalRef.current?.open()}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          Open Product Detail
        </button>

        <Modal ref={modalRef}>
          <ProductDetail {...args} />
        </Modal>
      </div>
    );
  },
};
