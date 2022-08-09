import { useState } from 'react';
import CommonButton from './CommonButton';
import CameraButtonImg from 'assets/icons/camera.svg';
import CameraOffButtonImg from 'assets/icons/cameraOff.svg';

const CameraButton = () => {
  const [isCameraOff, setIsCameraOff] = useState(false);
  return (
    <CommonButton
      src={isCameraOff ? CameraOffButtonImg : CameraButtonImg}
      onClick={() => setIsCameraOff(!isCameraOff)}
      alt="Camera"
    />
  );
};

export default CameraButton;
