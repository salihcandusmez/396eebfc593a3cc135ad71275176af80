import type { Meta, StoryObj } from "@storybook/react";

import ProductListItem from "./ProductListItem";

const meta: Meta<typeof ProductListItem> = {
  title: "Components/ProductListItem",
  component: ProductListItem,
  tags: ["autodocs"],
  args: {
    title: "Avenger 82 Skis",
    price: "499.00",
    stock: 10,
    image: "https://source.unsplash.com/100x100/?ski",
    vendor: "Nordica",
    productType: "Skis",
  },
};

export default meta;
type Story = StoryObj<typeof ProductListItem>;

export const Default: Story = {};

export const OutOfStock: Story = {
  args: {
    stock: 0,
  },
};
