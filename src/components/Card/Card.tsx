/* eslint-disable no-console */
import React from 'react';
import { Cafe } from '../../types/Cafe';

type Props = {
  cafe: Cafe;
};

const Card: React.FC<Props> = ({ cafe }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={`${cafe.fsq_id}`} alt="Фотография места" />
      </div>
      <h2 className="card__title">{cafe.name}</h2>
      <div className="card__address">{cafe.location.formatted_address}</div>
    </div>
  );
};

export default Card;
