import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
import HomeHeader from './Header/Header';
import HomeMain from './Main/Main';
function Home() {
	return (
		<>
			<div className="home">
				<HomeHeader />
				<hr className="home__one--line" />
				<HomeMain />
			</div>
		</>
	);
}

export default Home;
