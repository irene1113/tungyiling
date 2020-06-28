import React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar from 'components/molecules/Sidebar';

const stories = storiesOf('molecules/Sidebar', module);

stories.add('__interactive', () => <Sidebar />, {
	redux: {
		data: {
			routing: {
				pathname: '',
			},
			global: {
				menu: {
					open: false,
					show: false,
				},
			},
		},
	},
});

stories.add('show', () => <Sidebar />, {
	redux: {
		data: {
			routing: {
				pathname: '',
			},
			global: {
				menu: {
					open: false,
					show: true,
				},
			},
		},
	},
});

stories.add('open', () => <Sidebar />, {
	redux: {
		data: {
			routing: {
				pathname: '',
			},
			global: {
				menu: {
					open: true,
					show: true,
				},
			},
		},
	},
});
