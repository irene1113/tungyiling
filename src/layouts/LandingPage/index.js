import React from 'react';
import classnames from 'classnames';

import Link from 'components/atoms/Link';
import FullNameTitle from 'components/atoms/FullNameTitle';

import styles from './index.css';

const LinkItem = ({ to, text = '' }) => (
	<Link to={to} className={classnames(styles.linkWrapper)}>
		{text.split('').map((item, i) => (
			// eslint-disable-next-line react/no-array-index-key
			<div key={i} className={styles.letter}>
				{item}
			</div>
		))}
	</Link>
);

const LandingPageLayout = () => (
	<div className={styles.landingPageLayout}>
		<FullNameTitle className={styles.fullname} />
		<div className={styles.pageLinks}>
			<LinkItem to="/projects" text="PROJECTS" />
			<LinkItem to="/about" text="ABOUT" />
			<LinkItem to="/contact" text="CONTACT" />
		</div>
	</div>
);

export default LandingPageLayout;
