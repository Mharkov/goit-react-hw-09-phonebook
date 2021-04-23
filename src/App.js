import React, { Suspense, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import AppBar from './components/AppBar/AppBar';
import { getCurrentUser } from './redux/auth/auth-operations';
// import ContactsView from './views/ContactsView/ContactsView';
// import * as contactSelectors from '../src/redux/contact/contact-selectors';
// import * as contactOperations from '../src/redux/contact/contact-operations';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView/RegisterView';
// import LoginView from './views/LoginView/LoginView';
const App = () => {
  const HomeView = lazy(() =>
    import('./views/HomeView' /* webpackChunkName: "home-view" */)
  );

  const ContactsView = lazy(() =>
    import(
      './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
    )
  );

  const RegisterView = lazy(() =>
    import(
      './views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
    )
  );

  const LoginView = lazy(() =>
    import('./views/LoginView/LoginView' /* webpackChunkName: "login-view" */)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <AppBar />
          <Switch>
            <PublicRoute exact path="/" restricted redirectTo="/contacts">
              <HomeView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     loading: contactSelectors.getLoading(state),
//   };
// };

// export default connect(mapStateToProps, null)(App);
