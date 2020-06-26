import React from 'react';
import classnames from 'classnames';

import Logo from 'images/logo.inline.svg';
import ColorBlockIcon from 'images/icon/color-block.inline.svg';

import Link from 'components/atoms/Link';

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
		<div className={styles.logo}>
			<Logo />
		</div>
		<div className={classnames(styles.colorBlock, styles.primary)}>
			<ColorBlockIcon />
		</div>
		<div className={classnames(styles.colorBlock, styles.gray)}>
			<ColorBlockIcon />
		</div>
		<div className={styles.pageLinks}>
			<LinkItem to="/projects" text="PROJECTS" />
			<LinkItem to="/about" text="ABOUT" />
			<LinkItem to="/contact" text="CONTACT" />
		</div>
	</div>
);

export default LandingPageLayout;
