import React from 'react';

const RadioStations: React.FC = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-white">Novità</h1>
      <hr className="title-divider" />
      <div className="radio-stations mt-4">
        <div className="row g-4">
          
          <div className="col-12 col-md-6">
            <div className="text-section">
              <h6 className="text-uppercase text-bright">Nuova stazione radio</h6>
              <h5 className="text-white">Rilassati, al resto pensiamo noi.Ascolta Apple Music Chill.</h5>
            </div>
            <div className="image-section">
              <img
                src="./public/1a.png"
                className="radio-image"
                alt="Radio Chill"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="text-section">
              <h6 className="text-uppercase text-bright">Nuova stazione radio</h6>
              <h5 className="text-white">Ecco la nuova casa della musica latina.</h5>
            </div>
            <div className="image-section">
              <img
                src="./public/1b.png"
                className="radio-image"
                alt="Radio Latina"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioStations;