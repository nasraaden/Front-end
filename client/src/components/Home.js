import React from 'react';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';

import NavBar from './NavBar.js';

import './Styles/Home.css';

// images
import mockup from '../images/mockup.png';
import floating from '../images/floating.png';

// icons
import { BsPencilSquare } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { BsPhone } from 'react-icons/bs';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='header'>
        <img src={mockup} alt='iphone mockup of this app' />
        <div className='header-right'>
          <h3>Getting tired of losing your exercise lists?</h3>
          <p>
            Weightlifing Journal is the place to keep track of them! Focus on
            your workouts with minimal distraction and clutter.
          </p>
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        </div>
      </div>
      <div className='middle'>
        <div className='section'>
          <BsPencilSquare className='icon' />
          <div className='text'>
            <h4>Create your own exercises</h4>
            <p>
              Weightlifting Journal gives you total control and customization
              over your exercises.
            </p>
          </div>
        </div>
        <div className='section'>
          <BsHeart className='icon' />
          <div className='text'>
            <h4>Track your favorites</h4>
            <p>
              We give you the ability to track your favorite exercises so you
              can keep coming back to them.
            </p>
          </div>
        </div>
        <div className='section'>
          <BsPhone className='icon' />
          <div className='text'>
            <h4>Take it on the go</h4>
            <p>
              View your exercises right from your phone or tablet. Take it to
              the gym or anywhere you want!
            </p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-left'>
          <h2>No distractions and easy to use.</h2>
          <p>
            Weightlifting Journal offers you the ability to create your
            exercises and keep them organized in one place. Designed from the
            ground up to be a distraction-free experience, the minimalist
            interface helps you focus on your exercises.
          </p>
          <Link to='/signup'>
            <button>Try for Free</button>
          </Link>
        </div>
        <img src={floating} alt='floating screenshot of app' />
      </div>
      <div className='footer'>
        <MdCopyright />
        <h3>Copyright 2020</h3>
      </div>
    </div>
  );
};

export default Home;
