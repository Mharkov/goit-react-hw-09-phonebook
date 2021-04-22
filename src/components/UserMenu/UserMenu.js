import { useDispatch, useSelector } from 'react-redux';
import { getUseremail } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import style from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUseremail);

  return (
    <div className={style.container}>
      <span className={style.name}>Hello, {email}!</span>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}
