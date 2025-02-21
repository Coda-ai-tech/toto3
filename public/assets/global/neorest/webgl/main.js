
/**
 * このファイルは WebGL を呼び出す処理の記述例です。
 * 便宜上、杉本のほうでは /webgl 以下に置いていますが、
 * ドキュメントルートで動作するケースを考える場合は、
 * 同梱の script.js をグローバルで読み込みしてもらい、
 * 以下の baseURL などの値を環境に応じて調整してください。
 */

/**
 * 2022.04.14 追記
 * イントロムービーを再生させる場合、app.render のあとに app.start を使って描画を開始します。
 * イントロムービーが再生終了すると introend イベントが発火します。
 * カメラのダミーモード（入り口から入ってくる自動航行アニメーション）はムービー終わりに勝手に
 * 開始されたりはしないので、introend イベントを検出したタイミングで app.setCameraMode('dummy') してください。
 * ダミーカメラの自動航行が終わると dummyend イベントが発火します。
 * ここでもやはり、勝手に他のカメラモードに移行するわけではないので app.setCameraMode('focus') などを実行します。
 */

window.addEventListener('DOMContentLoaded', () => {

  // canvas にあらかじめ id を付与しておき、その名前を引数経由で指定すると、その canvas 要素を使います
  const canvasId = 'my-canvas';
  // ThreeApp クラスのインスタンスを生成（引数に canvas の id を文字列で指定）
  const app = new ThreeApp(canvasId);

  // 関係するリソースのロードは、起点となるベースディレクトリのパスを引数経由で loadAsset 呼び出し時に与えます
  const baseURL = location.hostname === 'localhost' ? '/resource/' : '/webgl/resource/';
  // 各種アセットのロード、Promise を返します
  app.loadAsset(baseURL).then(() => {

    // オプションが有る・無しにかかわらず、app.initialize をコールしてからレンダリングを開始する必要があります
    const option = {
      cameraMode: 'orbit', // orbit, focus, single などが指定でき、実運用では dark が初期値であれば真っ暗からスタートできる
      gui: true,           // gui を表示しない場合 false を指定
    };
    app.initialize(option);

    app.render();

    // ムービー再生を開始する場合
    // app.start();
  });

  // ここより下、return までは、イベントの記述例です ==============================================

  // アセットのロードが完了したイベント
  // ※loadAsset で Promise が resolve した、というのと完全に同義
  app.on('load', (v) => {
    console.log('🍇 load', v);
  });

  // イントロムービーの再生が終了した
  app.on('introend', (v) => {
    console.log('🍏 introend', v);

    // 自動的にダミーモードに移行するわけではない点に注意
    app.setCameraMode('dummy');
  });

  // ダミーカメラの自動航行が終了した
  app.on('dummyend', (v) => {
    console.log('🍍 dummyend', v);

    // 自動的にフォーカスモードに移行するわけではない点に注意
    app.setCameraMode('focus');
  });

  // ロードが完了済みかを調べるメソッド（Promise を返す）
  app.loadComplete()
  .finally(() => {
    console.log('🍓 load complete');
  });

  // TEMP: 以下 return まで、杉本の開発時検証用
  let t = 0.0;
  window.addEventListener('keydown', (evt) => {
    if (evt.key === ' ') {
      t = (t + 0.01) % 1.0;
      app.setTime(t);
    }

    if (evt.key === 'm') {
      // エントランス移行時例
      app.setCameraMode('focus');  // カメラモードをフォーカスモードにし、
      app.setScene('main');        // エントランスに移動し、
      app.setFocus('movie', true); // シーン内ディスプレイにフォーカスした状態にする（アニメなし）
    }

    if (evt.key === 's') {
      // 単体表示 NX 例
      app.setScene('nx');          // シーン内に NX を配置し、
      app.setCameraMode('single'); // カメラモードをシングルモードにし、
      app.resetTime();             // アニメーションは初期状態にリセットしておく
    }

    if (evt.key === 'n') {
      app.setFocus('nxc');
    }
    if (evt.key === 'w') {
      app.setFocus('wxc');
    }
    if (evt.key === '1') {
      app.setHoveringOnParent(true);
      app.setHoveringOnChild(false);
      app.setHoveringOnGrandChild(false);
    }
    if (evt.key === '2') {
      app.setHoveringOnParent(false);
      app.setHoveringOnChild(true);
      app.setHoveringOnGrandChild(false);
    }
    if (evt.key === '3') {
      app.setHoveringOnParent(false);
      app.setHoveringOnChild(false);
      app.setHoveringOnGrandChild(true);
    }
  });

  return;

  // ここより下は記述例で、インターフェースが増えたら記述例は適宜追加します =======================

  /**
   * ThreeApp.setMode
   * シーンを設定する
   * main == エントランス
   * story == 単体表示
   * ※単体表示に切り替えたあと、別途、後述する ThreeApp.setStoryMotion の呼び出しが必要です
   */
  const mode = 'main'; // or 'story'
  app.setMode(mode);

  /**
   * ThreeApp.setStoryMotion
   * 単体表示時の、表示されるボディとモーションを設定する
   */
  const bodyType = 'nx'; // or 'ls', 'as', 'rs', 'wx'
  const motionIndex = 0; // 機種によって何個モーションがあるかは異なる
  app.setStoryMotion(bodyType, 0);

  /**
   * ThreeApp.setHoveringOnXXX
   * Collerction 用の水球のホバー設定
   */
  const isHover = true;
  app.setHoveringOnParent(isHover);     // 中央の大サイズの水球
  app.setHoveringOnChild(isHover);      // 右上の中サイズの水球
  app.setHoveringOnGrandChild(isHover); // 左下の小サイズの水球

  /**
   * 🚧 DELETED 🚧
   * ThreeApp.setScene
   * シーンを設定する
   * main == エントランス
   * nx, as, ls, rs == 単体表示
   * 単体表示にする場合、別途 app.setCameraMode('single') を呼ばないと整合性がおかしくなります
   */
  // const sceneName = 'main'; // or nx, as, ls, rs
  // app.setScene(sceneName);

  /**
   * ThreeApp.setCameraMode
   * カメラのモードを指定する
   * focus == エントランスで各ポジションにフォーカスするモード
   * orbit == 主にデバッグ・プレビュー用のマウスでカメラを操作できるモード
   * dummy == 自動航行するイントロ演出用のモード
   * constant == GUI から値を設定するモード
   * single == 単体表示用で、唯一 setTime が意味を成すモード
   * dark == 画面を完全な黒の状態に
   */
  const modeName = 'focus'; // or orbit, dummy, constant, single, dark
  app.setCameraMode(modeName);

  /**
   * ThreeApp.setFocus
   * cameraMode が focus のとき、カメラでフォーカスする対象を指定
   * 第一引数に movie, nx, as, ls, rs, nxc, wxc のいずれかを文字列で指定します
   * 第二引数にアニメーションせずに強制移動させるフラグを指定できます（既定値は false で、強制移動させない。省略可）
   */
  const focusTarget = 'movie';
  const force = false;
  app.setFocus(focusTarget, force);

  /**
   * ThreeApp.setTime
   * cameraMode が single のとき、アニメーションの時刻を 0.0 ～ 1.0 で指定
   */
  const focusTime = 0.0;
  app.setTime(focusTime);

  /**
   * ThreeApp.resetTime
   * setTime で設定したアニメーションの時刻をリセットします
   */
  app.resetTime();

  /**
   * ThreeApp.pause
   * ThreeApp.resume
   * レンダリングの停止、再開
   */
  app.pause();
  app.resume();
});

