import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import FullNameTitle from 'components/atoms/FullNameTitle';

const stories = storiesOf('atoms/FullNameTitle', module);

stories.add('__interactive', () => <FullNameTitle fontSize={number('fontSize', 110)} />);
