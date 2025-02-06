import type { Meta, StoryObj } from "@storybook/react";

import ProductList from "./ProductList";

const meta: Meta<typeof ProductList> = {
  title: "Components/ProductList",
  component: ProductList,
  tags: ["autodocs"],
  args: {
    products: [
      {
        id: 1,
        title: "Avenger 82 Skis",
        price: "499.00",
        stock: 10,
        image: "https://source.unsplash.com/100x100/?ski",
        vendor: "Nordica",
        productType: "Skis",
      },
      {
        id: 2,
        title: "Speedmachine 100 Boots",
        price: "299.00",
        stock: 5,
        image: "https://source.unsplash.com/100x100/?boots",
        vendor: "Nordica",
        productType: "Ski Boots",
      },
      {
        id: 3,
        title: "Elite Goggles",
        price: "99.00",
        stock: 0,
        image: "https://source.unsplash.com/100x100/?goggles",
        vendor: "Oakley",
        productType: "Goggles",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
export const EmptyList: Story = {
  args: {
    products: [],
  },
};
