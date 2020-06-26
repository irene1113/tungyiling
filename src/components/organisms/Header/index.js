import React from 'react';
import classnames from 'classnames';

import { useRouting } from 'models/routing';

import Logo from 'images/logo.inline.svg';
import ColorBlockIcon from 'images/icon/color-block.inline.svg';

import Link from 'components/atoms/Link';

import styles from './index.css';

const LinkItem = ({ className, to, active, children }) => (
	<div className={classnames(styles.linkItem, className, active && styles.active)}>
		{active && (
			<div className={styles.colorBlock}>
				<ColorBlockIcon />
			</div>
		)}
		<Link to={to} className={classnames(className, active && styles.active)}>
			{children}
		</Link>
	</div>
);

const Header = () => {
	const [{ pathname }] = useRouting();
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<Logo />
			</Link>

			<div className={styles.nav}>
				<LinkItem to="/projects" active={pathname === '/projects'}>
					PROJECTS
				</LinkItem>
				<LinkItem to="/about" active={pathname === '/about'}>
					ABOUT
				</LinkItem>
				<LinkItem to="/contact" active={pathname === '/contact'}>
					CONTACT
				</LinkItem>
			</div>
		</header>
	);
};

export default Header;
