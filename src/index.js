import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as Authprovider } from './Context/Authentication';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Authprovider>
				<App />
			</Authprovider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
