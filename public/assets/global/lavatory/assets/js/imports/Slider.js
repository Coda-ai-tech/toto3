import { mergeDeeply, uniqueId } from './utils/index.js';

/**----------------------------------------
 * スライダー
 * ---------------------------------------- */
export default class Slider {

	#CONFIG = {
		key: 'slider',
		selector: {
			main: '.js-slider',
			target: '.js-slider_target',
			trigger: '.js-slider_trigger',
			toggle: '.js-slider_toggle',
			next: '.js-slider_next',
			prev: '.js-slider_prev',
		},
		class: {
			current: 'is-slider_current',
			previous: 'is-slider_previous',
			pause: 'is-slider_pause',
			single: 'is-slider_single',
			ready: 'is-slider_ready',
			preload: 'is-slider_preload',
		},
		label: {
			toggle: {
				play: 'Play',
				pause: 'Pause',
			},
		},
		startIndex: 0 /* 初期表示 */,
		autoPlay: true /* 自動再生の有効化 */,
		interval: 5000 /* 切り替え時間 */,
	};
	#STATE = {
		$main: null,
		$targets: null,
		$triggers: null,
		$toggles: null,
		$nexts: null,
		$prevs: null,
		length: 0,
		current: 0,
		previous: 0,
		timer: null,
		isInterval: true,
		isTogglePause: false,
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
		STATE.$toggles = $main.querySelectorAll(selector.toggle);
		STATE.$nexts = $main.querySelectorAll(selector.next);
		STATE.$prevs = $main.querySelectorAll(selector.prev);
		STATE.length = STATE.$targets.length;
		STATE.current = (startIndex + STATE.length - 1) % STATE.length;
		STATE.previous = startIndex || 0;
		this.#init();
	}
	#init() {
		const STATE = this.#STATE;
		const { class: className, autoPlay } = this.#CONFIG;
		const { preload: preloadClass, ready: readyClass } = className;
		const { $main, length } = STATE;
		this.#cleaner();
		if (!length || length <= 1) {
			this.#singleton();
			return this;
		}
		this.#initAria();
		this.#handler();
		this.#next();
		if (autoPlay) {
			this.#play();
		} else {
			STATE.isTogglePause = true;
			this.#pause();
		}
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
		const { current: currentClass, single: singleClass } = this.#CONFIG.class;
		const { $main, $targets, $triggers, $toggles, $nexts, $prevs, length } = this.#STATE;
		$main.classList.add(singleClass);
		if (length) {
			const $target = $targets[0];
			$target.classList.add(currentClass);
			const $trigger = $triggers[0];
			if ($trigger) {
				$trigger.classList.add(currentClass);
			}
		}
		for (const $toggle of $toggles) {
			$toggle.remove();
		}
		for (const $next of $nexts) {
			$next.remove();
		}
		for (const $prev of $prevs) {
			$prev.remove();
		}
		return this;
	}
	#handler() {
		const { current: currentClass } = this.#CONFIG.class;
		const { $triggers, $toggles, $nexts, $prevs } = this.#STATE;
		for (const $toggle of $toggles) {
			$toggle.addEventListener('click', (event) => {
				event.preventDefault();
				this.#onToggle({ $toggle });
			});
		}
		for (const $next of $nexts) {
			$next.addEventListener('click', (event) => {
				event.preventDefault();
				this.#onNext();
			});
		}
		for (const $prev of $prevs) {
			$prev.addEventListener('click', (event) => {
				event.preventDefault();
				this.#onPrev();
			});
		}
		for (const [index, $trigger] of $triggers.entries()) {
			$trigger.addEventListener('click', (event) => {
				event.preventDefault();
				if ($trigger.classList.contains(currentClass)) return;
				this.#onJump(index);
			});
			$trigger.addEventListener('keydown', (event) => {
				this.#keydown(event.key);
			});
		}
		return this;
	}
	#update(current = 0) {
		const STATE = this.#STATE;
		const { $targets, $triggers, current: previous } = STATE;
		for (const [index, $target] of $targets.entries()) {
			const isCurrent = index === current;
			const isPrevious = index === previous;
			this.#updateTarget({ $target, isCurrent, isPrevious });
			const $trigger = $triggers[index];
			if ($trigger) {
				this.#updateTrigger({ $trigger, isCurrent, isPrevious });
			}
		}
		STATE.previous = previous;
		STATE.current = current;
		
		// カスタムイベントを発火
		const updateEvent = new CustomEvent('sliderUpdate', {
			detail: { current, previous },
		});
		STATE.$main.dispatchEvent(updateEvent);

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
	#interval() {
		const CONFIG = this.#CONFIG;
		const STATE = this.#STATE;
		STATE.timer = setInterval(() => {
			this.#next();
		}, CONFIG.interval);
		return this;
	}
	#resetInterval() {
		const STATE = this.#STATE;
		if (!STATE.isInterval) return this;
		clearInterval(STATE.timer);
		this.#interval();
		return this;
	}
	#play() {
		const CONFIG = this.#CONFIG;
		const STATE = this.#STATE;
		this.#interval();
		STATE.isInterval = true;
		for (const $toggle of STATE.$toggles) {
			$toggle.classList.remove(CONFIG.class.pause);
			$toggle.ariaLabel = CONFIG.label.toggle.play;
		}
		return this;
	}
	#pause() {
		const CONFIG = this.#CONFIG;
		const STATE = this.#STATE;
		if (STATE.timer) {
			clearInterval(STATE.timer);
			STATE.isInterval = false;
		}
		for (const $toggle of STATE.$toggles) {
			$toggle.classList.add(CONFIG.class.pause);
			$toggle.ariaLabel = CONFIG.label.toggle.pause;
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
				this.#onNext();
				this.#focusTrigger();
				break;
			case 'ArrowUp':
			case 'ArrowLeft':
				this.#onPrev();
				this.#focusTrigger();
				break;
			default:
				break;
		}
	}
	#focusTrigger() {
		const { $triggers, current } = this.#STATE;
		$triggers[current].focus();
		return this;
	}
	#onToggle({ $toggle = null }) {
		if (!$toggle) return this;
		const CONFIG = this.#CONFIG;
		const STATE = this.#STATE;
		if (!$toggle.classList.contains(CONFIG.class.pause)) {
			STATE.isTogglePause = true;
			this.#pause();
		} else {
			STATE.isTogglePause = false;
			this.#next();
			this.#play();
		}
		return this;
	}
	#onNext() {
		this.#next().#resetInterval();
		return this;
	}
	#onPrev() {
		this.#prev().#resetInterval();
		return this;
	}
	#onJump(index = 0) {
		this.#jump(index).#resetInterval();
		return this;
	}
	usePlay() {
		this.#play();
	}
	usePause() {
		this.#pause();
	}
	useNext() {
		this.#onNext();
	}
	usePrev() {
		this.#onPrev();
	}
	useJump(index = 0) {
		this.#onJump(index);
	}
	useFocusTrigger() {
		this.#focusTrigger();
	}
	useIsInterval() {
		return this.#STATE.isInterval;
	}
	useIsTogglePause() {
		return this.#STATE.isTogglePause;
	}
}
