import React from 'react';
import NavBar from '../components/NavBar';

function About() {
  return (
    <div className='About'>
      <h1>Joe's contact and thing's to know about him!</h1>

      <div id='contact-info'>
        <li>Phone: 203-231-1234</li>
        <li>City: Shelton</li>
        <li>State: Connecticut</li>
        <li>Zip: 06484</li>
        <li>Email: JoeReis0814@gmail.com</li>
        <li>
          <a href='https://www.linkedin.com/in/joe-reis-software-developer-b28980'>
            LinkedIn
          </a>
        </li>
        <li>
          <a href='https://github.com/dashboard'>GitHub</a>
        </li>
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

      <div id='learn-pic'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8H08lXRzIyfbBqGDATggJeB8OIGCZYIPbg&s'
          alt='learn new things'
        />
      </div>

      <p>
        <span style={{ color: 'lightblue' }}>
          Hello, my name is
          <span style={{ color: 'yellows' }}>solid" Joe Reis</span>, I am a very
          lucky guy to have the family I have and my son, he is my world. I love
          teaching him the things I know, he plays a big roll in my life and I
          want to be the best I can for him, everything I do I make sure he is
          part of it, I try to be the best I can be so he can have a great role
          model to look up too! I am in the construction field as a labor and I
          also am a automotive mechanic/anything with an engine I can diagnose
          and repair.
          <strong>
            <span style={{ color: 'yellow' }}>
              When I am asked what I do for work I like to say,
              <em>"I am a Jack of all trades master of none!"</em>
            </span>
          </strong>
          Meaning in my words, being a labor on a job I had to learn a lot of
          the different trades on a job site, I had to learn their tools and
          their materials to get the job done. wether it would be paving a
          highway, heavy machine operator, or assist the electrician, carpenter,
          iron worker, a plumber, ect, but whatever it maybe be, I was a great
          team player and willing to do whatever it take to get the job done. I
          have seen my grandfather, my own father and some uncles work
          construction, they got hurt pretty bad and when they retired and got
          older they are in just pain and broken after all their years of
          working and now i'm a father and I want to change the cycle of
          construction so my son can see me now and hope he doesn't do the
          construction type of back breaking labor. I can now teach him how to
          work with his hands, thats the exciting part is to pass down what I
          know to him. I had started construction in 2011, before that I was an
          automotive mechanic. In 2006 i had graduated high school and went
          right into an 1 year tech school for automotive to get certified as a
          machanic. When I was younger I would fix the tractor and other small
          engines, then as i got older 14, 15 i started working on cars with a
          friend learned a lot and now i work on my own cars to this day from
          small problems to big problems replace an engine or transmission. I
          have always found Engines very interesting my mind would wonder and
          think how the inside of the engine all those little parts would make
          the engine turn over, how the transmission would be the cars
          drivetrain, the axels has two of the same ends one end would be inside
          the transmission and the other end would be inside the wheel hub and
          that will make the cars tires stand and roll. I had left the
          automotive field because I wanted to make more money and joined
          construction in 2011, it allowed me to see how more things designed
          and built, I like to think to myself I have a mind LIKE AND ENGINEER!
          The world is changing into a very tech world with the cars now being
          electric and the homes being smart homes, which now brings me to my
          next chapter in life as a software developer. I now would like to now
          say I specializing in Full Stack software development/Engineering as
          javascript the language I know and plan to learn more in the near
          future. I am someone who love's to explore new things, figure out how
          things work by using my hands and mind! I am a person that likes to be
          busy and likes a challenged with hard work and i will do what it takes
          to solve any problem that comes my way. I am a great team player I
          will prove to my team and to my boss that I am a hard worker and when
          I solve a problem by researching and or asking others for help to
          solve the problem it gives me such great deal of self reward and
          happiness because I have learned more new things in the process of
          solving one problem. I believe with this new chapter im pursuing I
          will be more . In this portfolio you will see the langues I know and
          the tools I use to build the projects and to code with. Thank you for
          taking the time to read a little about me and learn the new skills I
          have and I hope you have a great day!
        </span>
      </p>

      <figure>
        <figcaption>
          <picture>
            <img
              style='border:2px red solid'
              src='https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/264213786_10219268932454284_1802520244668777983_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9RbVqHCaXV0Q7kNvgHPM5QA&_nc_ht=scontent-bos5-1.xx&cb_e2o_trans=t&oh=00_AYCjfEdoIRvgsebk3S_tBioF44Qku1ywGi95MnUuIetPpQ&oe=6656A2BC'
            ></img>
          </picture>
        </figcaption>
      </figure>
    </div>
  );
}

export default About;

