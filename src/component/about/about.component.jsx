import React from "react";
import "./about.style.scss";

const About = () => {
	return (
		<div className='about-section'>
			<div className='about-item item-75'>
				<h2>Get Ready for the Upcoming Tourney</h2>

				<p>Who will take the womens chamionship at Wemberly?</p>
				<p>Barty? Pliskova? Svitolina?</p>
				<a href='#'>Read more...</a>
			</div>
			<div className='about-item item-25'>
				<h2>Best Racquets For Beginners</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
					laborum doloribus provident consectetur corrupti accusantium!
				</p>
				<a href='#'>Read more...</a>
			</div>
		</div>
	);
};

export default About;
