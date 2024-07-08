/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../app/store';
import {
  signIn,
  register,
  selectAuthLoading,
  selectAuthError,
  setUser,
  setToken,
} from '../../features/auth/auth';
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => selectAuthLoading(state));
  const error = useSelector((state: RootState) => selectAuthError(state));

  const handleBackClick = () => {
    navigate('/');
  };

  const fetchUserData = async (token: string) => {
    try {
      const response = await axios.get('http://localhost:8000/api/user/me/', {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(setUser(response.data));
    } catch (err) {
      console.error('Ошибка при получении данных пользователя:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      const action = await dispatch(register({ email, password }));

      if (register.fulfilled.match(action)) {
        localStorage.setItem('accessToken', action.payload.token);

        dispatch(setToken(action.payload.token));

        await fetchUserData(action.payload.token);
        navigate('/account');
      }
    } else {
      const action = await dispatch(signIn({ email, password }));

      if (signIn.fulfilled.match(action)) {
        localStorage.setItem('accessToken', action.payload.access);

        dispatch(setToken(action.payload.access));

        await fetchUserData(action.payload.access);
        navigate('/');
      }
    }
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button className="modal__button" onClick={handleBackClick}>
          &#60;
        </button>

        <h2 className="modal__title">{isSignUp ? 'Регистрация' : 'Вход'}</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="modal__label">
            Логин
            <input
              className="modal__input"
              type="text"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor="password" className="modal__label">
            Пароль
            <input
              className="modal__input"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>

          <button className="modal__email" type="submit" disabled={loading}>
            {isSignUp ? 'Зарегистрироваться' : 'Войти'}
          </button>

          {loading && <p className="modal__error">Загрузка...</p>}

          {error && <p className="modal__error">{error}</p>}
        </form>

        <button
          className="modal__toggle"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Уже есть аккаунт? Войти' : 'Зарегистрироваться'}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
