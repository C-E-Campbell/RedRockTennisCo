import React from "react";
import "./email.style.scss";
const Email = () => {
	return (
		<div className='email'>
			<div className='email-container'>
				<p className='email-text'>
					Sign up and receive <span>15% OFF</span> coupon!
				</p>
				<form action='#' className='form-box'>
					<input type='email' placeholder='Email' />
					<input type='submit' />
				</form>
			</div>
		</div>
	);
};

export default Email;
