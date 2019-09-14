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
						Welcome to <span>Red Rock Tennis Co</span>. The #1 Online Place for
						all things tennis
					</p>

					<p>
						Check upcoming matches or snag some new shoes.{" "}
						<span>One Stop Shop!</span>
					</p>
					<a className='hero-btn hero-btn-primary'>Visit Store</a>
					<a className='hero-btn hero-btn-secondary'>Check the Rankings</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
