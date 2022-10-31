import React, { useEffect } from 'react';

const Homepage = () => {
	useEffect(() => {
		console.log('Inside Homepages useEffect []!');
	}, []);
	return <h1>Welcome to Roshambo!</h1>;
};

export default Homepage;
