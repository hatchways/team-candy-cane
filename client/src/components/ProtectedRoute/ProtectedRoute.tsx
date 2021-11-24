import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../../context/useAuthContext';

export interface IPrivateRouteProps extends RouteProps {
  redirectPath: string; // redirect path if don't authenticate route
}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
  const { loggedInUser } = useAuth();

  return loggedInUser?.email ? <Route {...props} component={props.component} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
