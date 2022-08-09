const Actions = {
  SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
  SET_ONLY_AUDIO: 'SET_ONLY_AUDIO',
  SET_ROOM_ID: 'SET_ROOM_ID',
  SET_IDENTITY: 'SET_IDENTITY',
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

export default Actions;
