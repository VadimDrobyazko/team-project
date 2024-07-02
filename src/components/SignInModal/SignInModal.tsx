import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInModal: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button className="modal__button" onClick={handleBackClick}>
          &#60;
        </button>
        <h2 className="modal__title">Вход</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login" className="modal__label">
            Логин
            <input className="modal__input" type="text" id="login" required />
          </label>
          <label htmlFor="password" className="modal__label">
            Пароль
            <input
              className="modal__input"
              type="password"
              id="password"
              required
            />
          </label>
          <button className="modal__login" type="submit">
            Войти
          </button>

          <button className="modal__login" type="submit">
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
