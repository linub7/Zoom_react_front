import { connect } from 'react-redux';
import SingleParticipant from './SingleParticipant';

// const dummyParticipants = [
//   {
//     identity: 'Jake',
//   },
//   {
//     identity: 'John',
//   },
//   {
//     identity: 'Jane',
//   },
//   {
//     identity: 'Jimmie',
//   },
// ];

const Participants = ({ participants }) => {
  return (
    <div className="participants_container">
      {participants?.map((participant, index) => (
        <SingleParticipant
          key={index}
          participant={participant}
          lastItem={participants?.length === index + 1}
          identity={participant.identity}
        />
      ))}
    </div>
  );
};

const mapStateStoreToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateStoreToProps)(Participants);
