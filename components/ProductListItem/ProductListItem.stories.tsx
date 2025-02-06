import type { Meta, StoryObj } from "@storybook/react";

import ProductListItem from "./ProductListItem";

const meta: Meta<typeof ProductListItem> = {
  title: "Components/ProductListItem",
  component: ProductListItem,
  tags: ["autodocs"],
  args: {
    name: "The Storytellers Kit – Daniel Schaefer",
    price: "$49.99",
    image: "https://placehold.co/50x50",
    date: "November 3, 2014",
  },
};

export default meta;
type Story = StoryObj<typeof ProductListItem>;

export const Default: Story = {};
