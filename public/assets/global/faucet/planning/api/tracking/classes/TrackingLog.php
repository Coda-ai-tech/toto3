<?php
class TrackingLog {

	// タイムスタンプ
	public $_timestamp = false;
	// 日付（データ保存用）
	public $_datetime = false;
	// 年月（CSVファイル名で使用）
	public $_ym = false;

	// トラッキングするシミュレータの種類
	public $_type = 'faucet-lavatory';

	// 設定ファイルの格納
	public $_config = false;

	// CSVファイルの出力パス
	public $_logfile = false;

	/**
	 * default constructor
	 *
	 */
	public function __construct($config, $type='faucet-lavatory') {


		$this->_timestamp = time();
		$this->_datetime  = date(APP_CSV_DATEFORMAT, $this->_timestamp);
		$this->_ym        = date('Ym', $this->_timestamp);

		$this->_logdir  = $config['log_file'];
		$this->_type    = $type;
		$this->_logfile = $this->_logdir . $type . '_' . $this->_ym . '.csv';
		$this->_config  = $config[$type];

// pr($this->_timestamp);
// pr($this->_datetime);

		// 管理画面用に全データ取得
		$this->_vars = $config;

	}

	/**
	 * 計測処理
	 *
	 */
	public function track($params) {

		$track_data = array();
		$is_valid = false;

		// データの取得
		// ※定義されたフィールド名で送信されたデータのみを対象とする
		// ※想定してないデータが含まれる場合、処理しない
		$fields = $this->_config['title'];
		foreach($fields as $field_id => $tmp) {
			if ($field_id == 'date') {
				continue;
			}
			$data = isset($params[$field_id])?$this->format_data($params[$field_id]):'';
			if ($this->is_invalid_data($data)) {
				$data = '';
			}

			$track_data[] = $data;
			if (!$this->is_empty($data)) {
				$is_valid = true;
			}
		}

		// 正しいデータがセットされている場合のみ処理
		if ($is_valid) {
			if ($this->init_logfile()) {
				// 配列の先頭に日時を追加
				array_unshift($track_data, $this->_datetime);
				// カンマ区切りに変換
				$line = implode(APP_CSV_DELIMITER, $track_data);

				// ログ出力
				$this->write_logfile($line);

			} else {
				return false;
			}
		} else {
			return false;
		}

		return true;
	}

	/**
	 * ログファイルの初期化
	 *
	 */
	public function init_logfile() {

		if (file_exists($this->_logfile)) {
			if (is_writable($this->_logfile)) {
				return true;
			} else {
				return false;
			}

		} else {

			$title = $this->_config['title'];
			$tile  = array_values($title);
			$title_line = implode(APP_CSV_DELIMITER, $title);

			try {
				$this->write_logfile($title_line);
			} catch (Exception $e) {
				pr($e->getMessage());
				return false;
			}
			return true;
		}

		return false;
	}

	/**
	 * ログファイルの取得処理（管理画面で使用する）
	 *
	 */
	public function get_logfiles() {

		$result = array();
		foreach($this->_vars['type'] as $type_id => $type) {
			if (!array_key_exists($type, $result)) {
				$result[$type] = array();
			}

			foreach(glob($this->_logdir . $type . "_*.csv") as $filename) {
				$tmp_filename = str_replace($this->_logdir, '', $filename);

				$tmp_ym = str_replace($type . '_', '', $tmp_filename);
				$tmp_ym = str_replace('.csv', '', $tmp_ym);

				$result[$type][$tmp_ym] = $tmp_filename;
			}

			// リストを年月の新しい順に並び替える
			if (count($result[$type]) > 1) {
				// 年月の降順
				krsort($result[$type]);
				// 年月の照準の場合は下記を使用する
				// ksort($result[$type]);
			}
		}

		return $result;
	}


	/**
	 * ログファイルの取得処理（管理画面で使用する）
	 *
	 */
	public function generate_options($options) {

		$code = '';

		foreach($options as $ym => $value) {
			// yyyymm → yyyy/mm に変換
			$ym_str = preg_replace('/([0-9]{4})([0-9]{2})/i', '$1/$2', $ym);

			// <option>タグの生成
			$code .= '<option value="' . $value . '">' . $ym_str . '</option>';
		}

		return $code;
	}


	/**
	 * ファイル書き込み処理
	 *
	 */
	public function write_logfile($line) {
		$handler = fopen($this->_logfile, "a");

		flock($handler, LOCK_EX);
		fputs($handler, $line . APP_CSV_NEWLINE);
		flock($handler, LOCK_UN);
		fclose($handler);

	}


	/* check関数
	 * チェックNGの場合、true（エラーあり）
	 * チェックOKの場合、false
	 --------------------------------------------*/
	/**
	 * 半角英数記号チェック
	 *
	 */
	protected function is_invalid_data($val) {
		if ($this->is_empty($val))
			return false;

		if (preg_match('/^[a-zA-Z0-9!-~#]+$/', $val))
			return false;
		else
			return true;
	}

	/**
	 * 未入力チェック
	 *
	 */
	protected function is_empty($val) {

		if (empty($val))
			return true;

		return false;
	}


	/* 文字列整形関数
	 --------------------------------------------*/
	/**
	 * 整形
	 *
	 */
	protected function format_data($str) {
		$str = $this->remove_nl($str);
		// $str = $this->space_trim($str);
		$str = trim($str);

		return $str;
	}

	/**
	 * Trim
	 *
	 */
	protected function space_trim($str) {
		$str = preg_replace('/(^\s+)|(\s+$)/us', '', $str);

		return $str;
	}

	/**
	 * 改行削除
	 *
	 */
	protected function remove_nl($str='') {
		return preg_replace('/(?:\n|\r|\r\n)/', '', $str);
	}

}
