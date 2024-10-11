// src/components/VideoGallery.js
import React from 'react';
import { Link } from 'react-router-dom';

const VideoGallery = () => {
  const videos = [
    { id: 1, title: 'Aula 1: Introdução à Alfabetização Digital', thumbnail: 'url_da_imagem1' },
    { id: 2, title: 'Aula 2: Usando a Internet', thumbnail: 'url_da_imagem2' },
    // Adicione mais vídeos conforme necessário
  ];

  return (
    <div style={galleryStyle}>
      {videos.map(video => (
        <div key={video.id} style={cardStyle}>
          <Link to={`/video/${video.id}`}>
            <img src={video.thumbnail} alt={video.title} style={thumbnailStyle} />
            <h3>{video.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cardStyle = {
  margin: '15px',
  textAlign: 'center',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '10px',
  width: '200px',
};

const thumbnailStyle = {
  width: '100%',
  borderRadius: '8px',
};

export default VideoGallery;
