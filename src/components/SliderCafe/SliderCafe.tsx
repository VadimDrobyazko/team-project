import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import * as cafesTopActions from '../../features/cafes/cafes';

const SliderCafe: React.FC = () => {
  const dispatch = useAppDispatch();

  const { cafes, hasError } = useAppSelector((state: RootState) => state.cafes);

  useEffect(() => {
    dispatch(cafesTopActions.fetchTopCafes());
  }, [dispatch]);

  return (
    <section className="slider">
      <div className="container slider__container">
        <div className="slider__top">
          <h2 className="slider__title">Popular places</h2>

          <Link to="/discover" className="slider__view">
            View all
          </Link>
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
