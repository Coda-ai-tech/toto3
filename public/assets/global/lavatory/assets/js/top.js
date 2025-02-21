import { Slider } from './imports/index.js';

const init = () => {
	/**
	 * スライダー
	 */
	// NOTE: 任意でオプション指定可能
	const sliderOptions = {
		// startIndex: 0 /* 初期表示 */,
		// autoPlay: true /* 自動再生の有効化 */,
		// interval: 5000 /* 切り替え時間 */,
	};
/*
	const $sliders = document.querySelectorAll('.js-slider');
	[...$sliders].map(($slider) => new Slider($slider, sliderOptions));
*/

	const sliderElement = document.querySelector('.js-slider');
	const slider = new Slider(sliderElement);
	sliderElement.addEventListener('sliderUpdate', function(e) {

		const { current, previous } = e.detail;
		//console.log(`現在のスライド番号: ${current}, 前回のスライド番号: ${previous}`);

		// サブタイトル更新
		updateSubTitles(current);
	});

	var lastIndex = -1;
	const updateSubTitles = (index) => {

		if (lastIndex == index) return;

		// スライドのindexによってサブタイトルを切り替える
		var subTitles = document.getElementsByClassName('l-hero_sub-title');
		//if (index == document.getElementsByClassName('js-slider_target').length - 1) {
		if (parseInt(index % 2) == 1) {

			subTitles[0].classList.remove('show');
			subTitles[1].classList.add('show');
		}
		else {

			subTitles[0].classList.add('show');
			subTitles[1].classList.remove('show');
		}

		lastIndex = index;
	};

	document.getElementsByClassName('l-hero_cover')[0].classList.add('hide');
}

window.addEventListener('DOMContentLoaded', () => {
	init();
});

init();

