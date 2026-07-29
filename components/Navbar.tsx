import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="floating-nav">
      <a href="#" className="logo">
        Palani Durai
      </a>
      <button className="menu-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
