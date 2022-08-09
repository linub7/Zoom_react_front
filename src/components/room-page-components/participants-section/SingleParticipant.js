const SingleParticipant = ({ identity, lastItem, participant }) => {
  return (
    <>
      <p className="participants_paragraph">{identity}</p>
      {!lastItem && <span className="participants_separator_line"></span>}
    </>
  );
};

export default SingleParticipant;
