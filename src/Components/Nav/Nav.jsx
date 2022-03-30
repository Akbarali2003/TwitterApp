import React from 'react';
import './Nav.scss';
import HomeImg from '../../Assets/Images/home.svg';
import ExploreImg from '../../Assets/Images/explore.svg';
import MessagesImg from '../../Assets/Images/messages.svg';
import NotificationsImg from '../../Assets/Images/notifications.svg';
import BookmarksImg from '../../Assets/Images/bookmarks.svg';
import ProfileImg from '../../Assets/Images/profile.svg';
import ListsImg from '../../Assets/Images/lists.svg';
import MoreImg from '../../Assets/Images/more.svg';
import { NavLink } from 'react-router-dom';
function Nav() {
	return (
		<>
			<nav className="header__nav">
				<ul className="header__nav--list">
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="/">
							<img
								src={HomeImg}
								alt="HomeImg"
								width="28"
								height="28"
							/>
							<span className='header__nav--hometext'>Home</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="#">
							<img
								src={ExploreImg}
								alt="ExploreImg"
								width="28"
								height="28"
							/>
							<span>Explore</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="#">
							<img
								src={NotificationsImg}
								alt="NotificationsImg"
								width="28"
								height="28"
							/>
							<span>Notifications</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="#">
							<img
								src={MessagesImg}
								alt="MessagesImg"
								width="28"
								height="28"
							/>
							<span>Messages</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="#">
							<img
								src={BookmarksImg}
								alt="BookmarksImg"
								width="28"
								height="28"
							/>
							<span>Bookmarks</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="#">
							<img
								src={ListsImg}
								alt="ListsImg"
								width="28"
								height="28"
							/>
							<span>Lists</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="/profile">
							<img
								src={ProfileImg}
								alt="ProfileImg"
								width="28"
								height="28"
							/>
							<span>Profile</span>
						</NavLink>
					</li>
					<li className="header__nav--item">
						<NavLink className='header__nav--link' to="#">
							<img
								src={MoreImg}
								alt="MoreImg"
								width="28"
								height="28"
							/>
							<span>More</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Nav
