import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const CaseListItem = ({
	className,
	title = '',
	duration = '',
	content = '',
	tags = [],
	link = '',
}) => (
	<div className={classnames(styles.caseListItem, className)}>
		<div className={styles.title}>{title}</div>
		<div className={styles.duration}>{duration}</div>

		{content !== '' && <div className={styles.content}>{content}</div>}

		{tags.length > 0 && (
			<div className={styles.tags}>
				{tags.map(item => (
					<div key={item}>#{item}</div>
				))}
			</div>
		)}

		{link !== '' && (
			<a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
				Link
			</a>
		)}
	</div>
);

export default CaseListItem;
