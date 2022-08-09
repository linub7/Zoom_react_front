import { useState } from 'react';
import MicButtonImg from 'assets/icons/mic.svg';
import MicOffButtonImg from 'assets/icons/micOff.svg';
import CommonButton from './CommonButton';

const MicButton = () => {
  const [isMicMuted, setIsMicMuted] = useState(false);
  return (
    <CommonButton
      src={isMicMuted ? MicOffButtonImg : MicButtonImg}
      onClick={() => setIsMicMuted(!isMicMuted)}
      alt="Microphone"
    />
  );
};

export default MicButton;
