import React from 'react';

export default {
	path: '/about',
	components: () => [import(/* webpackChunkName: 'about' */ './component')],
	render: ([About]) => <About />,
};
