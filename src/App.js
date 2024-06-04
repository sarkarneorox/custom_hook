import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page1 from "./components/page1/page1.js";
import Page2 from "./components/page2/page2.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
