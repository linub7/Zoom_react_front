const JoinRoomInput = ({ placeholder, value, changeHandler }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      className="join_room_input"
    />
  );
};

export default JoinRoomInput;
