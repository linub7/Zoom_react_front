const Actions = {
  SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
  SET_ONLY_AUDIO: 'SET_ONLY_AUDIO',
  SET_ROOM_ID: 'SET_ROOM_ID',
  SET_IDENTITY: 'SET_IDENTITY',
  SET_SHOW_OVERLAY: 'SET_SHOW_OVERLAY',
  SET_PARTICIPANTS: 'SET_PARTICIPANTS',
};

export const setIsRoomHost = (isRoomHost) => {
  return {
    type: Actions.SET_IS_ROOM_HOST,
    payload: isRoomHost,
  };
};

export const setOnlyAudio = (onlyAudio) => {
  return {
    type: Actions.SET_ONLY_AUDIO,
    payload: onlyAudio,
  };
};

export const setRoomId = (roomId) => {
  return {
    type: Actions.SET_ROOM_ID,
    payload: roomId,
  };
};

export const setIdentity = (identity) => {
  return {
    type: Actions.SET_IDENTITY,
    payload: identity,
  };
};

export const setShowOverlay = (showOverlay) => {
  return {
    type: Actions.SET_SHOW_OVERLAY,
    payload: showOverlay,
  };
};

export const setParticipants = (participants) => {
  return {
    type: Actions.SET_PARTICIPANTS,
    payload: participants,
  };
};

export default Actions;
