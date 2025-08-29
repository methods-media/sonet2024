import React from 'react';

const VideoSection = () => {
  return (
    <div className="relative w-full max-w-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] xl:h-screen">
      <div className="absolute inset-0 w-full h-full px-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/CxOmOqxd9s0?si=jYl_bEuXbShO65U&autoplay=1&mute=1&loop=1&playlist=CxOmOqxd9s0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;
