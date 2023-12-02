import React, { useState, useEffect } from 'react';

const AudioPluginsScreen = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    { id: '1', title: 'Audio Plugins 1', url: 'https://ia800401.us.archive.org/24/items/signofthecross_1309_librivox/signofthecross_01_gaume_128kb.mp3' },
    { id: '2', title: 'Audio Plugins 2', url: 'https://ia800401.us.archive.org/24/items/signofthecross_1309_librivox/signofthecross_02_gaume_128kb.mp3' },
    { id: '3', title: 'Audio Plugins 3', url: 'https://ia800401.us.archive.org/24/items/signofthecross_1309_librivox/signofthecross_03_gaume_128kb.mp3' },
    { id: '4', title: 'Audio Plugins 4', url: 'https://ia600401.us.archive.org/24/items/signofthecross_1309_librivox/signofthecross_04_gaume_128kb.mp3' },
    { id: '5', title: 'Audio Plugins 5', url: 'https://ia600401.us.archive.org/24/items/signofthecross_1309_librivox/signofthecross_05_gaume_128kb.mp3' },
    
  ];

  useEffect(() => {
    const audioElement = document.getElementById('audio');

   
    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);

     
      return () => {
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, []);

  const handlePlayPause = () => {
    const audioElement = document.getElementById('audio');

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSongSelect = (song) => {
    const audioElement = document.getElementById('audio');

    if (audioElement) {
      audioElement.src = song.url;
      audioElement.load();
      audioElement.play();
      setSelectedSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <h1>Audio Plugins</h1>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <audio id="audio" controls style={{ display: 'block', marginTop: '20px' }}>
        Your browser does not support the audio element.
      </audio>
      <div>
        {songs.map((song) => (
          <div key={song.id} onClick={() => handleSongSelect(song)} style={{ cursor: 'pointer' }}>
            {song.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPluginsScreen;
