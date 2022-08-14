import { useEffect, useRef } from 'react';

const LocalScreenSharingPreview = ({ stream }) => {
  const localPreviewRef = useRef(null);

  useEffect(() => {
    const video = localPreviewRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <div className="local_screen_share_preview">
      <video muted autoPlay playsInline ref={localPreviewRef} />
    </div>
  );
};

export default LocalScreenSharingPreview;
