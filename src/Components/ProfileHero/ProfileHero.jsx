import React from 'react';
import './ProfileHero.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import Tweets from './Tweets/Tweets';
function ProfileHero() {
	return (
		<>
			<div className="profilehero">
				<ul className="profilehero__list">
					<li className="profilehero__item">
						<NavLink className="profilehero__link" to="tweets">
							Tweets
						</NavLink>
					</li>
					<li className="profilehero__item">
						<NavLink className="profilehero__link" to="replies">
							Tweets & replies
						</NavLink>
					</li>
					<li className="profilehero__item">
						<NavLink className="profilehero__link" to="media">
							Media
						</NavLink>
					</li>
					<li className="profilehero__item">
						<NavLink className="profilehero__link" to="likes">
							Likes
						</NavLink>
					</li>
				</ul>
			</div>
			<hr className="profilehero__line" />
			<Routes>
				<Route path="tweets" element={<Tweets />} />
				<Route path="replies" element={<p>replies</p>} />
				<Route path="media" element={<p>media</p>} />
				<Route path="likes" element={<p>likes</p>} />
			</Routes>
		</>
	);
}
export default ProfileHero;
