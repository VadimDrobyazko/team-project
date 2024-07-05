/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Cafe } from '../../types/Cafe';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

import * as cafesAction from '../../features/cafes/cafes';
import Card from '../../components/Card/Card';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();

  const { cafes, loaded, hasError } = useAppSelector(
    (state: RootState) => state.cafes,
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(cafesAction.init(query));
  };

  return (
    <div className="main">
      <section className="search">
        <div className="search__wrapper">
          <h1 className="search__title">Find a cool place in your city</h1>

          <div className="search__block">
            <svg
              className="search__svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 2C9.1446 2.00012 7.80887 2.32436 6.60427 2.94569C5.39966 3.56702 4.3611 4.46742 3.57525 5.57175C2.78939 6.67609 2.27902 7.95235 2.08672 9.29404C1.89442 10.6357 2.02576 12.004 2.46979 13.2846C2.91382 14.5652 3.65766 15.7211 4.63925 16.6557C5.62084 17.5904 6.81171 18.2768 8.11252 18.6576C9.41333 19.0384 10.7864 19.1026 12.117 18.8449C13.4477 18.5872 14.6975 18.015 15.762 17.176L19.414 20.828C19.6026 21.0102 19.8552 21.111 20.1174 21.1087C20.3796 21.1064 20.6304 21.0012 20.8158 20.8158C21.0012 20.6304 21.1064 20.3796 21.1087 20.1174C21.111 19.8552 21.0102 19.6026 20.828 19.414L17.176 15.762C18.164 14.5086 18.7792 13.0024 18.9511 11.4157C19.123 9.82905 18.8448 8.22602 18.1482 6.79009C17.4517 5.35417 16.3649 4.14336 15.0123 3.29623C13.6597 2.44911 12.096 1.99989 10.5 2ZM4.00001 10.5C4.00001 8.77609 4.68483 7.12279 5.90382 5.90381C7.1228 4.68482 8.7761 4 10.5 4C12.2239 4 13.8772 4.68482 15.0962 5.90381C16.3152 7.12279 17 8.77609 17 10.5C17 12.2239 16.3152 13.8772 15.0962 15.0962C13.8772 16.3152 12.2239 17 10.5 17C8.7761 17 7.1228 16.3152 5.90382 15.0962C4.68483 13.8772 4.00001 12.2239 4.00001 10.5Z"
                fill="#AEB5BC"
              />
            </svg>

            <input
              className="search__input"
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Cafe, restaurant or destination"
            />

            <button
              onClick={handleSearch}
              disabled={!query || !loaded}
              className="search__button"
            >
              {loaded ? 'Discover now' : 'Loading...'}
            </button>

            {hasError && (
              <div className="search__error">
                <p className="search__error-title">
                  Error fetching cafes. Please try again
                </p>

                <p className="search__error-close">x</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="slider">
        <div className="container slider__container">
          <div className="slider__top">
            <h2 className="slider__title">Places are nearby</h2>

            <span className="slider__view">View all</span>
          </div>

          <ul className="slider__list">
            {cafes.slice(0, 4).map((cafe: Cafe) => (
              <Card key={cafe.unique_id} cafe={cafe} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
