import React from 'react';
import CardComponent from './CardComponent';

const NewReleases: React.FC = () => {
  const releases = Array(6).fill({
    id: 1,
    title: 'Song Placeholder',
    artist: 'Artist Placeholder',
    image: 'https://via.placeholder.com/150',
  });

  return (
    <div className="new-releases mt-4">
      <h5 className="text-white">Nuove uscite</h5>
      <div className="d-flex flex-wrap">
        {releases.map((release, index) => (
          <div className="m-2" key={index}>
            <CardComponent
              title={release.title}
              artist={release.artist}
              image={release.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;