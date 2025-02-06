import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    current: 1,
    total: 50,
    pageSize: 10,
    onChange: (page) => console.log(`Page changed to: ${page}`),
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
