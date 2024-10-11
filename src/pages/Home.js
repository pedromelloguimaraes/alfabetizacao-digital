import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import videoData from '../data/videoData';

const HomePage = () => {
  return (
    <Layout>
      <div style={homeContentStyle}>
        <h2 style={homeTitleStyle}>Bem-vindo ao Curso de Alfabetização Digital</h2>
        <p style={homeTextStyle}>
          Aqui você encontrará uma série de aulas em vídeo para aprender a utilizar as principais
          ferramentas digitais no seu dia a dia. Escolha uma aula e comece agora mesmo!
        </p>
        <div style={classListStyle}>
          {Object.values(videoData).map((video) => {
            if (!video || !video.url) {
              console.error(`Vídeo não encontrado ou sem URL: ${video}`);
              return null;
            }

            const { id, title, description, url } = video;
            return (
              <Link to={`/video/${id}`} style={linkStyle} key={id}>
                <div style={cardStyle}>
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{title}</h3>
                    <p style={cardDescriptionStyle}>{description}</p>
                  </div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAaiGUKPv3UgKSfCvsh2lZqeL2zj7MADXeA&s"/>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

// Estilos e exportação permanecem os mesmos...


// Estilos
const homeContentStyle = {
  width: '80%',
  maxWidth: '900px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  padding: '40px',
  textAlign: 'center',
};

const homeTitleStyle = {
  fontSize: '28px',
  color: '#283593',
  marginBottom: '20px',
};

const homeTextStyle = {
  fontSize: '18px',
  color: '#555',
  marginBottom: '40px',
};

const classListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  marginBottom: '20px',
  width: '100%',
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#f7f9fc',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  textAlign: 'left',
  transition: 'transform 0.2s ease-in-out',
};

const cardContentStyle = {
  flex: 1,
};

const cardTitleStyle = {
  fontSize: '20px',
  color: '#283593',
  marginBottom: '10px',
};

const cardDescriptionStyle = {
  fontSize: '16px',
  color: '#555',
};

// Adiciona transformação ao passar o mouse sobre o cartão
cardStyle[':hover'] = {
  transform: 'scale(1.02)',
};

export default HomePage;
