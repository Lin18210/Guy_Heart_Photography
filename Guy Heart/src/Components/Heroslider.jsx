import React from 'react';
import BannerVid from '../assets/VIdeos/GHwithout outro.mp4'

const HeroVideoBanner = () => {
  // Static content configuration
  const content = {
    title: "Thailand Wedding Photographer",
    subtitle: "Capturing Weddings across Thailand since 2015",
    videoSource: BannerVid 
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark Overlay */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source src={content.videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}

export default HeroVideoBanner;