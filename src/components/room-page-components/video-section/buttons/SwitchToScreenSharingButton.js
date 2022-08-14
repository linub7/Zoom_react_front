import { useState } from 'react';
import CommonButton from './CommonButton';
import SwitchScreenButton from 'assets/icons/switchToScreenSharing.svg';
import LocalScreenSharingPreview from '../LocalScreenSharingPreview';
import * as webRTCHandler from 'webRTC/webRTCHandler';

const constraints = {
  audio: false,
  video: true,
};

const SwitchToScreenSharingButton = () => {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenSharingStream, setScreenSharingStream] = useState(null);

  const handleClickScreenSharingButton = async () => {
    if (!isScreenSharing) {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);

        setScreenSharingStream(stream);
      } catch (error) {
        console.log(
          'Error occurred when trying to get access tp screen share stream',
          error
        );
      }

      if (stream) {
        setScreenSharingStream(stream);

        webRTCHandler.toggleScreenShare(isScreenSharing, stream);
        setIsScreenSharing(true);

        // execute here function to switch the video track which we are sending to other user
      }
    } else {
      webRTCHandler.toggleScreenShare(isScreenSharing);
      // switch for video track from camera
      setIsScreenSharing(false);

      // stop screen share stream
      screenSharingStream.getTracks().forEach((track) => track.stop());
      setScreenSharingStream(null);
    }
  };
  return (
    <>
      <CommonButton
        src={SwitchScreenButton}
        alt="Switch Button"
        onClick={handleClickScreenSharingButton}
      />
      {isScreenSharing && (
        <LocalScreenSharingPreview stream={screenSharingStream} />
      )}
    </>
  );
};

export default SwitchToScreenSharingButton;
