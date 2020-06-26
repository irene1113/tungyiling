import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import ExperienceListItem from 'components/atoms/ExperienceListItem';

const stories = storiesOf('atoms/ExperienceListItem', module);

stories.add('__interactive', () => (
	<ExperienceListItem
		duration={text('duration', '2017 - Now')}
		content={text('content', '25sprout, Frontend Developer')}
	/>
));
