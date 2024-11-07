interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="p-2">
      {children}
    </button>
  );
};

export default IconButton;
