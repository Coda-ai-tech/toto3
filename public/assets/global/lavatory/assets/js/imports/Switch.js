import { mergeDeeply, uniqueId } from './utils/index.js';
import { Slider } from './index.js';

/**----------------------------------------
 * 切り替え
 * ---------------------------------------- */
export default class Switch {
	#CONFIG = {
		key: 'switch',
		selector: {
			main: '.js-switch',
			target: '.js-switch_target',
			trigger: '.js-switch_trigger',
		},
		class: {
			current: 'is-switch_current',
			previous: 'is-switch_previous',
			single: 'is-switch_single',
			ready: 'is-switch_ready',
			preload: 'is-switch_preload',
		},
		startIndex: 0 /* 初期表示 */,
		slider: {
			/* スライダー設定 */
			selector: {
				main: '.js-slider',
			},
		},
	};
	#STATE = {
		$main: null,
		$targets: null,
		$triggers: null,
		length: 0,
		current: 0,
		previous: 0,
		uid: uniqueId(),
	};
	constructor($main = null, options = {}) {
		this.#CONFIG = mergeDeeply(this.#CONFIG, options, { concatArray: true });
		const CONFIG = this.#CONFIG;
		const STATE = this.#STATE;
		const { selector, startIndex } = CONFIG;
		STATE.$main = $main;
		STATE.$targets = $main.querySelectorAll(selector.target);
		STATE.$triggers = $main.querySelectorAll(selector.trigger);
		STATE.length = STATE.$targets.length;
		STATE.current = (startIndex + STATE.length - 1) % STATE.length;
		STATE.previous = startIndex || 0;
		this.#init();
	}
	#init() {
		const { class: className, startIndex } = this.#CONFIG;
		const { preload: preloadClass, ready: readyClass } = className;
		const { $main, length } = this.#STATE;
		this.#cleaner();
		if (!length || length <= 1) {
			this.#singleton();
			return this;
		}
		this.#initAria();
		this.#initSlider();
		this.#handler();
		this.#update(startIndex);
		$main.classList.remove(preloadClass);
		$main.classList.add(readyClass);
		return this;
	}
	#initAria() {
		const { key } = this.#CONFIG;
		const { $targets, $triggers, uid } = this.#STATE;
		for (const [index, $target] of $targets.entries()) {
			const id = `${key}-${uid}--${index}`;
			$target.id = id;
			const $trigger = $triggers[index];
			if ($trigger) {
				$trigger.setAttribute('aria-controls', id);
			}
		}
		return this;
	}
	#initSlider() {
		const { slider: sliderOptions } = this.#CONFIG;
		const STATE = this.#STATE;
		const $sliders = STATE.$main.querySelectorAll(sliderOptions.selector.main);
		STATE.sliders = [...$sliders].map(($slider) => {
			const slider = new Slider($slider, sliderOptions);
			slider.usePause();
			return slider;
		});
		return this;
	}
	#cleaner() {
		const { $targets, $triggers } = this.#STATE;
		for (const [index, $trigger] of $triggers.entries()) {
			if (!$targets[index]) {
				$trigger.remove();
			}
		}
		return this;
	}
	#singleton() {
		const { $main, $targets, $triggers, length } = this.#STATE;
		const { current: currentClass, single: singleClass } = this.#CONFIG.class;
		if (length) {
			$main.classList.add(singleClass);
			const $target = $targets[0];
			$target.classList.add(currentClass);
			const $trigger = $triggers[0];
			if ($trigger) {
				$trigger.classList.add(currentClass);
			}
		}
		return this;
	}
	#handler() {
		const { $triggers } = this.#STATE;
		const { current: currentClass } = this.#CONFIG.class;
		for (const [index, $trigger] of $triggers.entries()) {
			$trigger.addEventListener('click', (event) => {
				event.preventDefault();
				if ($trigger.classList.contains(currentClass)) return;
				this.#update(index);
			});
			$trigger.addEventListener('keydown', (event) => {
				this.#keydown(event.key);
			});
		}
		return this;
	}
	#update(current = 0) {
		const STATE = this.#STATE;
		const { $targets, $triggers, sliders, current: previous } = STATE;
		for (const [index, $target] of $targets.entries()) {
			const isCurrent = index === current;
			const isPrevious = index === previous;
			this.#updateTarget({ $target, isCurrent, isPrevious });
			const $trigger = $triggers[index];
			if ($trigger) {
				this.#updateTrigger({ $trigger, isCurrent, isPrevious });
			}
			const slider = sliders[index];
			if (slider) {
				this.#updateSlider({ slider, isCurrent });
			}
		}
		STATE.previous = previous;
		STATE.current = current;
		return this;
	}
	#updateTarget({ $target = null, isCurrent = false, isPrevious = false }) {
		if (!$target) return this;
		const { current: currentClass, previous: previousClass } = this.#CONFIG.class;
		if (isCurrent) {
			$target.inert = null;
			$target.removeAttribute('aria-hidden');
			$target.classList.add(currentClass);
		} else {
			$target.inert = true;
			$target.setAttribute('aria-hidden', true);
			$target.classList.remove(currentClass);
		}
		if (isPrevious) {
			$target.classList.add(previousClass);
		} else {
			$target.classList.remove(previousClass);
		}
		return this;
	}
	#updateTrigger({ $trigger = null, isCurrent = false, isPrevious = false }) {
		if (!$trigger) return this;
		const { current: currentClass, previous: previousClass } = this.#CONFIG.class;
		if (isCurrent) {
			$trigger.tabIndex = 0;
			$trigger.setAttribute('aria-selected', true);
			$trigger.classList.add(currentClass);
		} else {
			$trigger.tabIndex = -1;
			$trigger.removeAttribute('aria-selected');
			$trigger.classList.remove(currentClass);
		}
		if (isPrevious) {
			$trigger.classList.add(previousClass);
		} else {
			$trigger.classList.remove(previousClass);
		}
		return this;
	}
	#updateSlider({ slider = null, isCurrent = false }) {
		if (!slider) return this;
		if (isCurrent) {
			if (!slider.useIsTogglePause()) {
				slider.usePlay();
			}
		} else {
			slider.usePause();
		}
		return this;
	}
	#next() {
		const { current, length } = this.#STATE;
		this.#update((current + length + 1) % length);
		return this;
	}
	#prev() {
		const { current, length } = this.#STATE;
		this.#update((current + length - 1) % length);
		return this;
	}
	#jump(index = 0) {
		this.#update(index);
		return this;
	}
	#keydown(key) {
		switch (key) {
			case 'ArrowDown':
			case 'ArrowRight':
				this.#next();
				this.#focusTrigger();
				break;
			case 'ArrowUp':
			case 'ArrowLeft':
				this.#prev();
				this.#focusTrigger();
				break;
			default:
				break;
		}
	}
	#focusTarget() {
		const { $targets, current } = this.#STATE;
		$targets[current].focus();
		return this;
	}
	#focusTrigger() {
		const { $triggers, current } = this.#STATE;
		$triggers[current].focus();
		return this;
	}
	useNext() {
		this.#next();
	}
	usePrev() {
		this.#prev();
	}
	useJump(index = 0) {
		this.#jump(index);
	}
	useFocusTarget() {
		this.#focusTarget();
	}
	useFocusTrigger() {
		this.#focusTrigger();
	}
}
