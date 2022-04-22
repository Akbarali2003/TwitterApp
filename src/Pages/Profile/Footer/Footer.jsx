import React from 'react';
import './Footer.scss';
import SettingImg from '../../../Assets/Images/settings.svg';
import ThreePoint from '../../../Assets/Images/three-point.svg';
import UserAccountImg1 from '../../../Assets/Images/useraccountimg1.jpg';
import UserAccountImg2 from '../../../Assets/Images/useraccountimg2.jpg';
import PostImg1 from '../../../Assets/Images/postimg1.jpg';
import PostImg2 from '../../../Assets/Images/postimg2.jpg';
import PostImg3 from '../../../Assets/Images/postimg3.jpg';
import PostImg4 from '../../../Assets/Images/postimg4.jpg';
import PostImg5 from '../../../Assets/Images/postimg5.jpg';
import PostImg6 from '../../../Assets/Images/postimg6.jpg';

function ProfileFooter() {
	return (
		<>
			<footer className="footer">
				<input className="footer__search" type="text" placeholder='Search Twitter' />
				<div className='footer__postimg'>
					<img src={PostImg1} alt="PostImg1" />
					<img src={PostImg2} alt="PostImg2" />
					<img src={PostImg3} alt="PostImg3" />
					<img src={PostImg4} alt="PostImg4" />
					<img src={PostImg5} alt="PostImg5" />
					<img src={PostImg6} alt="PostImg6" />
				</div>
				<div className="footer__follows">
					<h3 className="footer__follows--text">You might like</h3>
					<ul className="footer__follows--list">
						<li className="footer__follows--item">
							<div className="footer__follows--user">
								<img
									src={UserAccountImg1}
									alt="UserAccountImg1"
								/>
								<span className="footer__follows--userinformation">
									<p className="footer__follows--name">
										Mushtariy
									</p>
									<p className="footer__follows--username">
										@Mushtar565266
									</p>
								</span>
							</div>
							<button className="footer__follows--btn">
								Follow
							</button>
						</li>
						<li className="footer__follows--item">
							<div className="footer__follows--user">
								<img
									src={UserAccountImg2}
									alt={UserAccountImg2}
								/>
								<span className="footer__follows--userinformation">
									<p className="footer__follows--name">
										Shuhratbek
									</p>
									<p className="footer__follows--username">
										@mrshukhrat
									</p>
								</span>
							</div>
							<button className="footer__follows--btn">
								Follow
							</button>
						</li>
					</ul>
					<button className="footer__show--btn">Show more</button>
				</div>
				<div className="footer__trends">
					<span className="footer__trends--setting">
						<h3 className="footer__trends--title">
							Trends for you
						</h3>
						<img
							src={SettingImg}
							alt="SettingImg"
							width="24"
							height="24"
						/>
					</span>
					<ul className="footer__trends--list">
						<li className="footer__trends--item">
							<span className="footer__trends--comments">
								<p className="footer__trends--trend">
									Trending in Germany
								</p>
								<h3 className="footer__trends--revolution">
									Revolution
								</h3>
								<p className="footer__trends--viewing">
									50.4K Tweets
								</p>
							</span>
							<img src={ThreePoint} alt="ThreePoint" />
						</li>
						<li className="footer__trends--item">
							<span className="footer__trends--comments">
								<p className="footer__trends--trend">
									Trending in Germany
								</p>
								<h3 className="footer__trends--revolution">
									Revolution
								</h3>
								<p className="footer__trends--viewing">
									50.4K Tweets
								</p>
							</span>
							<img src={ThreePoint} alt="ThreePoint" />
						</li>
						<li className="footer__trends--item">
							<span className="footer__trends--comments">
								<p className="footer__trends--trend">
									Trending in Germany
								</p>
								<h3 className="footer__trends--revolution">
									Revolution
								</h3>
								<p className="footer__trends--viewing">
									50.4K Tweets
								</p>
							</span>
							<img src={ThreePoint} alt="ThreePoint" />
						</li>
					</ul>
					<button className="footer__show--btn">Show more</button>
				</div>
			</footer>
		</>
	);
}
export default ProfileFooter;
