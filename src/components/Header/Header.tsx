type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="h-48 min-h-32 max-h-48 w-full bg-skku-green-dark px-30 py 20">
      {/* <div className="flex flex-col items-center justify-center flex-grow bg-white p-4"> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default Header;
