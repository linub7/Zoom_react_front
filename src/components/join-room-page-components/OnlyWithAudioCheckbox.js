import check from 'assets/images/check.png';

const OnlyWithAudioCheckbox = ({ onlyAudio, setOnlyAudioAction }) => {
  const handleConnectionTypeChange = () => setOnlyAudioAction(!onlyAudio);
  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {onlyAudio && (
          <img className="checkbox_image" src={check} alt="check" />
        )}
      </div>
      <p className="checkbox_container_paragraph">Only Audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
