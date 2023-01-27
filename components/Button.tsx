import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md ring-1 hover:bg-gray-300 hover:text-black ring-gray-300 shadow-gray-300 shadow-lg duration-700 `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
