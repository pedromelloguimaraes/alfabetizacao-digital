// src/pages/VideoPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import videoData from '../data/videoData'; // Importando os dados dos vídeos

const VideoPage = () => {
  const { id } = useParams();
  const video = videoData[id];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  console.log(video)

  const handleNextStep = () => {
    if (currentStepIndex < video.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const currentStep = video.steps[currentStepIndex];

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>{video.title}</h2>
      
      {/* Exibindo o passo atual no topo */}
      <div style={currentStepStyle}>
        <strong>Passo atual:</strong> {currentStep.description} ({currentStep.start} - {currentStep.end} segundos)
      </div>

      {/* Exibindo a lista de passos */}
      <div style={stepsContainerStyle}>
        <h3>Passos da Aula:</h3>
        <ul style={stepsListStyle}>
          {video.steps.map((step, index) => (
            <li key={index} style={{ fontWeight: currentStepIndex === index ? 'bold' : 'normal' }}>
              Passo {index + 1}: {step.description} ({step.start} - {step.end} segundos)
            </li>
          ))}
        </ul>
      </div>

      <div style={playerContainerStyle}>
        <VideoPlayer
          url={video.url}
          currentStep={currentStep} // Passa o passo atual
          steps={video.steps} // Passa todos os passos
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
};

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: '20px auto',
};

const titleStyle = {
  marginBottom: '20px',
  fontSize: '28px',
  textAlign: 'center',
  color: '#333',
  fontWeight: 'bold',
};

const currentStepStyle = {
  marginBottom: '20px',
  fontSize: '18px',
  color: '#007BFF',
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#E0F7FA',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const stepsContainerStyle = {
  marginBottom: '20px',
  width: '100%',
  textAlign: 'left',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const stepsListStyle = {
  listStyleType: 'none', // Remove os marcadores
  padding: '0',
  margin: '0',
};

const playerContainerStyle = {
  width: '100%',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

export default VideoPage;
