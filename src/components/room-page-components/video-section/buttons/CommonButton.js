const CommonButton = ({ src, alt, onClick }) => {
  return (
    <div className="video_button_container">
      <img
        src={src}
        alt={alt}
        className={'video_button_image'}
        onClick={onClick}
      />
    </div>
  );
};

export default CommonButton;
