// src/components/AudioPlayer.jsx
import { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Auto-play after user clicks anywhere on page
  useEffect(() => {
    const handleFirstClick = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('Auto-play failed, user interaction needed');
          });
      }
      document.removeEventListener('click', handleFirstClick);
    };

    document.addEventListener('click', handleFirstClick);

    return () => {
      document.removeEventListener('click', handleFirstClick);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Audio Element - Hidden */}
      <audio 
        ref={audioRef} 
        loop
        src="/song.mp3"
      />
      
      {/* Music Control Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' 
              : 'bg-gray-800 text-green-400 border border-green-400'
          } hover:scale-110`}
        >
          {isPlaying ? (
            // Pause Icon (When music is playing)
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            // Play Icon (When music is paused)
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;