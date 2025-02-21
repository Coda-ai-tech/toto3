/**----------------------------------------
 * DOM生成
 * ---------------------------------------- */
export default class Create {
	#CONFIG = {
		key: 'create',
		selector: {
			main: '.js-create',
			title: '.js-create_title',
			copy: '.js-create_copy',
			parent_list: '.js-create_parent-list',
			parent_target: '.js-create_parent-target',
			parent_nav: '.js-create_parent-nav',
			parent_trigger: '.js-create_parent-trigger',
			child_list: '.js-create_child-list',
			child_item: '.js-create_child-item',
			child_nav: '.js-create_child-nav',
			child_thumb: '.js-create_child-thumb',
			child_image: '.js-create_child-image',
			child_caption: '.js-create_child-caption',
			child_caption2: '.js-create_child-caption2',
		},
		class: {
			preload: 'is-create_preload',
		},
		label: {
			parent: 'Lavatory',
			child: 'Faucet',
			color: '#',
			null: '-',
		},
		tempPath: '/assets/global/lavatory/assets/inc/create.htm',
		noImage: '/assets/global/lavatory/assets/img/noimage.png',
	};
	#STATE = {
		options: {},
		$main: null,
		response: {
			data: '',
			temp: '',
		},
		html: {
			main: '',
			parent_target: '',
			parent_trigger: '',
			child_item: '',
			child_thumb: '',
		},
		childLength: 0,
	};
	constructor($main = null, options = {}) {
		const STATE = this.#STATE;
		STATE.options = options;
		STATE.$main = $main;
	}
	async #init() {
		await this.#getData();
		await this.#getTemp();
		this.#ready();
		this.#clear();
		this.#create();
		return this;
	}
	async #getData() {
		const { options, response } = this.#STATE;
		const result = await fetch(options.filePath)
			.then((data) => {
				return data.json();
			})
			.catch((error) => {
				throw new Error(error);
			});
		response.data = result.data;
		return this;
	}
	async #getTemp() {
		const { tempPath } = this.#CONFIG;
		const { response } = this.#STATE;
		const result = await fetch(tempPath)
			.then((data) => {
				return data.text();
			})
			.catch((error) => {
				throw new Error(error);
			});
		response.temp = result;
		return this;
	}
	#ready() {
		const { $main, response } = this.#STATE;
		const { selector } = this.#CONFIG;
		const { data, temp } = response;
		$main.innerHTML = '';
		$main.insertAdjacentHTML('afterbegin', temp);
		const $title = $main.querySelector(selector.title);
		if ($title) {
			if (data.title) {
				$title.innerHTML = data.title;
			} else {
				$title.remove();
			}
		}
		const $copy = $main.querySelector(selector.copy);
		if ($copy) {
			if (data.copy) {
				$copy.innerHTML = data.copy;
			} else {
				$copy.remove();
			}
		}
		return this;
	}
	#clear() {
		const { selector } = this.#CONFIG;
		const STATE = this.#STATE;
		const { $main, html } = STATE;
		const $parent_target = $main.querySelector(selector.parent_target);
		const $parent_trigger = $main.querySelector(selector.parent_trigger);
		const $parent_nav = $main.querySelector(selector.parent_nav);
		const $parent_list = $main.querySelector(selector.parent_list);
		const $child_list = $parent_target?.querySelector(selector.child_list);
		const $child_item = $child_list?.querySelector(selector.child_item);
		const $child_nav = $parent_target?.querySelector(selector.child_nav);
		const $child_thumbs = $child_nav?.querySelectorAll(selector.child_thumb);
		const $child_thumb = $child_nav?.querySelector(selector.child_thumb);
		if ($child_thumbs) {
			STATE.childLength = $child_thumbs.length || 0;
			html.child_thumb = $child_thumb.cloneNode(true);
		}
		if ($child_item) {
			html.child_item = $child_item.cloneNode(true);
		}
		if ($child_nav) {
			$child_nav.innerHTML = '';
		}
		if ($child_list) {
			$child_list.innerHTML = '';
		}
		if ($parent_target) {
			html.parent_target = $parent_target.cloneNode(true);
		}
		if ($parent_trigger) {
			html.parent_trigger = $parent_trigger.cloneNode(true);
		}
		if ($parent_nav) {
			$parent_nav.innerHTML = '';
		}
		if ($parent_list) {
			$parent_list.innerHTML = '';
		}
		return this;
	}
	#create() {
		const { selector } = this.#CONFIG;
		const { $main, response } = this.#STATE;
		const $parent_list = $main.querySelector(selector.parent_list);
		const $parent_nav = $main.querySelector(selector.parent_nav);
		for (const dataParent of response.data.parents) {
			if ($parent_list) {
				const $append = this.#appendParentList({ data: dataParent });
				if ($append) {
					$parent_list.appendChild($append);
				}
			}
			if ($parent_nav) {
				const $append = this.#appendParentNav({ data: dataParent });
				if ($append) {
					$parent_nav.appendChild($append);
				}
			}
		}
		return this;
	}
	#appendParentList({ data = null }) {
		if (!data || !Object.keys(data).length) return;
		const { selector } = this.#CONFIG;
		const { html, childLength } = this.#STATE;
		const $clone = html.parent_target.cloneNode(true);
		const $list = $clone.querySelector(selector.child_list);
		const $nav = $clone.querySelector(selector.child_nav);
		for (let index = 0; index < childLength; index++) {
			const dataChild = data.children[index];
			if (dataChild && $list) {
				const $append = this.#appendChildList({ dataParent: data, dataChild });
				if ($append) {
					$list.appendChild($append);
				}
			}
			if ($nav) {
				const $append = this.#appendChildNav({ data: dataChild });
				if ($append) {
					$nav.appendChild($append);
				}
			}
		}
		return $clone;
	}
	#appendParentNav({ data = null }) {
		if (!data || !Object.keys(data).length) return;
		const { class: className, label: labelName, noImage } = this.#CONFIG;
		const { html } = this.#STATE;
		const $clone = html.parent_trigger.cloneNode(true);
		const $img = $clone.querySelector('img');
		if ($img) {
			$img.src = data.thumb ?? noImage;
			$img.alt = `${labelName.parent}:${data.label || labelName.null}`;
		}
		$clone.classList.remove(className.preload);
		return $clone;
	}
	#appendChildList({ dataParent = null, dataChild = null }) {
		if (!dataParent || !Object.keys(dataParent).length || !dataChild || !Object.keys(dataChild).length) return;
		const { selector, class: className, label: labelName, noImage } = this.#CONFIG;
		const { html } = this.#STATE;
		const $clone = html.child_item.cloneNode(true);
		var childLabel = `${dataChild.label ?? labelName.null} ${labelName.color}${dataChild.color ?? labelName.null}`;
		// color が空白だったら「 #」以降を除去
		if (dataChild.color == "") {

			childLabel = childLabel.replace(/ #.*/, '');
		}
		const labelValue = `${labelName.parent}:${dataParent.label ?? labelName.null} ${labelName.child}:${childLabel}`;
		$clone.ariaLabel = labelValue;
		const $caption = $clone.querySelector(selector.child_caption);
		if ($caption) {
			$caption.innerHTML = dataParent.label ?? labelName.null;
		}
		const $caption2 = $clone.querySelector(selector.child_caption2);
		if ($caption2) {
			$caption2.innerHTML = childLabel;
		}
		const $image = $clone.querySelector(selector.child_image);
		if ($image) {
			const $image_img = $image?.querySelector('img');
			if ($image_img) {
				$image_img.src = dataChild.visual ?? noImage;
				$image_img.alt = labelValue;
			}
			$image.classList.remove(className.preload);
		}
		return $clone;
	}
	#appendChildNav({ data = null }) {
		const { class: className, label: labelName, noImage } = this.#CONFIG;
		const { html } = this.#STATE;
		const $clone = html.child_thumb.cloneNode(true);
		if (data) {
			const $img = $clone.querySelector('img');
			if ($img) {
				const label = `${data.label ?? labelName.null} ${labelName.color}${data.color ?? labelName.null}`;
				$img.src = data.thumb ?? noImage;
				$img.alt = `${labelName.child}:${label}`;
			}
		} else {
			$clone.innerHTML = '';
		}
		$clone.classList.remove(className.preload);
		return $clone;
	}
	async useInit() {
		await this.#init();
	}
}
