import { createAction, handleActions } from 'redux-actions';

import { useRedux } from 'util/hook/redux';

const openMenu = createAction('OPEN_MENU');

const closeMenu = createAction('CLOSE_MENU');

const showMenu = createAction('SHOW_MENU');

const hideMenu = createAction('HIDE_MENU');

const reducer = {
	global: handleActions(
		{
			OPEN_MENU: state => ({
				...state,
				menu: { ...state.menu, open: true },
			}),

			CLOSE_MENU: state => ({
				...state,
				menu: { ...state.menu, open: false },
			}),

			SHOW_MENU: state => ({
				...state,
				menu: { ...state.menu, show: true },
			}),

			HIDE_MENU: state => ({
				...state,
				menu: { ...state.menu, show: false },
			}),
		},
		{
			menu: {
				open: false,
				show: true,
			},
		},
	),
};

const mapHooksToState = state => state.global.menu;

export const useMenu = () => useRedux(mapHooksToState, { openMenu, closeMenu, showMenu, hideMenu });

export default { reducer };
