import React from 'react';
import { NavLink } from 'react-router-dom';
import './navlist.scss';
function NavList() {
	return (
		<ul className='nav__list '>
			<li className='nav__item'>
				<NavLink className="nav__link" to='/home'>Home</NavLink>
			</li>
			<li className='nav__item'>
				<NavLink className="nav__link" to='/about'>About Me</NavLink>
			</li>
			<li className='nav__item'>
				<NavLink className="nav__link" to='/pages'>Pages</NavLink>
			</li>
			<li className='nav__item'>
				<NavLink className="nav__link" to='/contact'>Contact Us</NavLink>
			</li>
		</ul>
	);
}

export default NavList;
