
/**
 * 全ての元になるクラス
 */
export default class BaseClass {
    constructor() {
        this.name = "BaseClass";
        this.jq = $(this);
        this.bind = function(evt,func){this.jq.bind(evt,func);};
        this.unbind = function(evt,func){this.jq.unbind(evt,func);};
        this.on = function(evt,func){this.jq.on(evt,func);};
        this.off = function(evt,func){this.jq.off(evt,func);};

        this.isImageLoadEnd = false;
    }

    /**
     * 生成開始
     */
    onCreate(){
        //console.log(this.name,"onCreate");
    }

    /**
     * 表示開始
     */
    onLoad(){
        //console.log(this.name,"onLoad");
    }

    /**
     * ウィンドウリサイズ
     */
    onResize(){
        //console.log(this.name,"onResize");
    }

    /**
     * ウィンドウスクロール
     */
    onScroll(){
        //console.log(this.name,"onScroll");
    }

    /**
     * ウィンドウ離脱
     */
    onBlur(){
        //console.log(this.name,"onBlur");
    }

    /**
     * ウィンドウフォーカス
     */
    onFocus(){
        //console.log(this.name,"onFocus");
    }

    /**
     * ブレイクポイント切り替え
     */
    onChangeBreakPoint(){
        //console.log(this.name,"onChangeBreakPoint");
    }

    /**
     * 画像読み込み完了
     */
    onImageLoadEnd(){
        //console.log(this.name,"onImageLoadEnd");
    }

    /**
     * youtubeApi準備完了
     */
    onYouTubeIframeAPIReady(){}

    onStop(){}
    onRemove(){}
}