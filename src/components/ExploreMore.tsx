import React from 'react';

const ExploreMore: React.FC = () => {
  const exploreOptions = [
    'Esplora per genere',
    'Decenni',
    'Worldwide',
    'Classifiche',
    'Audio spaziale',
    'Video musicali',
    'Nuovi artisti',
    'Hit del passato',
  ];

  return (
    <div className="explore-more mt-4">
      <h5 className="text-white">Altro da esplorare</h5>
      <div className="d-flex flex-wrap">
        {exploreOptions.map((option, index) => (
          <button key={index} className="btn btn-dark text-white m-2">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;