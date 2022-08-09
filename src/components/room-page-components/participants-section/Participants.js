import SingleParticipant from './SingleParticipant';

const dummyParticipants = [
  {
    identity: 'Jake',
  },
  {
    identity: 'John',
  },
  {
    identity: 'Jane',
  },
  {
    identity: 'Jimmie',
  },
];

const Participants = () => {
  return (
    <div className="participants_container">
      {dummyParticipants.map((participant, index) => (
        <SingleParticipant
          key={index}
          participant={participant}
          lastItem={dummyParticipants.length === index + 1}
          identity={participant.identity}
        />
      ))}
    </div>
  );
};

export default Participants;
