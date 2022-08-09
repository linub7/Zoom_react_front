import Actions from '../actions';

const initState = {
  identity: '',
  isRoomHost: false,
  onlyAudio: false,
  roomId: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: payload,
      };

    case Actions.SET_ONLY_AUDIO:
      return {
        ...state,
        onlyAudio: payload,
      };

    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: payload,
      };

    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: payload,
      };

    default:
      return state;
  }
};

export default reducer;
