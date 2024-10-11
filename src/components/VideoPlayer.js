// src/components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, currentStep, onNextStep, onPreviousStep }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (currentStep) {
      playerRef.current.seekTo(currentStep.start); // Vai para o tempo de início do passo atual
    }
  }, [currentStep]);

  return (
    <div style={{ position: 'relative' }}>
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        className="video-player"
        width="100%"
        height="100%"
      />
      
      
    </div>
  );
};

const controlsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.2s',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const buttonDisabledStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#ccc',
  border: 'none',
  borderRadius: '5px',
  cursor: 'not-allowed',
  boxShadow: 'none',
};

export default VideoPlayer;
