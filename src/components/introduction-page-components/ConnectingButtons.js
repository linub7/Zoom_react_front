import ConnectingButton from './ConnectingButton';
import { useNavigate } from 'react-router-dom';

const ConnectingButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText={'Join a meeting'}
        onClickHAndler={() => navigate('/join-room')}
      />
      <ConnectingButton
        createRoomButton={true}
        buttonText={'Host a meeting'}
        onClickHAndler={() => navigate('/join-room?host=true')}
      />
    </div>
  );
};

export default ConnectingButtons;
