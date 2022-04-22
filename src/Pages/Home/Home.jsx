import React from 'react';
import './Home.scss';
import HomeHeader from './Header/Header';
import HomeMain from './Main/Main';
import HomeFooter from './Footer/Footer';
function Home() {
	return (
		<>
			<div className="home">
		{/*<HomeHeader />
				<hr className="home__one--line" />
				<HomeMain />
				<hr className="home__one--line" />
				<HomeFooter />*/}
	<h1>Home</h1>
			</div>
		</>
	);
}

export default Home;
