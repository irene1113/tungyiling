import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import BigTitle from 'components/atoms/BigTitle';

const stories = storiesOf('atoms/BigTitle', module);

stories.add('__interactive', () => <BigTitle>{text('title', 'WEB DEVELOPMENT')}</BigTitle>);
