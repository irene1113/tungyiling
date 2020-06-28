import React, { useEffect } from 'react';
import classnames from 'classnames';

import { useMousemove } from 'util/event';
import { useBoolean } from 'util/hook';

import { useMenu } from 'models/global';

import styles from './index.css';

const Cursor = ({ className }) => {
	const [{ open }] = useMenu();
	const mousePosition = useMousemove();

	const [isSmall, { setFalse, setTrue }] = useBoolean();

	useEffect(() => {
		if (open && mousePosition.x > document.documentElement.clientWidth * 0.9 && isSmall) {
			setFalse();
		} else if (open && mousePosition.x < document.documentElement.clientWidth * 0.9 && !isSmall) {
			setTrue();
		} else if (!open && isSmall) {
			setFalse();
		}
	}, [open, mousePosition]);

	return (
		<div
			className={classnames(styles.cursor, className, { [styles.small]: isSmall })}
			style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
		/>
	);
};

export default Cursor;
