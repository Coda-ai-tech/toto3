/**----------------------------------------
 * ディープマージ
 * @param {*} target ベースオブジェクト
 * @param {*} source 追加結合オブジェクト
 * @param {*} opts   配列を結合したい時は{ concatArray: true }を付与
 * @returns
 * @see https://qiita.com/riversun/items/60307d58f9b2f461082a
 * ---------------------------------------- */
export function mergeDeeply(target, source, opts) {
	const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);
	const isConcatArray = opts && opts.concatArray;
	const result = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
		for (const [sourceKey, sourceValue] of Object.entries(source)) {
			const targetValue = target[sourceKey];
			if (isConcatArray && Array.isArray(sourceValue) && Array.isArray(targetValue)) {
				result[sourceKey] = targetValue.concat(...sourceValue);
			} else if (isObject(sourceValue) && target.hasOwnProperty(sourceKey)) {
				result[sourceKey] = mergeDeeply(targetValue, sourceValue, opts);
			} else {
				Object.assign(result, { [sourceKey]: sourceValue });
			}
		}
	}
	return result;
}
