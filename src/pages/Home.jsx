import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <>
      <h1>Joe Reis's Portfolio</h1>
      <div id='name'>
        <p>
          Hello, I am a software Developer who knows the javascript language. I
          use visual studio code to build my projects and use github to create
          my project repo's. In this portfolio I will tell you more about
          myself, the projects I have done,past job history and how I became a
          software developer!
        </p>
      </div>

      <div id='photo'>
        <img
          src='https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/75478484_10214722005943963_2486672209095950336_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WstH6q-rQyIQ7kNvgEAchGk&_nc_ht=scontent-bos5-1.xx&cb_e2o_trans=t&oh=00_AYBHZ8OTHGLKLh9gaeiJucZ-JYGeKSmENWNUcIpKHxrhUA&oe=667B0C3D'
          alt='self pic'
        />
      </div>
    </>
  );
}

