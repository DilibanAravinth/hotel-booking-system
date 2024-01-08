import React from "react";

interface NavbarProps {
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 w-full z-50">
      <div className="container mx-auto">
        <div className="text-white font-bold text-xl">{companyName}</div>
      </div>
    </nav>
  );
};

export default Navbar;
