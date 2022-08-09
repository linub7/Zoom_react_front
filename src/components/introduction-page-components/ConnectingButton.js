const ConnectingButton = ({
  createRoomButton = false,
  buttonText,
  onClickHAndler,
}) => {
  const buttonClass = createRoomButton
    ? 'create_room_button'
    : 'join_room_button';
  return (
    <button className={buttonClass} onClick={onClickHAndler}>
      {buttonText}
    </button>
  );
};

export default ConnectingButton;
