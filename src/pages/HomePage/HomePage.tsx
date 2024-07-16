/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import SliderCafe from '../../components/SliderCafe/SliderCafe';
import { useNavigate } from 'react-router-dom';

import images from '../../images/about.png';
import SayCard from '../../components/SayCard/SayCard';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const { loaded, hasError } = useAppSelector(
    (state: RootState) => state.cafes,
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate(`discover/${query}`);
    localStorage.setItem('lastQuery', query);
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

      <SliderCafe />

      <section className="section company">
        <div className="container">
          <div className="company__wrapper">
            <img src={images} className="company__img" alt="Company" />

            <div className="company__text">
              <h1 className="company__title">About the company</h1>

              <h4 className="company__subtitle">
                FoodieGuider simplifies discovering the best cafes and
                restaurants with personalized recommendations and comprehensive
                reviews.
              </h4>

              <div className="company__button">More information</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section say">
        <div className="container">
          <div className="say__wrapper">
            <div className="say__top">
              <h2 className="say__title">What do people say about us?</h2>

              <div className="say__block">
                <div className="say__button say__button-left">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.828 6.77815H16V8.77815H3.828L9.192 14.1422L7.778 15.5562L0 7.77815L7.778 0.000152588L9.192 1.41415L3.828 6.77815Z"
                      fill="#121212"
                    />
                  </svg>
                </div>

                <div className="say__button say__button-right">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.172 6.77815H0V8.77815H12.172L6.808 14.1422L8.222 15.5562L16 7.77815L8.222 0.000152588L6.808 1.41415L12.172 6.77815Z"
                      fill="#121212"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="say__middle">
              <SayCard />

              <SayCard />

              <SayCard />
            </div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <div className="faq__wrapper">
            <h2 className="faq__title">faq</h2>

            <ul className="faq__list">
              <li className="faq__item">What is FoodieGuider?</li>
              <li className="faq__item">How do I search for cafes?</li>
              <li className="faq__item">Is FoodieGuider free to use?</li>
              <li className="faq__item">How do I leave a review?</li>
              <li className="faq__item">
                Can I save my favorite food establishment?
              </li>
              <li className="faq__item">
                How does FoodieGuider recommend cafes?
              </li>
              <li className="faq__item">How do I delete my account?</li>
              <li className="faq__item">
                Is my personal information safe with FoodieGuider?
              </li>
              <li className="faq__item">Can I share cafes with my friends?</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
