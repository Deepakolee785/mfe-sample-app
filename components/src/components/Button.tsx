import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      style={{
        border: 0,
        outline: 0,
        background: "purple",
        padding: "0.5rem 1.5rem",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "400",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
