import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/blog-template' element={<Home />}></Route>
            <Route path='/blog-template/create' element={<Create />}></Route>
            <Route path='/blog-template/blogs/:id' element={<BlogDetails />}></Route>
            <Route path='/blog-template/*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
