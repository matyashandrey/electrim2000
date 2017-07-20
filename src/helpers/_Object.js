/**
 * Выполняет глубокое клонирование объекта
 * @param {Object} o - объект для клонирования
 * @returns {Object} - клон исходного объекта
 */
export function deepClone(o) {
	// "string", number, boolean
	if (typeof(o) != 'object') {
		return o;
	}

	// null
	if (!o) {
		return o; // null
	}

	var r = (o instanceof Array) ? [] : {};
	for (var i in o) {
		if (o.hasOwnProperty(i)) {
			r[i] = deepClone(o[i]);
		}
	}
	return r;
}

/**
 * @param {*} n - элемент для проверки
 * @returns {boolean} - флаг, является ли аргумент числом
 */
export function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Функция для инспектирования объектов
 * @param {Object} obj - объект для вывода
 * @param {string} delimiter - строка для обрамления вывода
 * @param {number} repeats - количество повторений строки
 * @param {number} depth - глубина обзора объекта
 * @param {boolean} colors - выделение цветами элементов объекта
 * @return {undefined}
 */
export function inspect(obj, delimiter, repeats, depth, colors) {
	// delimiter = delimiter instanceof String || typeof delimiter === 'string' ? delimiter : '-=';
	delimiter =
		delimiter instanceof String || typeof delimiter === 'string' ||
		delimiter instanceof Number || typeof delimiter === 'number' ? delimiter :
			'-=';

	repeats = repeats instanceof Number || typeof repeats === 'number' ? repeats : 10;
	depth = depth instanceof Number || typeof depth === 'number' ? depth : null;
	colors = colors instanceof Boolean || typeof colors === 'boolean' ? colors : true;

	let delimiterString = Array(repeats).join(delimiter);

	console.info(delimiterString);
	console.dir(obj, {colors, depth});
	console.info(delimiterString);
}

/**
 * @param {Object} obj - исходный объект для создания массива
 * @param {string}  orderKey - ключ дочерних к obj объектов для сортироки
 * @returns {Object[]} - Массив объектов, отсорированных по полю orderKey
 */
export function valuesOrderedByKey(obj, orderKey) {
	obj = obj instanceof Object ? obj : {};
	orderKey = orderKey ? orderKey : 'priority';

	let ObjKeys =
		Object
			.values(obj)
			.sort((a, b) => {
				let aOrder = a[orderKey];
				let bOrder = b[orderKey];
				aOrder = aOrder === undefined ? 0 : aOrder;
				bOrder = bOrder === undefined ? 0 : bOrder;
				return bOrder - aOrder;
			});

	return ObjKeys;
}

/**
 * @param {Object} obj - исходный объект для создания массива
 * @param {Array} orderList - массив ключей, указывающий на порядок сортировка
 * @param {number} strategyToOthers - флаг указывающий, что делать с ключами отсутсвующими в массиве orderList
 * возможные значения -1(TO_START), 0 (DELETE), 1(TO_END)
 * @returns {Object[]} - массив объектов, отсортированный согласно переданному массиву ключей orderList
 */
export function valuesOrderedByKeysList(obj, orderList, strategyToOthers = valuesOrderedByKeysList.TO_END) {
	obj = obj instanceof Object ? obj : {};
	orderList = Array.isArray(orderList) ? orderList.map((key) => key.toString()) : [];

	let ObjKeys =
		Object
			.keys(obj);

	let notInOrderList = [];

	if (strategyToOthers) {
		let filterFn;

		if (strategyToOthers === valuesOrderedByKeysList.DELETE) {
			filterFn = (key) => orderList.indexOf(key) > -1;
		} else {
			filterFn = (key) => {
				let notInList = orderList.indexOf(key) === -1;
				if (notInList) {
					notInOrderList.push(obj[key])
				}
				return !notInList
			}
		}
		ObjKeys = ObjKeys.filter(filterFn)
	}

	ObjKeys.sort((a, b) => {
		let aPos = orderList.indexOf(a);
		let bPos = orderList.indexOf(b);
		return bPos - aPos;
	});

	let result = ObjKeys.map((key) => obj[key]);

	if (strategyToOthers === valuesOrderedByKeysList.TO_START) {
		result = notInOrderList.concat(result);

	}
	if (strategyToOthers === valuesOrderedByKeysList.TO_END) {
		result = result.concat(notInOrderList);
	}

	return result;
}
valuesOrderedByKeysList.DELETE = 0;
valuesOrderedByKeysList.TO_START = 1;
valuesOrderedByKeysList.TO_END = -1;

