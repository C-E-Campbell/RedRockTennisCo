import React from "react";
import "./special.style.scss";

import SpecialPhoto1 from "../../assets/wilson-logo.png";
import SpecialPhoto2 from "../../assets/babolat-logo.png";
import SpecialPhoto3 from "../../assets/Adidas-Logo.png";
import SpecialPhoto4 from "../../assets/prince-logo.png";
import SpecialPhoto5 from "../../assets/yonex-logo.png";

const Special = () => {
	return (
		<div className='container'>
			<h2 data-aos='fade-up'>Be Stronger Than Your Excuses.</h2>
			<div className='special-section'>
				<div className='special-item'>
					<div className='special-photo special-bg special-bg-racquet'>
						<p className='img-text'>Gear</p>
					</div>
				</div>
				<div className='special-item'>
					<h4>
						We carry the best brands in the industry. Wilson, Babolat, Head. You
						name it, We got it!
					</h4>
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
								src={SpecialPhoto1}
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
								src={SpecialPhoto2}
								alt='babolat logo'
								className='brand-img'
							/>
						</div>
						<div>
							<img src={SpecialPhoto3} alt='head logo' className='brand-img' />
						</div>
					</div>
				</div>
			</div>
			<div className='special-section'>
				<div className='special-item'>
					<div className='special-photo special-bg special-bg-men'>
						<p className='img-text'> Mens</p>
					</div>
				</div>
				<div className='special-item'>
					<div className='special-photo special-bg special-bg-women'>
						<p className='img-text'> Womens</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Special;
