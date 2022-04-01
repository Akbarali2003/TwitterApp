import React from 'react';
import './Profile.scss';
import ProfileHeader from './Header/Header';
import ProfileMain from './Main/Main';
import ProfileFooter from './Footer/Footer';
function Profile() {
	return (
		<>
			<div className="profile">
				<ProfileHeader />
				<hr className="profile__one--line" />
				<ProfileMain/>
				<hr className="profile__two--line" />
				<ProfileFooter/>
			</div>
		</>
	);
}

export default Profile;
