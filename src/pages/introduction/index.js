import './index.css';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import ConnectingButtons from 'components/introduction-page-components/ConnectingButtons';
import { setIsRoomHost, setOnlyAudio } from 'store/actions';
import { useEffect } from 'react';

const IntroductionPage = ({ setIsRoomHostAction, setOnlyAudioAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
    setOnlyAudioAction(false);
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} alt="" className="introduction_page_image" />
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
    setOnlyAudioAction: (onlyAudio) => dispatch(setOnlyAudio(onlyAudio)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
