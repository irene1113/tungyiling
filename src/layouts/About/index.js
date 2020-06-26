/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Photo from 'images/photo.jpg';

import BigTitle from 'components/atoms/BigTitle';
import HighLightText from 'components/atoms/HighLightText';
import ExperienceListItem from 'components/atoms/ExperienceListItem';

import styles from './index.css';

const AboutLayout = () => (
	<div className={styles.aboutLayout}>
		<div className={styles.info}>
			<BigTitle className={styles.title}>Hey, there!</BigTitle>
			<div className={styles.content}>
				<div className={styles.intro}>
					<span>I'm Yiling Tung.</span>
					<span>A frontend web developer who fascinated by visual programming.</span>
					<span>
						Hope to create an application that can make the world more convenient and colorful.
					</span>
				</div>
				<div className={styles.experience}>
					<HighLightText className={styles.title}>EXPERIENCE</HighLightText>
					<div className={styles.list}>
						<ExperienceListItem duration="2017 - Now" content="25sprout, Frontend Developer" />
						<ExperienceListItem duration="2016 - 2017" content="KKBOX, UI & UX Designer Intern" />
						<ExperienceListItem
							duration="2013 - 2017"
							content="National Taipei University of Education Department of Digital Technology Design"
						/>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.photo} style={{ backgroundImage: `url(${Photo})` }} />
	</div>
);

export default AboutLayout;
