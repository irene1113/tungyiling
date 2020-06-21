import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const FullNameTitle = ({ className, fontSize = 110 }) => (
	<div className={classnames(styles.fullNameTitle, className)}>
		<span style={{ fontSize: `${fontSize}px` }}>YILING</span>
		<span style={{ fontSize: `${fontSize}px` }}>TUNG</span>
	</div>
);

export default FullNameTitle;
