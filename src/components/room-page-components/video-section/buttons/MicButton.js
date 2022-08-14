import { useState } from 'react';
import MicButtonImg from 'assets/icons/mic.svg';
import MicOffButtonImg from 'assets/icons/micOff.svg';
import CommonButton from './CommonButton';
import * as webRTCHandler from 'webRTC/webRTCHandler';

const MicButton = () => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleClickMuteButton = () => {
    webRTCHandler.toggleMic(isMicMuted);

    setIsMicMuted(!isMicMuted);
  };
  return (
    <CommonButton
      src={isMicMuted ? MicOffButtonImg : MicButtonImg}
      onClick={handleClickMuteButton}
      alt="Microphone"
    />
  );
};

export default MicButton;
