/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import { Cafe } from '../../types/Cafe';
import { Link } from 'react-router-dom';

type Props = {
  cafe: Cafe;
};

const removePostalCode = (address: string) => {
  const postalCodeRegex = /, [^,]+, [^,]+, \d{5}$/;

  return address.replace(postalCodeRegex, '');
};

const Card: React.FC<Props> = ({ cafe }) => {
  return (
    <Link to={`/cafe/${cafe.id}`} className="card__link">
      <div className="card">
        <div className="card__block">
          {cafe.main_photo.length > 0 && (
            <img
              src={cafe.main_photo}
              alt="Фотография места"
              className="card__img"
            />
          )}

          <svg
            className="card__svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.25 5C19.6688 5 17.4088 6.11 16 7.98625C14.5912 6.11 12.3313 5 9.75 5C7.69528 5.00232 5.72539 5.81958 4.27248 7.27248C2.81958 8.72539 2.00232 10.6953 2 12.75C2 21.5 14.9738 28.5825 15.5262 28.875C15.6719 28.9533 15.8346 28.9943 16 28.9943C16.1654 28.9943 16.3281 28.9533 16.4737 28.875C17.0262 28.5825 30 21.5 30 12.75C29.9977 10.6953 29.1804 8.72539 27.7275 7.27248C26.2746 5.81958 24.3047 5.00232 22.25 5ZM16 26.85C13.7175 25.52 4 19.4613 4 12.75C4.00198 11.2256 4.60842 9.76423 5.68633 8.68633C6.76423 7.60842 8.22561 7.00198 9.75 7C12.1812 7 14.2225 8.295 15.075 10.375C15.1503 10.5584 15.2785 10.7153 15.4432 10.8257C15.6079 10.9361 15.8017 10.995 16 10.995C16.1983 10.995 16.3921 10.9361 16.5568 10.8257C16.7215 10.7153 16.8497 10.5584 16.925 10.375C17.7775 8.29125 19.8188 7 22.25 7C23.7744 7.00198 25.2358 7.60842 26.3137 8.68633C27.3916 9.76423 27.998 11.2256 28 12.75C28 19.4513 18.28 25.5188 16 26.85Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="card__info">
          <div className="card__wrapper">
            <h2 className="card__title">{cafe.name}</h2>

            <div className="card__rating">
              <svg
                className="card__rating-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z"
                  fill="#878E95"
                />
              </svg>

              <span className="card__rating-num">
                {cafe.rating.slice(0, -1)}
              </span>
            </div>
          </div>

          <div className="card__address">{removePostalCode(cafe.address)}</div>

          <div className="card__info-block">
            <div className="card__opened">
              {cafe.open_now ? 'Opened' : 'Closed'}
            </div>
            <div className="card__touch">
              <span className="card__touch-span"></span>
            </div>

            <div className="card__closed">Closed at 22:00</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
