import React from "react";
import Row from "../Row/Row";

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Row className="h-32 min-h-20 max-h-40 px-8 py-6 bg-white justify-between">
      {children}
    </Row>
  );
};

export default Footer;
