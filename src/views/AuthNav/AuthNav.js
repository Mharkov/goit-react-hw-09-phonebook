import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import routes from '../routes';

const AuthNav = () => {
  const styles = {
    activeLink: {
      color: '#ffffff',
      backgroundColor: 'rgb(70, 100, 100)',
      borderColor: 'rgb(50, 80, 100)',
    },
  };

  return (
    <div>
      <NavLink
        to={routes.REGISTER}
        className={s.link}
        activeStyle={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to={routes.LOGIN}
        className={s.link}
        activeStyle={styles.activeLink}
      >
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
