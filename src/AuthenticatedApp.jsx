import React from 'react';
import './App.scss';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

import { Routes, Route } from 'react-router-dom';
function AuthenticatedApp() {
	return (
		<>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
