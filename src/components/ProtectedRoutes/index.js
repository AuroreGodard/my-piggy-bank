import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Login from '../Login';

function ProtectedRoutes() {
  const logged = useSelector((state) => state.login.logged);
  const token = useSelector((state) => state.login.token);
  return (
    (logged && token) ? <Outlet /> : <Login />
  );
}

export default ProtectedRoutes;
