import { store } from 'store';
import { setShowOverlay } from 'store/actions';
import * as wss from 'webRTC/wss';
import Peer from 'simple-peer';

const defaultConstraints = {
  audio: true,
  video: {
    width: '480',
    height: '360',
  },
};

let localStream;
let peers = {};
let streams = [];

const getConfiguration = () => {
  return {
    iceServers: [
      {
        urls: 'stun:stun.l.google.com:19302',
      },
    ],
  };
};

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

export const prepareNewPeerConnection = (
  connectedUserSocketId,
  isInitiator
) => {
  const configuration = getConfiguration();

  // when we pass isInitiator as true,
  //it means that the peer connection will start immediately try to connect with that second user
  peers[connectedUserSocketId] = new Peer({
    initiator: isInitiator,
    stream: localStream,
    config: configuration,
  });

  peers[connectedUserSocketId].on('signal', (data) => {
    // webRTC offer, webRTC Answer (SDP information) , ice candidate
    // send the signal to the server
    const signalData = {
      connectedUserSocketId,
      signal: data,
    };

    wss.signalPeerData(signalData);
  });

  // when we receive a stream from the other peer
  peers[connectedUserSocketId].on('stream', (stream) => {
    console.log('new stream received');
    addStream(stream, connectedUserSocketId);
    streams = [...streams, stream];
  });
};

export const handleSignalingData = (data) => {
  // add signaling data to the peer connection
  peers[data.connectedUserSocketId].signal(data.signal);
};

export const removePeerConnection = (data) => {
  const { socketId } = data;
  // we assigned id to the video Container -> line 124, 125
  const videoContainer = document.getElementById(socketId);
  // we assigned id to the video element -> line 130
  const videoElement = document.getElementById(`${socketId}-video`);

  if (videoContainer && videoElement) {
    const tracks = videoElement.srcObject.getTracks();
    tracks.forEach((track) => track.stop());

    videoElement.srcObject = null;
    videoContainer.removeChild(videoElement);

    videoContainer.parentNode.removeChild(videoContainer);

    if (peers[socketId]) {
      peers[socketId].destroy();
    }
    delete peers[socketId];
  }
};

// ----------------- UI Videos ------------------- //
const showLocalVideoPreview = (stream) => {
  // show local video preview
  const videosContainer = document.getElementById('videos_portal');
  videosContainer.classList.add('videos_portal_styles');

  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video_track_container');

  const videoElement = document.createElement('video');
  videoElement.autoplay = true;
  videoElement.muted = true;
  videoElement.srcObject = stream;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };

  videoContainer.appendChild(videoElement);

  videosContainer.appendChild(videoContainer);
};

const addStream = (stream, connectedUserSocketId) => {
  // display incoming stream
  const videosContainer = document.getElementById('videos_portal');

  const videoContainer = document.createElement('div');
  videoContainer.id = connectedUserSocketId;
  videoContainer.classList.add('video_track_container');
  const videoElement = document.createElement('video');
  videoElement.autoplay = true;
  videoElement.srcObject = stream;
  videoElement.id = `${connectedUserSocketId}-video`;

  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };

  // videoElement.addEventListener('click', () => {
  //   if (videoElement.classList.contains('full_screen')) {
  //     videoElement.classList.remove('full_screen');
  //   } else {
  //     videoElement.classList.add('full_screen');
  //   }
  // });

  videoContainer.appendChild(videoElement);
  videosContainer.appendChild(videoContainer);
};

// ----------------- ‌Buttons Logic ------------------- //
export const toggleMic = (isMuted) => {
  localStream.getAudioTracks()[0].enabled = isMuted ? true : false;
};

export const toggleCamera = (isEnable) => {
  localStream.getVideoTracks()[0].enabled = isEnable ? true : false;
};

export const toggleScreenShare = (
  isScreenSharing,
  screenSharingStream = null
) => {
  if (isScreenSharing) {
    switchVideoTracks(localStream);
  } else {
    switchVideoTracks(screenSharingStream);
  }
};

const switchVideoTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
