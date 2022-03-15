// Import
import './styles.css';
import ConceptLanding from 'src/components/ConceptLanding';
import axios from 'axios';

/* export const axiosInstance = axios.create({
  baseURL: 'http://martinferret-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});
 */
/* export const axiosInstance = axios.create({
  baseURL: 'http://martin-ferret.vpnuser.lan:8080/api',
}); */

export const axiosInstance = axios.create({
  baseURL: 'http://tristanbonnal-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});

// Component
function App() {
  return (
    <div className=" flex justify-center items-center">
      <ConceptLanding />
    </div>
  );
}

// Export
export default App;
