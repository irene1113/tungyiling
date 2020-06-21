import React from 'react';
import Link from 'components/atoms/Link';

const Navigator = () => (
	<nav>
		<ul>
			<li>
				<Link to="/projects">PROJECTS</Link>
			</li>
			<li>
				<Link to="/about">ABOUT</Link>
			</li>
			<li>
				<Link to="/contact">CONTACT</Link>
			</li>
		</ul>
	</nav>
);

export default Navigator;
