import React from 'react';
import './App.scss';

import Home from './pages/home/home.pages';
import About from './pages/about/about.pages';
import Work from './pages/work/work.pages';
import Contact from './pages/contact/contact.pages';

import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className='content'>
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
