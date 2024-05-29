import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import '../index.css';
import '../App.css';

import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <>
      <h1>Joe Reis's Portfolio</h1>
      <div id='home-p'>
        <p>
          Looking out my friend's window in their high rise apartment in the
          city gave me the inspiration for shooting for the stars and doing
          whatever it takes to get there for my family and myself, I believe
          become a software Developer is a great accomplishment and a great step
          for shooting for the stars. In this portfolio I will tell a bit about
          myself, my projects ,past job history, and how I became a software
          developer!
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

