import JoinRoomInput from './JoinRoomInput';

const JoinRoomInputs = ({
  roomIdValue,
  setRoomIdValue,
  nameValue,
  setNameValue,
  isRoomHost,
}) => {
  const handleRoomIdValueChange = (e) => setRoomIdValue(e.target.value);
  const handleNameValueChange = (e) => setNameValue(e.target.value);

  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && (
        <JoinRoomInput
          placeholder={'Enter meeting Id'}
          value={roomIdValue}
          changeHandler={handleRoomIdValueChange}
        />
      )}

      <JoinRoomInput
        placeholder={'Enter your name'}
        value={nameValue}
        changeHandler={handleNameValueChange}
      />
    </div>
  );
};

export default JoinRoomInputs;
