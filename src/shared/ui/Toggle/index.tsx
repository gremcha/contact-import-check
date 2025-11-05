import { InputHTMLAttributes } from "react";
import "./index.css";

interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Toggle = ({ label, ...props }: ToggleProps) => (
  <label className="toggleContainer">
    <input type="checkbox" className="inputToggle" {...props} />
    <div className="toggle" />
    <p>{label}</p>
  </label>
);
