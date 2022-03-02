import { Outlet } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../Login';

function ProtectedRoutes() {
  const logged = useSelector((state) => state.login.logged);
  return (
    logged ? <Outlet /> : <Login />
  );
}

export default ProtectedRoutes;
