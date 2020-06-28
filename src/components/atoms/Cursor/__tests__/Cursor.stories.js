import React from 'react';
import { storiesOf } from '@storybook/react';

import Cursor from 'components/atoms/Cursor';

const stories = storiesOf('atoms/Cursor', module);

stories.add('__interactive', () => <Cursor />, {
	redux: {
		data: {
			global: {
				menu: {
					open: true,
				},
			},
		},
	},
});

stories.add('small', () => <Cursor />, {
	redux: {
		data: {
			global: {
				menu: {
					open: true,
				},
			},
		},
	},
});
