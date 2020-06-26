import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const HighLightText = ({ className, children }) => (
	<div className={classnames(styles.highLightText, className)}>{children}</div>
);

export default HighLightText;
