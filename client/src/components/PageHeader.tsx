import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/logo.png';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const location = useLocation();

  const shouldDisplayButton = location.pathname === '/';

  return (
    <header className="page-header animate">
      <h1 className="page-title">
        <img className='logo' src={logo} alt={`SearchPilot` + title} />
        {title}
      </h1>
      {shouldDisplayButton && (
        <Link className="button" to="/products/new">
          ✨ Add New Product
        </Link>
      )}
    </header>
  );
};

export default PageHeader;
