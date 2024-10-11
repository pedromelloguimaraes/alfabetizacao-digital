// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Curso de Alfabetização Digital</h1>
      </header>
      <main style={contentStyle}>{children}</main>
      <footer style={footerStyle}>
        <p>&copy; 2024 Alfabetização Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Estilos
const layoutStyle = {
  backgroundColor: '#f0f4f8',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const headerStyle = {
  width: '100%',
  backgroundColor: '#283593',
  padding: '20px 0',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  color: '#fff',
  fontSize: '32px',
  margin: 0,
};

const contentStyle = {
  flex: '1',
  padding: '40px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const footerStyle = {
  backgroundColor: '#283593',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

export default Layout;
