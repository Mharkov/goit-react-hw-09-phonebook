import AuthNav from '../../views/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import Nav from '../../views/Nav/Nav';
import UserMenu from '../UserMenu/UserMenu';
import style from '../AppBar/AppBar.module.css';
import { isAuthenticated } from '../../redux/auth/auth-selectors';

const AppBar = () => {
  const isLoadID = useSelector(isAuthenticated);

  return (
    <header className={style.header}>
      <Nav />

      {isLoadID ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
