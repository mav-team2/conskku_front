import React, { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className }) => {
  return (
    <div className={"flex flex-row items-center flex-grow w-full " + className}>
      {children}
    </div>
  );
};

export default Row;
