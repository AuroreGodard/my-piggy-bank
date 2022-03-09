// Import
import './styles.css';
import ConceptLanding from 'src/components/ConceptLanding';
import axios from 'axios';

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
