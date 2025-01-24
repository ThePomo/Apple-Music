import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

const NewReleases: React.FC = () => {
  const [releases, setReleases] = useState<any[]>([]);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=linkin+park'
        );
        const data = await response.json();
        setReleases(data.data.slice(0, 10)); 
      } catch (error) {
        console.error('Errore durante il fetch delle nuove uscite:', error);
      }
    };

    fetchReleases();
  }, []);

  return (
    <div className="new-releases mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-white  mb-0">
           Nuove uscite
          <i className="bi bi-chevron-right ms-2" style={{ fontSize: '1rem', color: '#d1d1d1' }}></i>
        </h5>
      </div>
      
      <div className="d-flex justify-content-center gap-4 mb-4">
        {releases.slice(0, 5).map((release) => (
          <div key={release.id} style={{ width: '250px' }}>
            <CardComponent
              title={release.title}
              artist={release.artist.name}
              image={release.album.cover_medium}
            />
          </div>
        ))}
      </div>

      
      <div className="d-flex justify-content-center gap-4">
        {releases.slice(5, 10).map((release) => (
          <div key={release.id} style={{ width: '250px' }}>
            <CardComponent
              title={release.title}
              artist={release.artist.name}
              image={release.album.cover_medium}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;