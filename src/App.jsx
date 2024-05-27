import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import HobbiesPage from './pages/Hobbies';
// import path from 'path';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact pages={HomePage} />
        <Route path='/navbar' component={NavBar} />
        <Route path='/about' pages={AboutPage} />
        <Route path='/projects' pages={ProjectsPage} />
        <Route path='/hobbies' pages={HobbiesPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

