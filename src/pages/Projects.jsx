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
        <p>
          Here is a link to where you can see all my projects i have done
          through my bootcamp. There is a list of lanuages i know and the tools
          i use to get code done i am in the proccess of looking more into
          bootstrap and typescript.
        </p>
      </div>

      <div id='languages I know'>
        <ul>
          <li>Languages I Know!</li>
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
        <ul>
          <li>A list of tools I use!</li>
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
        src='data:image/png;base64,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'
        alt='mern pic'
      />
    </>
  );
}

