import React from 'react';
import { useNavigate } from 'react-router-dom';
import './intro.css';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      <h1>Welcome to Finance Management App</h1>
      <p>Track your income and expenses efficiently.</p>
      <button onClick={() => navigate('/login')} className="get-started-btn">
        Get Started
      </button>
    </div>
  );
};

export default IntroPage;
