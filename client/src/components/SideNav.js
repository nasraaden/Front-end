import React from 'react';

import { NavLink } from 'react-router-dom';

// icons
import { IoIosFitness } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { FiHeart } from 'react-icons/fi';
import { RiMenu4Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { GrMenu } from 'react-icons/gr';

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/core';

// styles
import './Styles/WorkoutList.css';

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
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
      </div>
      <div className='side-nav-mobile'>
        <GrMenu className='side-nav-mobile-icon' onClick={onOpen} />
        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody className='drawer-bodys'>
              <IoMdClose className='nav-close' onClick={onClose} />
              <NavLink className='side-nav-link' to='/workouts'>
                My Exercises
              </NavLink>
              <NavLink className='side-nav-link' exact to='/favorites'>
                My Favorites
              </NavLink>
              <NavLink className='side-nav-link' to='/add-workout'>
                Add Exercise
              </NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default SideNav;
