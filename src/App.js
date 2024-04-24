import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/' element={<Create />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
