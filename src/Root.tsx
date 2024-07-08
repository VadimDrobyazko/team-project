import React, { useEffect } from 'react';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './app/store';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Profile from './components/Profile/Profile';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Root: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="discover/:query" element={<DiscoverPage />} />
            <Route path="sign-in" element={<ProfilePage />} />

            <Route path="account" element={<Profile />} />

            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutUsPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default Root;
