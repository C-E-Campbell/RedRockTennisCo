import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "Mens",
					imageUrl: ".././assets/mens1.jpg",
					id: 1,
					linkUrl: "shop/mens"
				},
				{
					title: "Womens",
					imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
					id: 2,
					linkUrl: "shop/womens"
				},
				{
					title: "Gear",
					imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
					id: 3,
					linkUrl: "shop/gear"
				}
			]
		};
	}

	render() {
		return (
			<div>
				{this.state.sections.map((section) => {
					<MenuItem title={section.title} />;
				})}
			</div>
		);
	}
}

export default Directory;
