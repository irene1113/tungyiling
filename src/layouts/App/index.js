import React from 'react';

import { useRouting } from 'models/routing';

import Header from 'components/organisms/Header';

import styles from './index.css';

const App = ({ children }) => {
	const [{ pathname }] = useRouting();

	return (
		<div className={styles.app}>
			{pathname !== '/' && <Header />}
			{children}
		</div>
	);
};

export default App;
