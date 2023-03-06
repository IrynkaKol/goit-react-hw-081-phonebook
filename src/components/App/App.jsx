import { Navigation } from 'components/Navigation/Navigation';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('components/pages/Home'));
const RegisterPage = lazy(() => import('components/pages/Register'));
const LoginPage = lazy(() => import('components/pages/Login'));
const ContactsPage = lazy(() => import('components/pages/Contacts'));

export const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};
