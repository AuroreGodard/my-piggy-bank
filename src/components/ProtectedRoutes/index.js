// Import
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import HeaderMenu from 'src/components/HeaderMenu';
import Login from '../Login';

// Component
function ProtectedRoutes() {
  const logged = useSelector((state) => state.login.logged);
  const token = useSelector((state) => state.login.token);
  return (
    (logged && token) ? <Outlet /> : (
      <>
        <HeaderMenu />
        <Login />
      </>
    )
  );
}

// Export
export default ProtectedRoutes;
