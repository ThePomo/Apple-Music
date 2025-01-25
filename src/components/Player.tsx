import React, { useState, useEffect, useRef } from "react";

interface Track {
  id: number;
  title: string;
  artist: { name: string; id: number };
  album: { id: number; cover_medium: string };
  preview: string;
}

const Player: React.FC = () => {
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    fetchSongs();
    const audioElement = audioRef.current;

    audioElement.addEventListener("timeupdate", () => {
      setCurrentTime(audioElement.currentTime);
    });

    audioElement.addEventListener("loadedmetadata", () => {
      setDuration(audioElement.duration);
    });

    audioElement.addEventListener("ended", handleNextTrack);

    return () => {
      audioElement.removeEventListener("timeupdate", () => {});
      audioElement.removeEventListener("loadedmetadata", () => {});
      audioElement.removeEventListener("ended", handleNextTrack);
    };
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/664052151"
      );
      if (!response.ok) throw new Error("Errore nel recupero delle tracce");
      const data = await response.json();
      setPlaylist(data.tracks.data);
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const loadTrack = (index: number) => {
    const track = playlist[index];
    if (track) {
      const audioElement = audioRef.current;
      audioElement.src = track.preview;
      if (isPlaying) {
        audioElement.play();
      }
    }
  };

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % playlist.length);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex(
      (currentTrackIndex - 1 + playlist.length) % playlist.length
    );
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    loadTrack(currentTrackIndex);
  }, [currentTrackIndex]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="player bg-secondary text-white position-sticky bottom-0 py-3">
      {playlist[currentTrackIndex] && (
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
              <img
                src={playlist[currentTrackIndex].album.cover_medium}
                alt="Album Cover"
                className="img-fluid rounded me-3"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <div>
                <h5 className="mb-0">{playlist[currentTrackIndex].title}</h5>
                <p className="mb-0 text-white">
                  {playlist[currentTrackIndex].artist.name}
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <button
                onClick={handlePrevTrack}
                className="btn custom-btn me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-skip-backward"></i>
              </button>
              <button
                onClick={togglePlayPause}
                className="btn custom-btn me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i
                  className={isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill"}
                ></i>
              </button>
              <button
                onClick={handleNextTrack}
                className="btn custom-btn"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-skip-forward"></i>
              </button>
            </div>

            <div className="col-12 col-md-4 d-none d-md-flex justify-content-end align-items-center">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                className="form-range"
                value={volume}
                onChange={handleVolumeChange}
                style={{ width: "150px" }}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-3 d-flex align-item-center justify-content-center">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="form-range mx-3"
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
