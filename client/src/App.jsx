import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import NotFound from './pages/404';
// import the protected route
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// include global layout components such as the navbar and footer

function App() {
  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/protected-route" component={ProtectedRoute} /> */}
              {/* Routes+ */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
    </>
  );
}

export default App;