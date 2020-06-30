import React from 'react';

import { NavLink } from 'react-router-dom';

// icons
import { IoIosFitness } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';

// styles
import './Styles/WorkoutList.css';

const SideNav = () => {
  return (
    <div className='side-nav'>
      <NavLink
        className='side-nav-link'
        activeClassName='side-active'
        to='/workouts'
      >
        <IoIosFitness className='side-nav-icon' />
        My Exercises
      </NavLink>
      <NavLink
        className='side-nav-link'
        activeClassName='side-active'
        exact
        to='/favorites'
      >
        <FiHeart className='side-nav-icon' />
        My Favorites
      </NavLink>
      <NavLink
        className='side-nav-link'
        activeClassName='side-active'
        to='/add-workout'
      >
        <GoPlus className='side-nav-icon' />
        Add Exercise
      </NavLink>
      {/* <NavLink
        className='side-nav-link'
        activeClassName='side-active'
        exact
        to='/settings'
      >
        <BsPerson className='side-nav-icon' />
        Settings
      </NavLink> */}
    </div>
  );
};

export default SideNav;
