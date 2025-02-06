import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";

import { IModalRef } from "./Modal.types";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    size: "medium",
  },
  render: (args) => {
    const modalRef = useRef<IModalRef>(null);

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button
          onClick={() => modalRef.current?.open()}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          Open Modal
        </button>
        <Modal ref={modalRef} {...args}>
          <h2 style={{ marginBottom: "10px" }}>Modal Title</h2>
          <p>This is a simple modal example in Storybook.</p>
        </Modal>
      </div>
    );
  },
};
