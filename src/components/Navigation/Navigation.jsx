import { useAuth } from 'components/hooks';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      <Suspense>
        <Outlet/>
      </Suspense>
    </nav>
  );
};
