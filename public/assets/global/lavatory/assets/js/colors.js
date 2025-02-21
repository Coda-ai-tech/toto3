import { Create, Switch } from './imports/index.js';

const init = async () => {
/**
	 * DOM生成
	 */
const pathname = document.location.pathname;
const dir = pathname.endsWith('/') ? pathname : pathname.replace(/\/[^/]+\/?$/, '/');
const nowDayTime = Math.floor(new Date().getTime() / 1000 / 60 / 60);

/* .htmlで指定されたJSONパス */
const filePath = `${JSON_DATA_PATH}?${nowDayTime}`;
const $create = document.querySelector('.js-create');
const create = new Create($create, { filePath });
await create.useInit();
/**
 * 切り替え
 */
const switchOptions = {
	// startIndex: 0 /* 初期表示 */,
	slider: {
		/* スライダー設定 */
		// startIndex: 0 /* 初期表示 */,
		// autoPlay: true /* 自動再生の有効化 */,
		interval: 4000 /* 切り替え時間 */,
	},
};
const $switchs = document.querySelectorAll('.js-switch');
[...$switchs].map(($switch) => new Switch($switch, switchOptions));

clearInterval(initInterval)
}

window.addEventListener('DOMContentLoaded', async () => {
	init();
});

const initInterval = setInterval(() => init(), 10);