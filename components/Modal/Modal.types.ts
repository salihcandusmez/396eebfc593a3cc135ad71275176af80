export type ModalSize = "small" | "medium" | "large" | "full";

export interface IModalProps {
  children: React.ReactNode;
  size?: ModalSize;
}

export interface IModalRef {
  open: () => void;
  close: () => void;
}
