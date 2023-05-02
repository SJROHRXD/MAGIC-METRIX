import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import 'bootstrap/dist/css/bootstrap.min.css'

// pages
import Home from "./pages/Home.jsx"
import NotFound from './pages/404';

function App() {
  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Routes+ */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
    </>
  );
}

export default App;

// This file contains the main App component
// It is rendered inside the DOM element with the id 'root' in the index.html file
// It should include global layout components such as the navbar and footer
// It should import and render all the pages of the app


