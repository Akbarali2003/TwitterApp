import React from 'react';
import './Header.scss';
import HomeNav from '../../../Components/Nav/Nav';
import HomeLogo from '../../../Assets/Images/home-logo.svg';
import UserLittleImg from '../../../Assets/Images/userlittleimg.jpg';
import ThreePoint from '../../../Assets/Images/three-point.svg';
function HomeHeader() {
	return (
		<>
			<header className="header">
				<img src={HomeLogo} alt="home-logo" className="header__logo" />
				<HomeNav />
				<button className="header__btn">Tweet</button>
				<span className="header__user">
					<img src={UserLittleImg} alt="UserLittleImg" />
					<span className="header__user--lname">
						<p className="header__user--name">Bobur</p>
						<p className="header__user--username">
							@bobur_mavlonov
						</p>
					</span>
					<img src={ThreePoint} alt="ThreePoint" />
				</span>
			</header>
		</>
	);
}
export default HomeHeader;
