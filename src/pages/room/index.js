import ChatSection from 'components/room-page-components/chat-section';
import ParticipantsSection from 'components/room-page-components/participants-section';
import RoomLabel from 'components/room-page-components/room-label';
import VideoSection from 'components/room-page-components/video-section';
import { connect } from 'react-redux';
import './index.css';

const RoomPage = ({ roomId }) => {
  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
    </div>
  );
};

const mapStateStoreToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateStoreToProps)(RoomPage);
