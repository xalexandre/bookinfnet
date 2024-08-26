import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');  // Navega para a tela de login
  };

  const handleSignUpClick = () => {
    history.push('/signup');  // Navega para a tela de cadastro
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>Bookinfet</h1>
      </div>
      <div className="buttons">
        <button className="login-button" onClick={handleLoginClick}>Log in</button>
        <button className="signup-button" onClick={handleSignUpClick}>Sign up</button>
      </div>
      <div className="image-container">
        <img src={require('./assets/images/reading-image.png')} alt="Person reading" className="reading-image"/>
      </div>
    </div>
  );
}

export default Home;
