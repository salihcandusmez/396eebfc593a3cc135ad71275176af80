import type { Meta, StoryObj } from "@storybook/react";

import ProductList from "./ProductList";

const meta: Meta<typeof ProductList> = {
  title: "Components/ProductList",
  component: ProductList,
  tags: ["autodocs"],
  args: {
    products: [
      {
        name: "The Storytellers Kit – Daniel Schaefer",
        price: "$49.99",
        image: "https://source.unsplash.com/50x50/?product",
        date: "November 3, 2014",
      },
      {
        name: "The Clock of Life in Street Photography",
        price: "$39.99",
        image: "https://source.unsplash.com/50x50/?camera",
        date: "June 12, 2004",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
