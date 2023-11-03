import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import videoSrc from '../videos/Black.mp4';

const FullscreenVideo = ({ onInteraction }) => {
  // Using a ref for the video element to add and remove event listeners
  const videoRef = useRef(null);

  // This state will control the display of the video
  const [isVideoVisible, setVideoVisible] = useState(true);

  // We will animate the opacity of the video
  const fade = useSpring({
    to: { opacity: isVideoVisible ? 1 : 0 },
    from: { opacity: 0 },
  });

  const handleInteraction = () => {
    // Run any additional logic you want when the video is interacted with
    if (onInteraction) onInteraction();

    // Set the video to not be visible
    setVideoVisible(false);
  };

  // This effect sets up event listeners for desktop and mobile
  useEffect(() => {
    const videoEl = videoRef.current;

    // If the video element doesn't exist, don't do anything
    if (!videoEl) return;

    // Add both mouse and touch event listeners
    videoEl.addEventListener('mousemove', handleInteraction);
    videoEl.addEventListener('touchstart', handleInteraction);

    // Cleanup event listeners on component unmount
    return () => {
      videoEl.removeEventListener('mousemove', handleInteraction);
      videoEl.removeEventListener('touchstart', handleInteraction);
    };
  }, [videoRef]); // Dependency array includes videoRef, it will re-run if this ref changes

  // If video is not visible, don't render the component
  if (!isVideoVisible) {
    return null;
  }

  return (
    <animated.div style={fade}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Make sure video is behind other content
        }}
      />
    </animated.div>
  );
};

export default FullscreenVideo;
