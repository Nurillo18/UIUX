import React from 'react';
import headerLogo from '../../Assets/Images/header__logo.svg';
import NavList from '../NavList/NavList';
import Menu from "../../Assets/Images/menu-icons.png"
import './header.scss';

function Header() {
	const [open, setOpen] = React.useState("")
	const [rotate, setRotate] = React.useState("")
	function openedModal() {
		setOpen("open")
		setRotate("rotate")
		if(open){
			setOpen("")
			setRotate("")
		}
	}
	return (
		<div className='container'>
			{/* Basic Codes in Header Start */}
			<div className='header'>
				<a className='header__logo-link' href='/'>
					<img
						className='header__logo-img'
						src={headerLogo}
						alt='Header logo'
						width='176'
						height='41'
					/>
				</a>
				{/* Header navbar Start */}
				<nav className='header__navbar nav'>
					<NavList/>
				</nav>
				{/* Header navbar End */}
				<button className={`hamburger-btn ${rotate}`} onClick={openedModal}>
					<img className='hamburger-img' src={Menu} alt="Menu icon" width="25" height="25" />
				</button>
				<div className={`modal ${open}`}>
					<ul className='modal__list'>
						<li className="modal__item">
							<a href="#link" className="modal__link">Home</a>
						</li>
						<li className="modal__item">
							<a href="#link" className="modal__link">About </a>
						</li>
						<li className="modal__item">
							<a href="#link" className="modal__link">Pages </a>
						</li>
						<li className="modal__item">
							<a href="#link" className="modal__link">Contact us </a>
						</li>
					</ul>
				</div>
			</div>
			{/* Basic Codes in Header End */}
		</div>
	);
}

export default Header;
