import React from "react";
import "./special.style.scss";
import SpecialPhoto from "../../assets/special.jpg";

const Special = () => {
	return (
		<div className='container'>
			<h2>Be Stronger Than Your Excuses.</h2>
			<div className='special-section'>
				<div className='special-item'>
					<div className='special-photo special-bg'>
						<p className='img-text'>Browse Racquets</p>
					</div>
				</div>
				<div className='special-item'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
					quia quis labore blanditiis ex porro consequatur, omnis aut quod
					illum!
				</div>
			</div>
		</div>
	);
};

export default Special;
