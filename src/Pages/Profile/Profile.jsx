import React from 'react';
import './Profile.scss';
import ProfileHeader from './Header/Header';
function Profile() {
	return (
		<>
			<div className="profile">
				<ProfileHeader />
				<hr className="profile__one--line" />
				
			</div>
		</>
	);
}

export default Profile;
