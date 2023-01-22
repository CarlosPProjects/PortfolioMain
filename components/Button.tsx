import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
