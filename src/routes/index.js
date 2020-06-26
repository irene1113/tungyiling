import React from 'react';

import ProjectsRoute from './Projects';
import AboutRoute from './About';

const routes = {
	path: '/',
	components: () => [],
	render: (_, children) => children,
	onEnter: async ({ next }) => {
		console.log('on Enter Root');
		const children = await next();
		console.log('on Enter Root / end');

		return children;
	},
	children: [
		{
			path: '',
			components: () => [import(/* webpackChunkName: 'home' */ './Home')],
			render: ([Home]) => <Home />,
			onEnter: async ({ next }) => {
				console.log('on Enter Home');
				const children = await next();
				console.log('on Enter Home / end');
				return children;
			},
		},
		ProjectsRoute,
		AboutRoute,
	],
};

export default routes;
