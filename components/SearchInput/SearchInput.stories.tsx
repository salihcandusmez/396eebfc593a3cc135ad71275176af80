import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Search...",
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "Pre-filled value",
  },
};
