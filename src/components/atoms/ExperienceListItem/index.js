import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const ExperienceListItem = ({ className, duration = '', content = '' }) => (
	<div className={classnames(styles.experienceListItem, className)}>
		<div className={styles.duration}>{duration}</div>
		<div className={styles.content}>{content}</div>
	</div>
);

export default ExperienceListItem;
