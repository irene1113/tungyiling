import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const BigTitle = ({ className, children }) => (
	<div className={classnames(styles.bigTitle, className)}>{children}</div>
);

export default BigTitle;
