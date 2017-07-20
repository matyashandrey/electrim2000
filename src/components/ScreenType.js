import screenTypeAction from '../actions/screenType'
//import screenWidthActionCreator from './screenWidthActionCreator'
import * as screenTypes from '../constants/screenTypes'

function getCurrentScreenType() {
	let width = Number(window.innerWidth);
	return width >= screenTypes.DESKTOP_HD_SCREEN_SIZE.min ? screenTypes.DESKTOP_HD :
		width >= screenTypes.DESKTOP_SCREEN_SIZE.min ? screenTypes.DESKTOP :
			width >= screenTypes.TABLET_SCREEN_SIZE.min ? screenTypes.TABLET :
				width >= screenTypes.MOBILE_SCREEN_SIZE.min ? screenTypes.MOBILE :
					width >= screenTypes.TEAPOT_SCREEN_SIZE.min ? screenTypes.TEAPOT :

						// Тип экрана на который ориентироваться, если не известен клиент
						screenTypes.DESKTOP_HD;
}

export default (dispatch) => {
	const dispatchResize = () => {
		dispatch(screenTypeAction(getCurrentScreenType()));
		//  dispatch(screenWidthActionCreator(window.innerWidth));
	};
	dispatchResize();
	window.onresize = dispatchResize;
}
