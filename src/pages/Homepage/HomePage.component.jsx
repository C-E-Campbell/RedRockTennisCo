import React from "react";
import Header from "../../component/header/header.component";
import Hero from "../../component/hero/hero.component";
import About from "../../component/about/about.component";
import Special from "../../component/special/special.component";
import Footer from "../../component/footer/footer.component";
import Email from "../../component/email/email.component";

const HomePage = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Special />
			<Email />
			<About />
			<Footer />
		</div>
	);
};

export default HomePage;
