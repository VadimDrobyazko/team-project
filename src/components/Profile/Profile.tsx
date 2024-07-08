/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentToken,
  setUser,
  logOut,
} from '../../features/auth/auth';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const fetchUserData = async () => {
      if (token && !currentUser) {
        try {
          const response = await axios.get(
            'http://localhost:8000/api/user/me/',
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          dispatch(setUser(response.data));
        } catch (error) {
          console.error('Ошибка при получении данных пользователя:', error);
        }
      }
    };

    fetchUserData();
  }, [token, currentUser, dispatch]);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div className="container">
      <div className="profile">
        <div className="profile__wrapper">
          <img
            src="https://via.placeholder.com/208x208"
            alt=""
            className="profile__img"
          />

          <h4 className="profile__name">{currentUser?.name}</h4>
          <div className="profile__email">{currentUser?.email}</div>
        </div>

        <div className="profile__nav">
          <ul className="profile__list">
            <li className="profile__item">
              <NavLink to="personal" className="profile__link">
                Personal account
              </NavLink>
            </li>

            <li className="profile__item">
              <NavLink to="favourites" className="profile__link">
                Your reviews and likes
              </NavLink>
            </li>

            <li
              className="profile__item profile__logout"
              onClick={handleLogOut}
            >
              <span className="profile__logout-span">Sign out</span>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 20.75H6C5.65324 20.7648 5.30697 20.711 4.98101 20.5918C4.65505 20.4726 4.3558 20.2902 4.10038 20.0552C3.84495 19.8203 3.63837 19.5372 3.49246 19.2223C3.34654 18.9074 3.26415 18.5668 3.25 18.22V5.78C3.26415 5.43322 3.34654 5.09262 3.49246 4.77771C3.63837 4.4628 3.84495 4.17975 4.10038 3.94476C4.3558 3.70977 4.65505 3.52745 4.98101 3.40824C5.30697 3.28903 5.65324 3.23525 6 3.25H9C9.19891 3.25 9.38968 3.32902 9.53033 3.46967C9.67098 3.61033 9.75 3.80109 9.75 4C9.75 4.19892 9.67098 4.38968 9.53033 4.53033C9.38968 4.67099 9.19891 4.75 9 4.75H6C5.70307 4.72419 5.4076 4.81365 5.17487 4.99984C4.94213 5.18602 4.78999 5.45465 4.75 5.75V18.22C4.78999 18.5154 4.94213 18.784 5.17487 18.9702C5.4076 19.1564 5.70307 19.2458 6 19.22H9C9.19891 19.22 9.38968 19.299 9.53033 19.4397C9.67098 19.5803 9.75 19.7711 9.75 19.97C9.75 20.1689 9.67098 20.3597 9.53033 20.5003C9.38968 20.641 9.19891 20.72 9 20.72V20.75ZM16 16.75C15.9015 16.7505 15.8038 16.7312 15.7128 16.6935C15.6218 16.6557 15.5392 16.6001 15.47 16.53C15.3295 16.3894 15.2507 16.1988 15.2507 16C15.2507 15.8013 15.3295 15.6106 15.47 15.47L18.94 12L15.47 8.53C15.3963 8.46134 15.3372 8.37854 15.2962 8.28654C15.2552 8.19454 15.2332 8.09523 15.2314 7.99453C15.2296 7.89382 15.2482 7.7938 15.2859 7.70041C15.3236 7.60702 15.3797 7.52219 15.451 7.45097C15.5222 7.37975 15.607 7.3236 15.7004 7.28588C15.7938 7.24816 15.8938 7.22964 15.9945 7.23141C16.0952 7.23319 16.1945 7.25523 16.2865 7.29622C16.3785 7.33722 16.4613 7.39632 16.53 7.47L20.53 11.47C20.6705 11.6106 20.7493 11.8013 20.7493 12C20.7493 12.1988 20.6705 12.3894 20.53 12.53L16.53 16.53C16.4608 16.6001 16.3782 16.6557 16.2872 16.6935C16.1962 16.7312 16.0985 16.7505 16 16.75Z"
                  fill="#B8B8B8"
                />
                <path
                  d="M20 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75Z"
                  fill="#B8B8B8"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
