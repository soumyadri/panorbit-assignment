import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { HomePage } from './component/HomePage';
import { UserPage } from './component/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
