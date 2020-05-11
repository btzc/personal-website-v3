import React, { useEffect } from 'react';
import './App.scss';

import Home from './pages/home/home.pages';
import Projects from './pages/projects/projects.pages';
import Work from './pages/work/work.pages';
import Contact from './pages/contact/contact.pages';

import Navbar from './components/navbar/navbar.component';

function App() {
  useEffect(() => {
    const elements = getAnimatedElements();

    elements.forEach(element => element.style.visibility = 'hidden');
    window.addEventListener('scroll', addAnimation);
  });

  const getAnimatedElements = () => {
    const headers = document.querySelectorAll('.section-heading');
    const work = window.innerWidth < 1024 ? document.querySelectorAll('.work-list-panel') : [document.querySelector('.work-list')];
    const projects = document.querySelectorAll('.project');
    const contact = document.querySelector('.contact--content');

    const elements = [...headers, ...work, ...projects, contact];

    return elements;
  }

  const isInViewport = (element) => {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >=0 &&
      bounding.left >=0 &&
      bounding.bottom <= window.innerHeight &&
      bounding.right <= window.innerWidth
    );
  }

  const addAnimation = () => {
    const elements = getAnimatedElements();

    elements.forEach(element => {
      if((isInViewport(element) && !element.classList.contains('animate')) || (element.getBoundingClientRect().top < 0 && !element.classList.contains('animate'))) {
        element.classList.add('animate');
        element.style.visibility = 'visible';
      }
    });
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className='content'>
        <Work />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
