import React from "react";
import Header from "./component/header/header.component";
import Hero from "./component/hero/hero.component";
import About from "./component/about/about.component";
import Special from "./component/special/special.component";
import Footer from "./component/footer/footer.component";
function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Special />
			<About />
			<Footer />
		</div>
	);
}

export default App;
