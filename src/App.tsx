import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NationalityPage } from './pages/NationalityPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/african-boy-names" element={<NationalityPage nationality="african" />} />
          <Route path="/american-boy-names" element={<NationalityPage nationality="american" />} />
          <Route path="/french-boy-names" element={<NationalityPage nationality="french" />} />
          <Route path="/german-boy-names" element={<NationalityPage nationality="german" />} />
          <Route path="/indian-boy-names" element={<NationalityPage nationality="indian" />} />
          <Route path="/japanese-boy-names" element={<NationalityPage nationality="japanese" />} />
          <Route path="/russian-boy-names" element={<NationalityPage nationality="russian" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;