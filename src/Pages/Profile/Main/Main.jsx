import React from 'react';
import './Main.scss';
import Arrow from '../../../Assets/Images/left-arrow.svg';
import UserBigImg from '../../../Assets/Images/userbigimg.jpg';
import LocationIcon from '../../../Assets/Images/location.svg';
import SkripkaIcon from '../../../Assets/Images/skripka.svg';
import BornIcon from '../../../Assets/Images/bornicon.svg';
import DataIcon from '../../../Assets/Images/dataicon.svg';
import ProfileHero from '../../../Components/ProfileHero/ProfileHero';

function ProfileMain() {
	return (
		<>
			<main className="main">
				<span className="main__tweets">
					<img src={Arrow} alt="Arrow" />
					<span className="main__tweets--value">
						<h3 className="main__tweets--name">Bobur</h3>
						<p className="main__tweets--number">1,070 Tweets</p>
					</span>
				</span>
				<div className="main__user--back">
					<img
						src={UserBigImg}
						alt="UserBigImg"
						width="150"
						height="150"
					/>
					<button className="main__user--editbtn">
						Edit profile
					</button>
				</div>
				<div className="main__user--information">
					<span>
						<h3 className="main__tweets--name">Bobur</h3>
						<p className="main__tweets--number">1,070 Tweets</p>
					</span>
					<p className="main__user--information-job">
						UX&UI designer at <a href="#">@abutechuz</a>
					</p>
				</div>
				<ul className="main__list">
					<li className="main__item">
						<img src={LocationIcon} alt="LocationIcon" />
						<p className="main__item--text">Mashag’daman</p>
					</li>
					<li className="main__item">
						<img src={SkripkaIcon} alt="SkripkaIcon" />
						<a href="#" className="main__item--text">
							t.me/boburjon_mavlonov
						</a>
					</li>
					<li className="main__item">
						<img src={BornIcon} alt="BornIcon" />
						<p className="main__item--text">
							Born November 24, 2000
						</p>
					</li>
					<li className="main__item">
						<img src={DataIcon} alt="DataIcon" />
						<p className="main__item--text">Joined May 2020</p>
					</li>
				</ul>
				<span className='main__follows'>
                    <p className='main__follows--following'><p>67</p> Following</p>
                    <p className='main__follows--follow'><p>47</p> Followers</p>
                </span>
				<ProfileHero/>
				
			</main>
		</>
	);
}
export default ProfileMain;
