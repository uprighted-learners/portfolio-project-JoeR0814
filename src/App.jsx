import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
// import '../index.css';

import path from 'path';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import './App.css';

// function About() {
//   return (
//     <div className='About'>
//       {/* <nav>
//         <ul>
//           <li>Link One</li>
//           <li>Link Two</li>
//           <li>Link Three</li>
//         </ul>
//       </nav> */}
//       <h1>Joe Reis</h1>
//       <p>Located in: Shelton,Connecticut</p>

//       <div id='contact-info'>
//         <li>Phone: 203-231-1234</li>
//         <li>City: Shelton</li>
//         <li>State: Connecticut</li>
//         <li>Zip: 06484</li>
//         <li>Email: JoeReis0814@gmail.com</li>
//         <li>
//           <a href='https://www.linkedin.com/in/joe-reis-software-developer-b28980'>
//             LinkedIn
//           </a>
//         </li>
//         <li>
//           <a href='https://github.com/dashboard'>GitHub</a>
//         </li>
//       </div>

//       <div id='languages'>
//         <p>Languages I Know</p>
//         <ul>
//           <li>Javascript</li>
//           <li>HTML</li>
//           <li>HTML-5</li>
//           <li>CSS</li>
//           <li>React</li>
//           <li>MongoDB</li>
//           <li>Node.JS</li>
//           <li>Express</li>
//           <li>REST/JSON</li>
//         </ul>
//       </div>

//       <div id='tools'>
//         <p>Tools I Use</p>
//         <ul>
//           <li>Git</li>
//           <li>GitHub</li>
//           <li>Postman</li>
//           <li>JWT/SSO</li>
//           <li>Netlify</li>
//           <li>Trello</li>
//           <li>BootStrap</li>
//         </ul>
//       </div>

//       <div id='learn-pic'>
//         <img
//           src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8H08lXRzIyfbBqGDATggJeB8OIGCZYIPbg&s'
//           alt='learn new things'
//         />
//       </div>

//       <span>
//         <p>
//           Hello, my name is Joe Reis, I am a very lucky guy to have the family I
//           have and my son, he is my world. I love teaching him the things I
//           know, he plays a big roll in my life and I want to be the best i can
//           for him, everything i do i make sure he is part of it, I try to be the
//           best I can be so he can have a great role model to look up too! I am
//           in the construction field as a labor and I also am a automotive
//           mechanic/anything with an engine I can diagnose and repair.
//           <strong>
//             When I am asked what I do for work I like to say,
//             <em>"I am a Jack of all trades master of none!"</em>
//           </strong>
//           Meaning in my words, being a labor on a job I had to assist a lot of
//           different trades on a job site, I had to learn their tools and
//           materials they need to help them get the work done. I learn the very
//           basics of each of the trades, wether it would be to paving an old or a
//           new driveway, or a street, and a highway as well as learning to
//           operator machines, or assist the electrician, carpenter, iron worker,
//           a plumber, ect, but whatever it maybe be, I am now able to understand
//           how to do a lot of trades. I now would like to say im specializing in
//           Javascript Full Stack software development/Engineering. I am someone
//           who love's to explore new things, figure out how things work by using
//           my hands and mind! I am a person that likes to be busy and likes a
//           challenged with hard work and i will do what it takes to solve any
//           problem that comes my way. I am a great team player I will prove to my
//           team and to my boss that I am a hard worker and when I solve a problem
//           by researching and or asking others for help to solve the problem it
//           gives me such great deal of self reward and happiness because I have
//           learned some new things in the process of solving one problem. I am
//           very edgar to learn more in the tech world because thats where I
//           believe the world is and I want to be part of it by helping the world
//           grow. Thank you for taking the time to read a little about me. I hope
//           you have a great day!
//         </p>
//       </span>
//       <figure>
//         <figcaption>
//           <picture>
//             <img src='https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/264213786_10219268932454284_1802520244668777983_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9RbVqHCaXV0Q7kNvgHPM5QA&_nc_ht=scontent-bos5-1.xx&cb_e2o_trans=t&oh=00_AYCjfEdoIRvgsebk3S_tBioF44Qku1ywGi95MnUuIetPpQ&oe=6656A2BC'></img>
//           </picture>
//         </figcaption>
//       </figure>
//     </div>
//   );
// }

// export default About;

