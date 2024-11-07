import React from "react";

interface ButtonProps {
  index: number | string;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  index,
  text,
  selected = false,
  onClick,
}) => {
  return (
    <button
      key={index}
      onClick={onClick}
      className={`px-4 py-2 m-1 rounded-full whitespace-nowrap text-black border-2 border-skku-green-light
          ${selected ? "bg-skku-green-light text-white" : "bg-white "}
          transition duration-200 ease-in-out`}
      style={{ width: "auto", minWidth: "fit-content" }}
    >
      {text}
    </button>
  );
};

export default Button;
