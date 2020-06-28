import { useState, useEffect, useRef } from 'react';

// Handle the Dom event
export const useDom = eventHandler => {
	// Only subscribe/unsubscribe on mount/unmount lifecycle
	useEffect(() => {
		Object.keys(eventHandler).forEach(event => window.addEventListener(event, eventHandler[event]));

		return () => {
			Object.keys(eventHandler).forEach(event =>
				window.removeEventListener(event, eventHandler[event]),
			);
		};
	}, []);
};

export const useMousemove = (onMousemove = () => {}) => {
	const [mouse, setState] = useState({ x: -100, y: 100 });
	const preventTrigger = useRef(false);

	const handleMousemove = e => {
		if (!preventTrigger.current) {
			window.requestAnimationFrame(() => {
				const newPosition = { x: e.clientX, y: e.clientY };
				setState(newPosition);
				onMousemove(newPosition);
				preventTrigger.current = false;
			});
		}
		preventTrigger.current = true;
	};

	useDom({ mousemove: handleMousemove });

	return mouse;
};

export const useScroll = (onScroll = () => {}) => {
	const [scrollY, setState] = useState(window.pageYOffset);
	const preventTrigger = useRef(false);

	const handleScroll = () => {
		if (!preventTrigger.current) {
			window.requestAnimationFrame(() => {
				setState(window.pageYOffset);
				onScroll(window.pageYOffset);
				preventTrigger.current = false;
			});
		}
		preventTrigger.current = true;
	};

	useDom({ scroll: handleScroll });

	return scrollY;
};
