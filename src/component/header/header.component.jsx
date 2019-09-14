import React from "react";
import "./header.style.scss";

const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img className='logo-img' src='./logo.png' alt='Company Logo' />
			</div>
			<ul className='header-links'>
				<li className='header-item'>News</li>
				<li className='header-item'>Store</li>
				<li className='header-item'>Login / Sign Up</li>
			</ul>
		</div>
	);
};

export default Header;
