import React from 'react';
import './Footer.scss';
import SettingImg from '../../../Assets/Images/settings.svg';
import ThreePoint from '../../../Assets/Images/three-point.svg';
function HomeFooter() {
	return (
		<>
			<footer className="footer">
				<input className="footer__search" type="text" />
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
					<button className='footer__show--btn'>Show more</button>
				</div>
			</footer>
		</>
	);
}
export default HomeFooter;
