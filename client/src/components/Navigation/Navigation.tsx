import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbar__item">
          Home page
        </Link>

        <Link to="/TickersPage" className="navbar__item">
          Trending tickers page
        </Link>
      </div>
    </nav>
  );
};
