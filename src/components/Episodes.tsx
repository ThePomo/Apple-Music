import React from 'react';
import CardComponent from './CardComponent';

const Episodes: React.FC = () => {
  const episodes = [
    { id: 1, title: 'Prólogo con Abuelo', image: '/2a.png' },
    { id: 2, title: 'The Wanderer', image: '/2b.png' },
    { id: 3, title: 'Michael Bublé & Carly Pearce', image: '/2c.png' },
    { id: 4, title: 'Stephan Moccio: The Zane Lowe Interview', image: '/2d.png' },
    { id: 5, title: 'Chart Spotlight: Julia Michaels', image: '/2e.png' },
  ];

  return (
    <div className="episodes mt-4 d-flex justify-content-center">
      <div className="episodes-container">
        <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-white text-start mb-0">
  Nuovi episodi radio
  <i className="bi bi-chevron-right ms-2" style={{ fontSize: '1rem', color: '#d1d1d1' }}></i>
</h5>
        </div>
        <div className="d-flex flex-nowrap gap-4 overflow-auto">
          {episodes.map((episode) => (
            <div key={episode.id} className="flex-shrink-0" style={{ width: '250px' }}>
              <CardComponent title={episode.title} image={episode.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;