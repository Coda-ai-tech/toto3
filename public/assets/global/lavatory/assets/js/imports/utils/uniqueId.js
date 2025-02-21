/**----------------------------------------
 * ユニークIDを生成
 * @param {number} [digits=1000] 末尾に付与する乱数の桁
 * @return {string} 生成したユニークIDを返す
 * @see https://shanabrian.com/web/javascript/create-unique-id.php
 * ---------------------------------------- */
export function uniqueId(digits = 1000) {
	return Date.now().toString(16) + Math.floor(digits * Math.random()).toString(16);
}
