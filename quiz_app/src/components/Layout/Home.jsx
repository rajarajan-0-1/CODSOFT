import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
    <h1>Welcome to Quiz App</h1>
    <p className="welcome-message">
      <Link to="/login" style={{'text-decoration' : 'none'}} className="nav-link">Login</Link> or 
      <Link to="/register" style={{'text-decoration' : 'none'}} className="nav-link">Register</Link> to start using the app.
      <div className="button-container">
        <Link to="/login" style={{'text-decoration' : 'none'}} className="button">Login</Link>
        <Link to="/register" style={{'text-decoration' : 'none'}} className="button">Register</Link>
      </div>

    </p>
    </div>
  );
}

export default Home;
