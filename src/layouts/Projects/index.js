import React from 'react';

import BigTitle from 'components/atoms/BigTitle';
import CaseListItem from 'components/atoms/CaseListItem';

import { caseList, caseData } from 'util/resources/cases';

import styles from './index.css';

const ProjectsLayout = () => (
	<div className={styles.projectsLayout}>
		<BigTitle>WEB DEVELOPMENT</BigTitle>
		<div className={styles.content}>
			{caseList.map(id => (
				<CaseListItem
					key={id}
					title={caseData[id].title}
					duration={caseData[id].duration}
					content={caseData[id].content}
					tags={caseData[id].tags}
					link={caseData[id].link}
				/>
			))}
		</div>
	</div>
);

export default ProjectsLayout;
