import { useState } from 'react';
import CommonButton from './CommonButton';
import CameraButtonImg from 'assets/icons/camera.svg';
import CameraOffButtonImg from 'assets/icons/cameraOff.svg';
import * as webRTCHandler from 'webRTC/webRTCHandler';

const CameraButton = () => {
  const [isCameraOff, setIsCameraOff] = useState(false);

  const handleClickCameraButton = () => {
    webRTCHandler.toggleCamera(isCameraOff);
    setIsCameraOff(!isCameraOff);
  };
  return (
    <CommonButton
      src={isCameraOff ? CameraOffButtonImg : CameraButtonImg}
      onClick={handleClickCameraButton}
      alt="Camera"
    />
  );
};

export default CameraButton;
