import React from 'react';

import { NavLink } from 'react-router-dom';

// icons
import { IoIosFitness } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { FiHeart } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

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
        <AiOutlineMenu className='nav-open' onClick={onOpen} />
        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody className='drawer-bodys'>
              <IoMdClose className='nav-close' onClick={onClose} />
              <NavLink className='drawer-link' to='/workouts'>
                My Exercises
              </NavLink>
              <NavLink className='drawer-link' exact to='/favorites'>
                My Favorites
              </NavLink>
              <NavLink className='drawer-link' to='/add-workout'>
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
