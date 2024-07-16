import React, { useEffect, useState } from 'react';
import { Cafe } from '../../types/Cafe';
import Card from '../Card/Card';

const SliderCafe: React.FC = () => {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [hasError, setHasError] = useState(false);

  const fetchTop = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/main/get-top-restaurants/',
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setCafes(data);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchTop();
  }, []);

  return (
    <section className="slider">
      <div className="container slider__container">
        <div className="slider__top">
          <h2 className="slider__title">Popular places</h2>

          <span className="slider__view">View all</span>
        </div>

        {hasError ? (
          <div>Error</div>
        ) : (
          <ul className="slider__list">
            {cafes.map(cafe => (
              <li className="slider__item" key={cafe.id}>
                <Card cafe={cafe} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default SliderCafe;
