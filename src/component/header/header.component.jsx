import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img className='logo-img' src={Logo} alt='Company Logo' title='Home' />

				<p>Red Rock Tennis Co.</p>
			</div>
			<ul className='header-links'>
				<Link to='/statsandnews'>
					<li className='header-item'>Stats & News</li>
				</Link>
				<Link to='/store'>
					<li className='header-item'>Store</li>
				</Link>
				<Link to='/blogandvideos'>
					<li className='header-item'>Blog & Videos</li>
				</Link>
				<Link to='/login'>
					<li className='header-item'>Login / Sign Up</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header;
