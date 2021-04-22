import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsisAuthorizedSelector } from '../../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isLoadID = useSelector(getIsisAuthorizedSelector);
  const shouldRedirect = isLoadID && routeProps.restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
