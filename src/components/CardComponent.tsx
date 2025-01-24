import React from 'react';

interface CardProps {
  title: string;
  artist?: string;
  image: string;
}

const CardComponent: React.FC<CardProps> = ({ title, artist, image }) => {
  return (
    <div className="card text-white">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        {artist && <p className="card-text">{artist}</p>}
      </div>
    </div>
  );
};

export default CardComponent;