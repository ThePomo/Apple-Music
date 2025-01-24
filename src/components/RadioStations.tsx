import React from 'react';

const RadioStations: React.FC = () => {
  return (
    <div className="radio-stations mt-4">
      <h5 className="text-white">Nuova stazione radio</h5>
      <div className="d-flex flex-wrap">
        <div className="card bg-dark text-white m-2" style={{ width: '18rem' }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Radio Chill"
          />
          <div className="card-body">
            <h6 className="card-title">Rilassati, al resto pensiamo noi.</h6>
            <p className="card-text">Ascolta Apple Music Chill.</p>
          </div>
        </div>
        <div className="card bg-dark text-white m-2" style={{ width: '18rem' }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Radio Latina"
          />
          <div className="card-body">
            <h6 className="card-title">Ecco la nuova casa della musica latina.</h6>
            <p className="card-text">Ascolta Apple Music Latino.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioStations;