import './index.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setIsRoomHost } from 'store/actions';
import JoinRoomTitle from 'components/join-room-page-components/JoinRoomTitle';
import JoinRoomContent from 'components/join-room-page-components/JoinRoomContent';

const JoinRoomPage = ({ setIsRoomHostAction, isRoomHost }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const isHostTrue = searchParams.get('host');

  useEffect(() => {
    if (isHostTrue) {
      setIsRoomHostAction(true);
    }
  }, []);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent isRoomHost={isRoomHost} />
      </div>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
