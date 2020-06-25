import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import CaseListItem from 'components/atoms/CaseListItem';

const stories = storiesOf('atoms/CaseListItem', module);

stories.add('__interactive', () => (
	<CaseListItem
		title={text('title', 'ISC Reporting')}
		duration={text('duration', '2019 - 2020')}
		content={text(
			'content',
			'description description description description description description.',
		)}
	/>
));
