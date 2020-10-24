import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationBar from '../NavigationBar/NavigationBar';

import './Header.css'

const Header = () => {
    return (
        <div className="header-background mb-5">
          <NavigationBar></NavigationBar>
          <HeaderMain></HeaderMain>
          
        </div>
    );
};

export default Header;