import io from 'socket.io-client';
import { store } from 'store';
import { setParticipants, setRoomId } from 'store/actions';
import * as webRTCHandler from './webRTCHandler';

const SERVER = process.env.REACT_APP_BACKEND;

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io(SERVER);

  socket.on('connect', () => {
    console.log('connected to server');
    console.log(socket.id);
  });

  socket.on('room-id', (data) => {
    const { roomId } = data;
    store.dispatch(setRoomId(roomId));
  });

  socket.on('room-update', (data) => {
    const { connectedUsers } = data;

    store.dispatch(setParticipants(connectedUsers));
  });

  socket.on('prepare-peer-connection', (data) => {
    const { connectedUserSocketId } = data;

    webRTCHandler.prepareNewPeerConnection(connectedUserSocketId, false);

    // inform the user which just join the room that we have prepared for incoming connection
    socket.emit('connection-init', {
      connectedUserSocketId,
    });
  });

  socket.on('signal-peer', (data) => {
    webRTCHandler.handleSignalingData(data);
  });

  socket.on('initialize-connection', (data) => {
    const { connectedUserSocketId } = data;

    webRTCHandler.prepareNewPeerConnection(connectedUserSocketId, true);
  });

  socket.on('user-disconnected', (data) => {
    webRTCHandler.removePeerConnection(data);
  });
};

export const createNewRoom = (identity) => {
  // emit an event to server that we would like to create a new room
  const data = {
    identity,
  };

  socket.emit('create-new-room', data);
};

export const joinRoom = (identity, roomId) => {
  // emit an event to server that we would like to join a room
  const data = {
    identity,
    roomId,
  };

  socket.emit('join-room', data);
};

export const signalPeerData = (signalData) => {
  socket.emit('signal-peer-data', signalData);
};
