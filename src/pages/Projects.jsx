import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
// import NavBar from './components/NavBar';

export default function Projects() {
  return (
    <>
      <h1>Projects, Languages, and Tools!</h1>

      <a href='https://github.com/dashboard'>GitHub</a>

      <div id='projects-p'>
        <p>Here are projects i have done</p>
      </div>

      <div id='languages'>
        <p>Languages I Know</p>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>HTML-5</li>
          <li>CSS</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Node.JS</li>
          <li>Express</li>
          <li>REST/JSON</li>
        </ul>
      </div>
      <div id='tools'>
        <p>Tools I Use</p>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Postman</li>
          <li>JWT/SSO</li>
          <li>Netlify</li>
          <li>Trello</li>
          <li>BootStrap</li>
        </ul>
      </div>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8H08lXRzIyfbBqGDATggJeB8OIGCZYIPbg&s'
        alt='learn new things'
      />
    </>
  );
}

