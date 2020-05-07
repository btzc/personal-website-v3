import React from 'react';
import './App.scss';

import Home from './pages/home/home.pages';
import About from './pages/about/about.pages';
import Work from './pages/work/work.pages';
import Contact from './pages/contact/contact.pages';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
