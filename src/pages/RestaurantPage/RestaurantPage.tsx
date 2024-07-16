/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as detailsActions from '../../features/details/details';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import Reviews from '../../components/Reviews/Reviews';

const RestaurantPage: React.FC = () => {
  const { cafeId } = useParams<{ cafeId: string }>();

  const cafeDetails = useSelector(
    (state: RootState) => state.details.cafeDetails,
  );
  const loaded = useSelector((state: RootState) => state.details.loaded);
  const hasError = useSelector((state: RootState) => state.details.hasError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cafeId) {
      dispatch(detailsActions.initDetails(cafeId));
    }
  }, [cafeId]);

  const placeholderImage = 'https://via.placeholder.com/320x190';

  if (!loaded && cafeId) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <>
      {cafeDetails && (
        <>
          <section className="section">
            <div className="container">
              <div className="restaurant__wrapper">
                <div className="restaurant__link"></div>

                <div className="restaurant__top">
                  <div className="restaurant__text">
                    <div className="restaurant__text-top">
                      <h1 className="restaurant__title">{cafeDetails.name}</h1>

                      <div className="restaurant__rating">
                        <svg
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

                        <div className="restaurant__rating-span">
                          {cafeDetails.rating.slice(0, -1)}
                        </div>
                      </div>

                      <div className="restaurant__views">
                        {`${cafeDetails.total_users_ratings} reviews`}
                      </div>
                    </div>

                    <ul className="restaurant__list">
                      <li className="restaraunt__item">
                        <div className="restaurant__save restaurant__liked">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.6875 4.25C14.7516 4.25 13.0566 5.0825 12 6.48969C10.9434 5.0825 9.24844 4.25 7.3125 4.25C5.77146 4.25174 4.29404 4.86468 3.20436 5.95436C2.11468 7.04404 1.50174 8.52146 1.5 10.0625C1.5 16.625 11.2303 21.9369 11.6447 22.1562C11.7539 22.215 11.876 22.2458 12 22.2458C12.124 22.2458 12.2461 22.215 12.3553 22.1562C12.7697 21.9369 22.5 16.625 22.5 10.0625C22.4983 8.52146 21.8853 7.04404 20.7956 5.95436C19.706 4.86468 18.2285 4.25174 16.6875 4.25ZM12 20.6375C10.2881 19.64 3 15.0959 3 10.0625C3.00149 8.91921 3.45632 7.82317 4.26475 7.01475C5.07317 6.20632 6.16921 5.75149 7.3125 5.75C9.13594 5.75 10.6669 6.72125 11.3062 8.28125C11.3628 8.41881 11.4589 8.53646 11.5824 8.61926C11.7059 8.70207 11.8513 8.74627 12 8.74627C12.1487 8.74627 12.2941 8.70207 12.4176 8.61926C12.5411 8.53646 12.6372 8.41881 12.6937 8.28125C13.3331 6.71844 14.8641 5.75 16.6875 5.75C17.8308 5.75149 18.9268 6.20632 19.7353 7.01475C20.5437 7.82317 20.9985 8.91921 21 10.0625C21 15.0884 13.71 19.6391 12 20.6375Z"
                              fill="black"
                            />
                          </svg>

                          <span className="restaurant__save-span">save</span>
                        </div>
                      </li>
                      <li className="restaraunt__item">
                        <div className="restaurant__share restaurant__liked">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12.5V20.5C4 21.0304 4.21071 21.5391 4.58579 21.9142C4.96086 22.2893 5.46957 22.5 6 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V12.5M16 6.5L12 2.5M12 2.5L8 6.5M12 2.5V15.5"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span className="restaurant__share-span">share</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <img
                    src={cafeDetails.images[0].url}
                    alt=""
                    className="restaurant__img restaurant__img-first"
                  />

                  <div className="restaurant__block">
                    <img
                      src={
                        cafeDetails.images[1].url
                          ? cafeDetails.images[1].url
                          : placeholderImage
                      }
                      alt=""
                      className="restaurant__img restaurant__img-two"
                    />
                    <img
                      src={
                        cafeDetails.images[2].url
                          ? cafeDetails.images[2].url
                          : placeholderImage
                      }
                      alt=""
                      className="restaurant__img restaurant__img-three"
                    />
                  </div>

                  <div className="restaurant__location">
                    <h2 className="restaurant__location-title">
                      Location and contact
                    </h2>

                    <div className="restaurant__map"></div>

                    <div className="restaurant__website">
                      <a
                        href={cafeDetails.website_url}
                        className="restaurant__website-url"
                      >
                        Website
                      </a>
                    </div>
                    <div className="restaurant__adress">
                      {cafeDetails.address}
                    </div>
                    <div className="restaurant__phone">
                      {cafeDetails.phone_number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section comment">
            <div className="container">
              <div className="comment__wrapper">
                <div className="comment__top">
                  <form action="" className="comment__form">
                    <textarea
                      className="comment__form-textarea"
                      placeholder="What are your thoughts about this place?"
                    />

                    <div className="comment__form-block">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_59_914)">
                          <path
                            d="M21.3333 2.66669H2.66659C2.31296 2.66669 1.97382 2.80716 1.72378 3.05721C1.47373 3.30726 1.33325 3.6464 1.33325 4.00002V20C1.33325 20.3536 1.47373 20.6928 1.72378 20.9428C1.97382 21.1929 2.31296 21.3334 2.66659 21.3334H21.3333C21.6869 21.3334 22.026 21.1929 22.2761 20.9428C22.5261 20.6928 22.6666 20.3536 22.6666 20V4.00002C22.6666 3.6464 22.5261 3.30726 22.2761 3.05721C22.026 2.80716 21.6869 2.66669 21.3333 2.66669ZM2.66659 20V4.00002H21.3333V20H2.66659Z"
                            fill="black"
                          />
                          <path
                            d="M5.94678 9.33331C6.34234 9.33331 6.72902 9.21602 7.05792 8.99625C7.38682 8.77649 7.64316 8.46413 7.79454 8.09868C7.94591 7.73323 7.98552 7.3311 7.90835 6.94313C7.83118 6.55517 7.6407 6.19881 7.36099 5.9191C7.08129 5.6394 6.72492 5.44891 6.33696 5.37174C5.949 5.29457 5.54686 5.33418 5.18141 5.48555C4.81596 5.63693 4.5036 5.89328 4.28384 6.22217C4.06408 6.55107 3.94678 6.93775 3.94678 7.33331C3.94678 7.86375 4.15749 8.37245 4.53256 8.74753C4.90764 9.1226 5.41634 9.33331 5.94678 9.33331ZM5.94678 6.26665C6.15802 6.26533 6.3649 6.32676 6.54119 6.44316C6.71748 6.55956 6.85523 6.72569 6.93699 6.92048C7.01875 7.11527 7.04082 7.32994 7.00042 7.53729C6.96002 7.74464 6.85896 7.93533 6.71005 8.08517C6.56114 8.23502 6.3711 8.33727 6.164 8.37897C5.95691 8.42067 5.7421 8.39994 5.5468 8.31941C5.35151 8.23887 5.18452 8.10216 5.06702 7.92661C4.94951 7.75106 4.88678 7.54456 4.88678 7.33331C4.88853 7.05272 5.00077 6.78412 5.19918 6.58571C5.39759 6.3873 5.66619 6.27506 5.94678 6.27331V6.26665Z"
                            fill="black"
                          />
                          <path
                            d="M15.1868 10.2467L11.5868 13.8467L8.92011 11.18C8.7952 11.0558 8.62623 10.9861 8.45011 10.9861C8.27399 10.9861 8.10502 11.0558 7.98011 11.18L3.94678 15.2667V17.1533L8.47344 12.6267L10.6668 14.7867L8.16678 17.2867H10.0001L15.6334 11.6533L20.0001 16V14.12L16.1268 10.2467C16.0019 10.1225 15.8329 10.0528 15.6568 10.0528C15.4807 10.0528 15.3117 10.1225 15.1868 10.2467Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_59_914">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 20V14L11 12L3 10V4L22 12L3 20Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </form>
                </div>

                <ul className="reviews">
                  {cafeDetails.reviews.map(item => (
                    <li key={item.id} className="reviews__item">
                      <Reviews details={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default RestaurantPage;
