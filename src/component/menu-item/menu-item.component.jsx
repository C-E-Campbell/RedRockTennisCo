import React from "react";
import "./menu-item.component.scss";
const MenuItem = ({ title }) => {
	return (
		<div className='menu-item'>
			<div className='content'>
				<h1 className>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
