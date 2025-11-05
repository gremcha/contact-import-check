import { MouseEventHandler, PropsWithChildren } from "react";
import "./index.css";

interface FormBlockProps extends PropsWithChildren {
  label: string;
  button?: {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick: MouseEventHandler<HTMLButtonElement>;
  };
}

export const FormBlock = ({ label, button, children }: FormBlockProps) => (
  <div className="formBlock">
    <h2 className="label">{label}</h2>
    {children}
    {button && (
      <button onClick={button.onClick} type={button.type}>
        {button.label}{" "}
      </button>
    )}
  </div>
);
