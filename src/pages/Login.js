// src/pages/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Bem-vindo, ${username}!`);
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

const loginStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default Login;
