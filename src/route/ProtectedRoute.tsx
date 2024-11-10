import { Route, RouteProps } from 'react-router';

type Props = RouteProps;

export default function ProtectedRoute(props: Props): JSX.Element {
  return <Route {...props} />;
}
