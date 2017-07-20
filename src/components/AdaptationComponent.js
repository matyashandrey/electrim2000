import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as screenTypes from '../constants/screenTypes'

const Adaptor = (Components = {}, switcher, conditions, params, thisArg) => {
	// console.dir(arguments, {colors: true});
	return switcher.call(thisArg, Components, conditions, params)
};

function screenSwitcher(Components, screenType, params) {
	// console.dir(arguments, {colors: true});
	let {
		DesktopHD, Desktop, Tablet, Mobile, Teapot
	} = Components;

	let componentAdaptors = [
		Teapot,
		Mobile,
		Tablet,
		Desktop,
		DesktopHD
	];

	let screenIndex;
	switch (screenType) {
		case screenTypes.DESKTOP_HD:
			screenIndex = 4;
			break;
		case screenTypes.DESKTOP:
			screenIndex = 3;
			break;
		case screenTypes.TABLET:
			screenIndex = 2;
			break;
		case screenTypes.MOBILE:
			screenIndex = 1;
			break;
		case screenTypes.TEAPOT:
		default:
			screenIndex = 0;
			break;
	}

	// Смотрим есть ли точное совпадение
	let AdaptedComponent = componentAdaptors[screenIndex];
	if (AdaptedComponent) {
		return <AdaptedComponent {...params}/>
	} else { // Если подходящего варианта нет, пытаемся найти лучший вариант - стратегия "на увеличение экрана"
		let BiggerAdaptors = componentAdaptors.slice(screenIndex + 1);
		let SmallerAdaptorsReversed = componentAdaptors.slice(0, screenIndex).reverse();
		let NewComponentAdaptors = BiggerAdaptors.concat(SmallerAdaptorsReversed);

		for (let index in NewComponentAdaptors) {
			let AdaptedComponent = NewComponentAdaptors[index];
			if (AdaptedComponent) {
				return <AdaptedComponent  {...params}/>
			}
		}
	}
}

/**
 * Адаптор для вывода компонентов в зависимости от размера экрана клиента
 * @param DesktopHD
 * @param Desktop
 * @param Tablet
 * @param Mobile
 * @param Teapot
 * @param screenType
 * @returns {*}
 * @constructor
 */
const AdaptationComponent = ({DesktopHD, Desktop, Tablet, Mobile, Teapot, screenType, params={}}) => {
	// console.dir(arguments, {colors: true});
	let Components = {
		DesktopHD, Desktop, Tablet, Mobile, Teapot
	};

	// let conditions = screenDescriber(screenType);
	let Component = Adaptor(Components, screenSwitcher, screenType, params);
	return Component
};

const mapStateToProps = (state, ownProps) => ({screenType: state.screenType});
export default connect(mapStateToProps)(AdaptationComponent)