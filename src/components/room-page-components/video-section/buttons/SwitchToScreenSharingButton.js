import { useState } from 'react';
import CommonButton from './CommonButton';
import SwitchScreenButton from 'assets/icons/switchToScreenSharing.svg';

const SwitchToScreenSharingButton = () => {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  return (
    <CommonButton
      src={SwitchScreenButton}
      alt="Switch Button"
      onClick={() => setIsScreenSharing(!isScreenSharing)}
    />
  );
};

export default SwitchToScreenSharingButton;
