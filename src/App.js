import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import ThxPookie from './Pages/ThxPookie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/thxpookie" element={<ThxPookie />}/>
        {/* Add more routes as needed */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
