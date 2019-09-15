import React from "react";
import "./special.style.scss";
import SpecialPhoto from "../../assets/special.jpg";

const Special = () => {
	return (
		<div className='container'>
			<h2 data-aos='fade-up'>Be Stronger Than Your Excuses.</h2>
			<div className='special-section'>
				<div className='special-item'>
					<div className='special-photo special-bg'>
						<p className='img-text'>Browse Racquets</p>
					</div>
				</div>
				<div className='special-item'>
					We carry the best brands in the industry. Wilson, Babolat, Head. You
					name it, We got it!
					<div className='brand-container'>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className='brand-container'>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Special;
