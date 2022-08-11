import { store } from 'store';
import { setShowOverlay } from 'store/actions';
import * as wss from 'webRTC/wss';

const defaultConstraints = {
  audio: true,
  video: false,
};

let localStream;

export const getLocalPreviewAndInitRoomLocation = async (
  isRoomHost,
  identity,
  roomId = null
) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(
      defaultConstraints
    );
    localStream = stream;
    showLocalVideoPreview(localStream);

    // dispatch an action to hide overlay
    store.dispatch(setShowOverlay(false));
    isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity, roomId);
  } catch (error) {
    console.log(
      'an error occurred when trying to get an access to local stream'
    );
    console.log(error);
  }
};

const showLocalVideoPreview = (stream) => {
  // show local video preview
};
