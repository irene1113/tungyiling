/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import classnames from 'classnames';

import { useMousemove, useScroll } from 'util/event';
import { useRouting } from 'models/routing';

import { useMenu } from 'models/global';

import Link from 'components/atoms/Link';
import HamburgerIcon from 'images/icon/hamburger.inline.svg';
import CloseIcon from 'images/icon/close.inline.svg';

import styles from './index.css';

const ToggleIcon = ({ isOpen, openMenu, closeMenu, ...props }) => {
	return isOpen ? (
		<CloseIcon onClick={closeMenu} {...props} />
	) : (
		<HamburgerIcon onClick={openMenu} {...props} />
	);
};

const LinkItem = ({ className, to, active, closeMenu = () => {}, children }) => (
	<div className={classnames(styles.linkItem, className, active && styles.active)}>
		<Link to={to} className={classnames(className, active && styles.active)} onClick={closeMenu}>
			{children}
			<span>!!</span>
		</Link>
	</div>
);

const Sidebar = ({ className, fake = false }) => {
	const [{ pathname }] = useRouting();
	const mousePosition = useMousemove();
	const scrollY = useScroll();
	const [{ open, show }, { openMenu, closeMenu, showMenu, hideMenu }] = useMenu();

	useEffect(() => {
		if (scrollY <= 20) {
			showMenu();
		} else if (mousePosition.x <= 100 && !show) {
			showMenu();
		} else if (mousePosition.x > 100 && show) {
			hideMenu();
		}
	}, [mousePosition, scrollY]);

	return (
		<div
			className={classnames(styles.sidebar, className, {
				[styles.open]: open,
				[styles.fake]: fake,
			})}
			style={{ filter: 'url()' }}
		>
			{!fake && (
				<ToggleIcon
					className={classnames(styles.hamburger, { [styles.isShow]: show })}
					style={{
						top: `${open ? 30 : mousePosition.y}px`,
					}}
					isOpen={open}
					openMenu={openMenu}
					closeMenu={closeMenu}
				/>
			)}
			{!fake && (
				<div className={classnames(styles.nav, { [styles.show]: open })}>
					<LinkItem to="/projects" active={pathname === '/projects'} closeMenu={closeMenu}>
						PROJECTS
					</LinkItem>
					<LinkItem to="/about" active={pathname === '/about'} closeMenu={closeMenu}>
						ABOUT
					</LinkItem>
					<LinkItem to="/contact" active={pathname === '/contact'} closeMenu={closeMenu}>
						CONTACT
					</LinkItem>
				</div>
			)}

			<div
				className={classnames(styles.arc, { [styles.isShow]: show })}
				style={{
					top: `${mousePosition.y}px`,
					filter: `url()`,
				}}
			/>
		</div>
	);
};

export default Sidebar;
