import client from 'api/client';

export const getRoomExistHandler = async (roomId) => {
  try {
    const { data } = await client.get(`/room-exist/${roomId}`);
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