/**
 * @callback callback
 */

/**
 * Вставляет дочерний элемент в указанной точке элемента
 * @param {Object} obj - объект в который добавляется элемент
 * @param {string[]} pathChunksArr - массив, указывающий путь, по которому нужно вставить дочерний элемент
 * @param {*} value - дочерний элемент для вставки
 * @param {callback[]} cbArr - массив функций обратного вызова,
 * выполняющихся при создании соответсвующего элемента пути из pathChunksArr.
 * Получают в качестве аргумента текущее состояние элемента пути и название элемента пути
 * @param {*} thisArg - контекст выполнения фонкция обратного вызова
 * @returns {undefined}
 */
export function insertChild(obj, pathChunksArr, value, cbArr, thisArg) {
	// console.dir(arguments, {colors: true, depth: null});
	obj = obj instanceof Object ? obj : {};

	let pathChunk =
		Array.isArray(pathChunksArr) ?
			pathChunksArr.shift(pathChunksArr) :
			undefined;

	let cbChunk =
		Array.isArray(cbArr) ?
			cbArr.shift(cbArr) :
			undefined;

	if (cbChunk instanceof Function || typeof cbChunk === 'function') {
		obj[pathChunk] = cbChunk.call(thisArg, obj[pathChunk], pathChunk);
	}

	if (Array.isArray(pathChunksArr) && pathChunksArr.length) {
		obj[pathChunk] = obj[pathChunk] ? obj[pathChunk] : {};
		insertChild(obj[pathChunk], pathChunksArr, value, cbArr)
	} else {
		obj[pathChunk] =
			obj[pathChunk] instanceof Object ?
				Object.assign(obj[pathChunk], value) :
				value;
	}
}

/**
 * @param {Object} obj - объект в котором ищется дочерний элемент
 * @param {Array} pathChunksArr - массив, указывающий путь, по которому нужно искать дочерний элемент
 * @returns {*} - Значение, указанного в pathChunksArr, дочернего элемента obj
 */
export function getChild(obj, pathChunksArr) {
	// console.dir(arguments, {colors: true, depth: null});
	if (Array.isArray(pathChunksArr) && pathChunksArr.length) {
		let pathChunk = String(pathChunksArr[0]);
		if (obj instanceof Object) {
			return getChild(obj[pathChunk], pathChunksArr.slice(1));
		} else {
			return;
		}
	} else {
		return obj
	}
}

/**
 * Удаляет дочерний элемент в указанной точке объекта
 * @param {Object} obj - объект в котором ищется дочерний элемент
 * @param {Array} pathChunksArr - массив, указывающий путь, по которому нужно искать дочерний элемент
 * @returns {boolean} - флаг, указывающий на успешность операции удаления
 */
export function deleteChild(obj, pathChunksArr) {
	// console.dir(arguments, {colors: true, depth: null});
	let pathChunk =
		Array.isArray(pathChunksArr) ?
			pathChunksArr.shift(pathChunksArr) :
			undefined;

	if (Array.isArray(pathChunksArr) && pathChunksArr.length) {
		return deleteChild(obj[pathChunk], pathChunksArr);
	} else {
		return (
			obj instanceof Object ?
				delete obj[pathChunk] :
				undefined
		)
	}
}

/**
 * @param {*} data - входящие данные для обработки
 * @param {enum} style - стиль обработки (как функция или как процедура)
 * @param {*} result - результат обработки
 * @returns {Function} - возвращает функцию
 */
export function sequentially(data, style, result) {
	// console.dir(arguments, {colors: true, depth: null});
	return function (callback, extraData, thisArg) {
		if (callback instanceof Function) {
			result = callback.apply(thisArg, [data].concat(extraData));
			return (
				style === sequentially.FUNCTION ?
					sequentially(result, style, data) :
					sequentially(data, style, result)
			)
		} else {
			return data
		}
	};
}
sequentially.FUNCTION = undefined;
sequentially.PROCEDURE = 1;

export function restructure(obj, keyField = 'id') {
	obj = obj instanceof Object ? obj : {};
	let result = {};
	for (let i in obj) {
		let item = obj[i];
		if (item instanceof Object) {
			let {[keyField]: key} = item;
			result[key] = item;
		}
	}
	return result;
}