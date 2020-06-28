/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import classnames from 'classnames';

import { useMousemove, useScroll } from 'util/event';
import { useBoolean } from 'util/hook';
import { useRouting } from 'models/routing';

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
		</Link>
	</div>
);

const Sidebar = ({ className }) => {
	const [{ pathname }] = useRouting();
	const mousePosition = useMousemove();
	const scrollY = useScroll();
	const [isOpen, { setTrue: openMenu, setFalse: closeMenu }] = useBoolean();
	const [isShow, { setTrue: showMenu, setFalse: hideMenu }] = useBoolean({ defaultBoolean: true });

	useEffect(() => {
		if (scrollY <= 20) {
			showMenu();
		} else if (mousePosition.x <= 100 && !isShow) {
			showMenu();
		} else if (mousePosition.x > 100 && isShow) {
			hideMenu();
		}
	}, [mousePosition, scrollY]);

	return (
		<div
			className={classnames(styles.sidebar, className, { [styles.open]: isOpen })}
			style={{ filter: `url(#sticky-menu)` }}
		>
			<ToggleIcon
				className={classnames(styles.hamburger, { [styles.isShow]: isShow })}
				style={{
					top: `${isOpen ? 30 : mousePosition.y}px`,
				}}
				isOpen={isOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			/>
			{isOpen && (
				<div className={styles.nav}>
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
				className={classnames(styles.arc, { [styles.isShow]: isShow })}
				style={{
					top: `${mousePosition.y}px`,
				}}
			/>
		</div>
	);
};

export default Sidebar;
