import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Lógica de cadastro aqui
      console.log('Name:', name, 'Email:', email, 'Password:', password);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <button className="back-button">←</button>
        <h2>Bookinfet</h2>
      </header>
      <form className="signup-form" onSubmit={handleSignUp}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Bruce"
            required 
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="********"
            required 
          />
        </div>
        <button type="submit" className="signup-button">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
