const JoinRoomButton = ({
  buttonText,
  cancelButton = false,
  onClickHandler,
  disabled = false,
}) => {
  const buttonClass = cancelButton
    ? 'join_room_cancel_button'
    : 'join_room_success_button';
  return (
    <button
      disabled={disabled}
      className={buttonClass}
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
};

export default JoinRoomButton;
