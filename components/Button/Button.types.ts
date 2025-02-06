export interface IButton {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  onClick?: () => void;
}
