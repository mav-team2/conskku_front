interface ColumnProps {
  children: React.ReactNode;
  align?: "center" | "start" | "end";
  className?: string;
}

const Column: React.FC<ColumnProps> = ({ children, align, className }) => {
  const alignClass = `items-${align} justify-${align}`;

  return (
    <div className={"flex flex-col " + alignClass + " " + className}>
      {children}
    </div>
  );
};

export default Column;
