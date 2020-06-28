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
		},
	},
});
