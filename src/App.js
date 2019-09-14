import React from "react";
import Header from "./component/header/header.component";
import Hero from "./component/hero/hero.component";
import About from "./component/about/about.component";
import Special from "./component/special/special.component";
function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Special />
			<About />
		</div>
	);
}

export default App;
