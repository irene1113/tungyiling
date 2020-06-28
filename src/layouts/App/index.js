import React from 'react';

import Sidebar from 'components/molecules/Sidebar';

import styles from './index.css';

const App = ({ children }) => {
	return (
		<div className={styles.app}>
			<Sidebar />
			{children}
		</div>
	);
};

export default App;
