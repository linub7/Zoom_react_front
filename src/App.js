import IntroductionPage from 'pages/introduction';
import JoinRoomPage from 'pages/join-room';
import NotFound from 'pages/not-found';
import RoomPage from 'pages/room';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { useEffect } from 'react';
import { connectWithSocketIOServer } from 'webRTC/wss';

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/join-room" element={<JoinRoomPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
