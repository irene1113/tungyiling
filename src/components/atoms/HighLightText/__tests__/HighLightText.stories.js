import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import HighLightText from 'components/atoms/HighLightText';

const stories = storiesOf('atoms/HighLightText', module);

stories.add('__interactive', () => <HighLightText>{text('text', 'EXPERIENCE')}</HighLightText>);
