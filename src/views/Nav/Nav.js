import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsisAuthorizedSelector } from '../../redux/auth/auth-selectors';
import styles from './Nav.module.css';
import routes from '../routes';

const Nav = () => {
  const IsisAuthorized = useSelector(getIsisAuthorizedSelector);

  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink
            exact
            to={routes.HOME}
            className={styles.Link}
            activeClassName={styles.linkFocusColor}
          >
            Home
          </NavLink>
        </li>
        {IsisAuthorized && (
          <li className={styles.navListItem}>
            <NavLink
              to={routes.CONTACTS}
              className={styles.Link}
              activeClassName={styles.linkFocusColor}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
