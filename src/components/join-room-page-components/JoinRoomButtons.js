import JoinRoomButton from './JoinRoomButton';
import { useNavigate } from 'react-router-dom';

const JoinRoomButtons = ({
  handleJoinRoom,
  isRoomHost,
  joinRoomDisabled,
  createRoomDisabled,
}) => {
  const navigate = useNavigate();
  const successButtonText = isRoomHost ? 'Host' : 'Join';
  const pushToIntroductionPage = () => navigate('/');
  return (
    <div className="join_room_buttons_container">
      <JoinRoomButton
        buttonText={'Cancel'}
        cancelButton={true}
        onClickHandler={pushToIntroductionPage}
      />

      <JoinRoomButton
        disabled={isRoomHost ? createRoomDisabled : joinRoomDisabled}
        buttonText={successButtonText}
        onClickHandler={handleJoinRoom}
      />
    </div>
  );
};

export default JoinRoomButtons;
