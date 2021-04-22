import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsisAuthorizedSelector } from '../../redux/auth/auth-selectors';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoadID = useSelector(getIsisAuthorizedSelector);
  return (
    <Route {...routeProps}>
      {isLoadID ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
