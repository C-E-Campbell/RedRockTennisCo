import React from "react";
import "./hero.style.scss";

const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-box-container'>
				<div className='hero-box'>
					<h1>Get Gear.</h1>
					<h1>Check Stats.</h1>
					<h1>Train.</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
						fugiat.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
						dolores.
					</p>
					<a className='hero-btn hero-btn-primary'>Visit Store</a>
					<a className='hero-btn hero-btn-secondary'>Check the Rankings</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
