import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menu-title'><span className='menu-title-orange'>Dev</span>challenge.io</h1>
            <ul className='menu-list'>
                <li>Buttons</li>
                <li className='menu-list-item-active'>Inputs</li>
            </ul>
        </div>
    )
}

export default Menu;