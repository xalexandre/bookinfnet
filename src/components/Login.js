import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simular uma autenticação bem-sucedida
    history.push('/home-logged');  // Navega para a tela "HomeLogada" após o login
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <button className="back-button">←</button>
        <h2>Bookinfet</h2>
      </header>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="bruce@infnet.edu.br"
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="********"
            required 
          />
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
    </div>
  );
}

export default Login;
