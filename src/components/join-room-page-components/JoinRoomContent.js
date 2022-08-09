import { getRoomExistHandler } from 'api/room';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIdentity, setOnlyAudio, setRoomId } from 'store/actions';
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
import JoinRoomInputs from './JoinRoomInputs';
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';

const JoinRoomContent = ({
  isRoomHost,
  onlyAudio,
  setOnlyAudioAction,
  setRoomIdAction,
  setIdentityAction,
}) => {
  const [roomIdValue, setRoomIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleJoinRoom = async () => {
    setIdentityAction(nameValue);
    if (isRoomHost) {
      await createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    if (!roomIdValue) return toast.error('Room ID is required');
    if (!nameValue) return toast.error('Name is required');
    const { data, err } = await getRoomExistHandler(roomIdValue);
    if (err) {
      console.log(err);
      return;
    }

    if (data?.roomExists) {
      if (data?.full) {
        setErrorMessage('Meeting is full.Please try again later.');
      } else {
        // save in our redux store meeting id which was provided by user which would join the room
        setRoomIdAction(roomIdValue);
        // join room
        navigate('/room');
      }
    } else {
      setErrorMessage('Meeting does not exist.Check your meeting id');
    }
    console.log(data);
  };

  const createRoom = async () => {
    if (!nameValue) return toast.error('Name is required');
    navigate('/room');
  };
  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        onlyAudio={onlyAudio}
        setOnlyAudioAction={setOnlyAudioAction}
      />

      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
        // joinRoomDisabled={!roomIdValue || !nameValue}
        // createRoomDisabled={!nameValue}
      />
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setOnlyAudioAction: (onlyAudio) => dispatch(setOnlyAudio(onlyAudio)),
    setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);
