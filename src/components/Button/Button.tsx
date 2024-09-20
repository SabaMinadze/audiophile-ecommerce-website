import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="btn9" onClick={onClick}>{title}</button>
  );
};

export default Button;
