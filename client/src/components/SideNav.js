import React from 'react';

import { NavLink } from 'react-router-dom';

// icons
import { TiHomeOutline } from 'react-icons/ti';
import { GoPlus } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';

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
        <TiHomeOutline className='side-nav-icon' />
        Home
      </NavLink>
      <NavLink
        className='side-nav-link'
        activeClassName='side-active'
        to='/add-workout'
      >
        <GoPlus className='side-nav-icon' />
        Add Exercise
      </NavLink>
      <NavLink
        className='side-nav-link'
        activeClassName='side-active'
        exact
        to='/settings'
      >
        <BsPerson className='side-nav-icon' />
        Settings
      </NavLink>
    </div>
  );
};

export default SideNav;
