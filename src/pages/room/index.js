import ChatSection from 'components/room-page-components/chat-section';
import Overlay from 'components/room-page-components/Overlay';
import ParticipantsSection from 'components/room-page-components/participants-section';
import RoomLabel from 'components/room-page-components/room-label';
import VideoSection from 'components/room-page-components/video-section';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as webRTCHandler from 'webRTC/webRTCHandler';
import './index.css';

const RoomPage = ({ roomId, identity, isRoomHost, showOverlay }) => {
  useEffect(() => {
    webRTCHandler.getLocalPreviewAndInitRoomLocation(
      isRoomHost,
      identity,
      roomId
    );
  }, []);

  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStateStoreToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateStoreToProps)(RoomPage);
