// using tailwindcss

import React from "react";

type BaseContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const BaseContainer: React.FC<BaseContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={"flex items-center justify-center h-screen" + className}>
      {children}
    </div>
  );
};

export default BaseContainer;
