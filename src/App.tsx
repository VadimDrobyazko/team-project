import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './style/main.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
