// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// == Import : local
// Components
import App from 'src/components/App';
import Dashboard from 'src/components/Dashboard';
import store from 'src/store';
import Login from 'src/components/Login';
import SignUp from 'src/components/SignUp';
import ProtectedRoutes from 'src/components/ProtectedRoutes';
import Faq from 'src/components/Faq';
import UserProfile from 'src/components/UserProfile';
import PotsActionsHistory from 'src/components/PotsActionsHistory';

// Store

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="faq" element={<Faq />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="actionshistory" element={<PotsActionsHistory />} />
        </Route>

      </Routes>
    </Provider>
  </BrowserRouter>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
