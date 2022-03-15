// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// == Import : local
// Components
import App from 'src/components/App';
import Dashboard from 'src/components/Dashboard';
import store from 'src/store';
import SignUp from 'src/components/SignUp';
import AddPot from 'src/components/AddPot';
import PotDetails from 'src/components/PotDetails';
import ProtectedRoutes from 'src/components/ProtectedRoutes';
import Faq from 'src/components/Faq';
import UserProfile from 'src/components/UserProfile';
import PotsActionsHistory from 'src/components/PotsActionsHistory';
import HeaderMenu from 'src/components/HeaderMenu';
import BottomMenu from 'src/components/BottomMenu';
import Footer from 'src/components/Footer';
import Sidebar from './components/Sidebar';
import Error from './components/Error';

import ScrollToTop from './components/ScrollToTop';

// Store

// == Render
// 1. Root React element (the one that contains the whole app => structure DOM virtuel)
const rootReactElement = (
  <BrowserRouter>

    <ScrollToTop />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="faq"
          element={(
            <>
              <HeaderMenu />
              <Faq />
              <Footer />
            </>
)}
        />
        <Route path="signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="potdetails/:id"
            element={(
              <>
                <HeaderMenu />
                <PotDetails />
                <BottomMenu />
                <Sidebar />
              </>
)}
          />
          <Route
            path="dashboard"
            element={(
              <>
                <HeaderMenu />
                <Dashboard />
                <BottomMenu />
                <Sidebar />
              </>
)}
          />
          <Route
            path="login"
          />
          <Route
            path="userprofile"
            element={(
              <>
                <HeaderMenu />
                <UserProfile />
                <BottomMenu />
                <Sidebar />
              </>
)}
          />
          <Route
            path="addpot"
            element={(
              <>
                <HeaderMenu />
                <AddPot />
                <BottomMenu />
                <Sidebar />
              </>
)}
          />
          <Route
            path="actionshistory"
            element={(
              <>
                <HeaderMenu />
                <PotsActionsHistory />
                <BottomMenu />
                <Sidebar />
              </>
)}
          />
        </Route>
        <Route
          path="*"
          element={(
            <>
              <HeaderMenu />
              <Error />
              <Footer />
            </>
)}
        />
      </Routes>
    </Provider>

  </BrowserRouter>
);
// 2. Target where structure comes to life in the DOM
const target = document.getElementById('root');

// 3. render from react (virtuel) => DOM (Web page)
render(rootReactElement, target);
