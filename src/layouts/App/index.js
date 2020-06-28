import React from 'react';

import Cursor from 'components/atoms/Cursor';
import Sidebar from 'components/molecules/Sidebar';

import styles from './index.css';

const App = ({ children }) => {
	return (
		<div className={styles.app}>
			<div className={styles.container} style={{ filter: `url(#goo)` }}>
				<Cursor />
				<Sidebar />
			</div>
			<Sidebar fake />

			{children}

			<svg className={styles.gooSvg}>
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
							result="goo"
						/>
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default App;
