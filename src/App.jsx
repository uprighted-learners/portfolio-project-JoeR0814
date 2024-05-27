import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import HobbiesPage from './pages/Hobbies';
import path from 'path';

const App = () => (
  <Router>
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/NavBar' component={NavBar} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/hobbies' component={Hobbies} />
  </Router>
    </div>
);

export default App;

