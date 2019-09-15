import React from "react";
import "./special.style.scss";
import SpecialPhoto from "../../assets/special.jpg";
import SpecialPhoto1 from "../../assets/wilson-logo.png";

import SpecialPhoto4 from "../../assets/prince-logo.png";
import SpecialPhoto5 from "../../assets/yonex-logo.png";

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
						<div>
							<img
								src={SpecialPhoto4}
								alt='babolat logo'
								className='brand-img'
							/>
						</div>
						<div>
							<img
								src={SpecialPhoto5}
								alt='babolat logo'
								className='brand-img'
							/>
						</div>
						<div>
							<img
								src={SpecialPhoto5}
								alt='babolat logo'
								className='brand-img'
							/>
						</div>
					</div>
					<div className='brand-container'>
						<div>
							<img
								src={SpecialPhoto5}
								alt='babolat logo'
								className='brand-img'
							/>
						</div>
						<div>
							<img
								src={SpecialPhoto5}
								alt='babolat logo'
								className='brand-img'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Special;
