import React from 'react';

export default {
	path: '/projects',
	components: () => [import(/* webpackChunkName: 'projects' */ './component')],
	render: ([Projects]) => <Projects />,
};
