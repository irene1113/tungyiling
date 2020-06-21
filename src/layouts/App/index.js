import React from 'react';

import Header from 'components/organisms/Header';

const App = ({ children }) => (
	<>
		<Header />
		{children}
	</>
);

export default App;
