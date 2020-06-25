import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const CaseListItem = ({ className, title = '', duration = '', content = '' }) => (
	<div className={classnames(styles.caseListItem, className)}>
		<div className={styles.title}>{title}</div>
		<div className={styles.duration}>{duration}</div>
		<div className={styles.content}>{content}</div>
	</div>
);

export default CaseListItem;
