import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rewards from './components/Rewards';
import Banner from './components/Banner';
import Steps from './components/Steps';
import Tabs from './components/Tabs';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className='App'> 
        <Navbar />
        <Banner />
        <Routes>
        <Route path="/" element={<Navigate to="/rewards" />} />
          <Route path="/rewards" element={<Rewards />} /> {/* Define tus rutas aquí */}
        </Routes>
        <Steps />
        <Tabs/>
      </div>
    </Router>
  );
}

export default App;