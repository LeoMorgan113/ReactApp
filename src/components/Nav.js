import React from 'react';
import './Nav.css';

const Nav = () => {
    return  <nav className='nav'>
        <div className='item'>
            Profile
        </div>
        <div className='item'>
            Messages
        </div>
        <div className='item'>
            News
        </div>
        <div className='item'>
            Music
        </div>
    </nav>
};

export default Nav;