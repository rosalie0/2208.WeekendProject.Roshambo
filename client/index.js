import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux relevant imports
import { Provider } from 'react-redux';
import store from '../features/store';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);
