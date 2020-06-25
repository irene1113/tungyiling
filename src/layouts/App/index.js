import React from 'react';

import { useRouting } from 'models/routing';

import Header from 'components/organisms/Header';
import FullNameTitle from 'components/atoms/FullNameTitle';

import styles from './index.css';

const App = ({ children }) => {
	const [{ pathname }] = useRouting();

	return (
		<div className={styles.app}>
			{pathname !== '/' && <Header />}
			{children}
			{pathname !== '/' && (
				<div className={styles.bottomFixed}>
					<div className={styles.nameMark}>
						<FullNameTitle className={styles.fullname} fontSize={48} />
						<div className={styles.num}>10</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
