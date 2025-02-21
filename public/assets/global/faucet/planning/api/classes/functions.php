<?php
/**
 * アイコンリストの出力
 *
 */
function generate_code_icon_list($product, $path) {
	$code = '';
	// 技術アイコン
	$tech_list  = (isset($product['tech_icon']) && is_array($product['tech_icon']))?$product['tech_icon']:array();
	// アワードアイコン
	$award_list = (isset($product['award_icon']) && is_array($product['award_icon']))?$product['award_icon']:array();

	$code_items = '';
	foreach($tech_list as $idx => $item) {
		// $code_items .= '<td><img src="' . $path . $item . '" height="12"></td>';
		$code_items .= '<img src="' . $path . $item . '" height="12">&nbsp;';
	}
	foreach($award_list as $idx => $item) {
		// $code_items .= '<td><img src="' . $path . $item . '" height="12"></td>';
		$code_items .= '<img src="' . $path . $item . '" height="12">&nbsp;';
	}

	if ($code_items) {
		// $code = '<table><tr>' . $code_items . '</tr></table>';
		$code = '<table><tr><td>' . $code_items . '</td></tr></table>';
	}

	return $code;
}


/**
 * Headerの出力
 *
 */
function generate_code_header($logo_image_url, $title, $is_debug=false) {
	global $_PAGE_WIDTH, $_MAIN_MARGIN, $_MAIN_WIDTH;
	global $_MAIN_PRODUCT_WIDTH, $_MAIN_PRODUCT_MARGIN, $_MAIN_PRICE_WIDTH;

	$code = '';

	if ($is_debug) {
		$code .=<<<EOF
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head><meta charset="utf-8"></head>
<body style="padding: 0; margin: 0;">

<!--
<table cellpadding="0" cellspacing="0" border="0">
	<tr>
		<td width="{$_MAIN_MARGIN}" style="background-color: #999999">&nbsp;</td>
		<td width="{$_MAIN_PRODUCT_WIDTH}" style="background-color: #333333">&nbsp;</td>
		<td width="{$_MAIN_PRICE_WIDTH}" style="background-color: #666666">&nbsp;</td>
		<td width="{$_MAIN_PRODUCT_MARGIN}" style="background-color: #333333">&nbsp;</td>
		<td width="5" style="background-color: #ffffff">&nbsp;</td>
		<td width="{$_MAIN_PRODUCT_MARGIN}" style="background-color: #666666">&nbsp;</td>
		<td width="{$_MAIN_PRODUCT_WIDTH}" style="background-color: #333333">&nbsp;</td>
		<td width="{$_MAIN_PRICE_WIDTH}" style="background-color: #666666">&nbsp;</td>
		<td width="{$_MAIN_MARGIN}" style="background-color: #999999">&nbsp;</td>
	</tr>
</table>
-->

EOF;
	}


	$code .=<<<EOF

<table cellpadding="0" cellspacing="0" border="0" width="100%">
	<tr>
		<td class="bg">
			<table cellpadding="0" cellspacing="0" border="0" width="{$_PAGE_WIDTH}">
				<tr>
					<td colspan="3" class="space" height="10"></td>
				</tr>
				<tr>
					<td width="{$_MAIN_MARGIN}"></td>
					<td width="{$_MAIN_WIDTH}">
						<table cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td width="75"><img src="{$logo_image_url}" height="15" /></td>
								<td align="left">
									<table cellpadding="0" cellspacing="0" border="0">
										<tr><td class="space" height="3"></td></tr>
										<tr>
											<td class="x-small" align="left">
												<b>{$title}</b>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
					<td width="{$_MAIN_MARGIN}"></td>
				</tr>
				<tr>
					<td colspan="3" class="space" height="5"></td>
				</tr>
			</table>
		</td>
	</tr>
</table>

EOF;

	return $code;
}

/**
 * Footer出力関数
 *
 */
function generate_code_footer($title='', $is_debug=false) {
	global $_PAGE_WIDTH, $_MAIN_MARGIN, $_MAIN_WIDTH;
	global $_MAIN_PRODUCT_WIDTH, $_MAIN_PRODUCT_MARGIN, $_MAIN_PRICE_WIDTH;

	$code = '';

	$code .=<<<EOF
<table cellpadding="0" cellspacing="0" border="0" width="100%">
	<tr>
		<td class="bg">
			<table cellpadding="0" cellspacing="0" border="0" width="{$_PAGE_WIDTH}">
				<tr>
					<td colspan="3" class="space" height="5"></td>
				</tr>
				<tr>
					<td width="{$_MAIN_MARGIN}"></td>
					<td width="{$_MAIN_WIDTH}" class="medium" align="right">
						<b>{$title}</b>
					</td>
					<td width="{$_MAIN_MARGIN}"></td>
				</tr>
				<tr>
					<td colspan="3" class="space" height="5"></td>
				</tr>
			</table>
		</td>
	</tr>
</table>

EOF;

	if ($is_debug) {
		$code .= '</body></html>';
	}

	return $code;
}

/**
 * Styleの出力
 *
 */
function generate_code_style() {

	$code =<<<EOF
<!-- EXAMPLE OF CSS STYLE -->
<style>
.space {
	padding: 0;
}
.bg {
	background-color: #000;
	color: #fff;
}
.bg td {
	color: #fff;
}
.x-small {
	font-size: 8pt;
}
.small {
	font-size: 9pt;
}
.medium {
	font-size: 11pt;
}
.large {
	font-size: 12pt;
}
.space {
	font-size: 1pt;
}
.gray {
	color: #999999;
}
.border-top {
	border-top: 1px solid #ccc;
}
.border-left {
	border-left: 1px solid #ccc;
}
.border-bottom {
	border-bottom: 1px solid #ccc;
}
.table-border td {
	vertical-align: middle;
}
.amount {
	background-color: #DCDCDC;
}
</style>


EOF;

	return $code;

}



/**
 * Faucetがwallmoutの場合の位置調整
 *
 */
function getFaucetPosition($faucet, $lavatory, $data, $base_size, $is_calc=true) {

	$faucet_shape   = $faucet['SHAPE'];
	$faucet_series  = $faucet['SERIES'];

	$lavatory_id    = $lavatory['PRODUCT_ID'];
	$lavatory_shape = $lavatory['SHAPE'];
	$lavatory_h     = $lavatory['SIZE_H'];

	$pos = 0;

	// FaucetのShapeがwallmountかどうか
	// ※wallmount以外は位置調整なし
	if ($faucet_shape == 'wallmount') {

		// 洗面器の溢れ面の位置を取得 ※単位はmm
		// 設定値の取得
		$counter_diff = 0;

		// 指定品番の洗面器かどうか（selfrimming, semi-reccesedの場合、洗面器の溢れ面からの位置がわからないため）
		if (isset($data[$lavatory_id]) && $data[$lavatory_id]) {
			// faucetのSeriesがZLかどうか（設定ファイルで定義）で設置位置が決定
			if (isset($data[$lavatory_id][$faucet_series]) && $data[$lavatory_id][$faucet_series]) {
				$counter_diff = $data[$lavatory_id][$faucet_series];
			} else {
				$counter_diff = $data[$lavatory_id]['default'];
			}
		// 指定品番以外の場合
		} else {
			// faucetのSeriesがZLかどうか（設定ファイルで定義）で溢れ面からの位置を取得
			if (isset($data['default'][$faucet_series]) && $data['default'][$faucet_series]) {
				$counter_diff = $data['default'][$faucet_series];
			} else {
				$counter_diff = $data['default']['default'];
			}
			// LavatoryのShapeがunder以外の場合、洗面器の高さをプラスする
			if ($lavatory_shape != 'under') {
				$counter_diff += $lavatory_h;
			}
		}

		// 換算値の算出 (%)
		$pos_px = $counter_diff * 1.4860861;
		$pos_px -= 130;
		$pos_rate = $pos_px / 2400;

		// $pos = round($pos_rate * 100) / 100;
		if ($is_calc) {
			$pos = round($pos_rate * 100) / 100 * 1200;
		} else {
			$pos = round($pos_rate * 100) / 100;
		}
	}

	return $pos;
}

/**
 * FaucetがZLの場合のレバー位置調整
 * ※LavatoryのShape / 幅（w）/奥行き（）と比較から設置位置を取得
 */
function getFaucetLeverPosition($faucet, $lavatory, $data, $base_size, $is_calc=true) {
	$pos = false;

	$faucet_id       = $faucet['PRODUCT_ID'];
	$faucet_shape    = $faucet['SHAPE'];
	$faucet_series   = $faucet['SERIES'];
	$faucet_category = $faucet['CATEGORY_1'];

	$lavatory_id    = $lavatory['PRODUCT_ID'];
	$lavatory_shape = $lavatory['SHAPE'];
	$lavatory_inset = ($lavatory['CATEGORY_2']=='inset')?'inset':'outset';
	$lavatory_w     = $lavatory['SIZE_W'];
	$lavatory_d     = $lavatory['SIZE_D'];

	if ($lavatory_shape == 'under') {
		$lavatory_w = $lavatory['SIZE_B-W']?$lavatory['SIZE_B-W']:$lavatory_w;
		$lavatory_d = $lavatory['SIZE_B-H']?$lavatory['SIZE_B-H']:$lavatory_d;
	}

	// Faucetがwallmount、2handle以外の場合のみ処理
	// （その２つはレバー一体の画像のため）
	if ( ($faucet_shape != 'wallmount') && ($faucet_shape != 'handle') && ($faucet_series == 'ZL')) {

		$calc_lavatory_w_real = 0;
		$calc_lavatory_d_real = 0;

		// 品番指定がある場合
		if (isset($data[$lavatory_id]) && $data[$lavatory_id]) {
			$calc_lavatory_w_real = $data[$lavatory_id]['w_pos'];
			$calc_lavatory_d_real = $data[$lavatory_id]['h_pos'];

		// 品番指定がない場合、壁からの位置と
		} else {
			// underの場合
			if ($lavatory_shape == 'under') {
				// inset
				if ($lavatory_inset == 'inset') {
					$calc_lavatory_w_real = $data['default'][$lavatory_shape][$lavatory_inset]['w_pos'];
					$calc_lavatory_d_real = $data['default'][$lavatory_shape][$lavatory_inset]['h_pos'];

				// outset
				} else {
					// faucetがshortかどうかの判断
					if ($faucet_category == 'short') {
						$calc_lavatory_w_real = $data['default'][$lavatory_shape][$lavatory_inset]['short']['w_pos'];
						$calc_lavatory_d_real = $data['default'][$lavatory_shape][$lavatory_inset]['short']['h_pos'];
					} else {
						$calc_lavatory_w_real = $data['default'][$lavatory_shape][$lavatory_inset]['default']['w_pos'];
						$calc_lavatory_d_real = $data['default'][$lavatory_shape][$lavatory_inset]['default']['h_pos'];
					}
				}
			} else {
				$calc_lavatory_w_real = $data['default']['default'][$lavatory_inset]['w_pos'];
				$calc_lavatory_d_real = $data['default']['default'][$lavatory_inset]['h_pos'];

			}

			// lavatoryの幅、奥行き分を加算
			$calc_lavatory_w_real = $calc_lavatory_w_real;
			$calc_lavatory_d_real = $calc_lavatory_d_real;

			$calc_lavatory_d_real += $lavatory_d;
			$calc_lavatory_w_real += $lavatory_w / 2;

		}

	  // 定数
	  // 縮尺率（固定）
	  $_RATIO     = 0.785;
	  // 画像サイズ
	  $_BASE_SIZE = 1200;
	  // 基準点から先明記手前までの位置を取得する際の角度（基準点からみて）
	  $_RADIAN    = -0.17125;

		// 起点となる壁と（画像左上からの位置％）
		// $_BASE_POS_LEFT = 69.5;
		// $_BASE_POS_TOP  = 52;
		$_BASE_POS_LEFT = 66;
		$_BASE_POS_TOP  = 50;

		// 換算用の角度分回転させる
		$lavatory_x = cos($_RADIAN) * $calc_lavatory_d_real;
		$lavatory_y = sin($_RADIAN) * $calc_lavatory_d_real;
		$lavatory_x = abs($lavatory_x);
		$lavatory_y = abs($lavatory_y);

		// 縮尺調整
		$lavatory_pos_left = $lavatory_x * $_RATIO;
		$lavatory_pos_top  = $lavatory_y * $_RATIO;
		// ％に変換
		$lavatory_pos_left = $lavatory_pos_left / $_BASE_SIZE;
		$lavatory_pos_top  = $lavatory_pos_top / $_BASE_SIZE;
		// 端数調整
		$lavatory_pos_left = round($lavatory_pos_left * 10000) / 100;
		$lavatory_pos_top  = round($lavatory_pos_top * 10000) / 100;
		// 壁基準点をベースに洗面器位置（手前）を取得
		$lavatory_pos_left = $_BASE_POS_LEFT - $lavatory_pos_left;
		$lavatory_pos_top  = $_BASE_POS_TOP + $lavatory_pos_top;


	  // 洗面器手前位置からレバー設置位置の角度
	  $_RADIAN_LEVER = -2.109;
	  // $_RATIO_LEVER  = 0.785;
	  $_RATIO_LEVER  = 0.6;

		// 換算用の角度分回転させる
		$lever_x = cos($_RADIAN_LEVER) * $calc_lavatory_w_real;
		$lever_y = sin($_RADIAN_LEVER) * $calc_lavatory_w_real;
		$lever_x = abs($lever_x);
		$lever_y = abs($lever_y);

		// 縮尺調整
		$lever_pos_left = $lever_x * $_RATIO_LEVER;
		$lever_pos_top  = $lever_y * $_RATIO_LEVER;
		// ％に変換
		$lever_pos_left = $lever_pos_left / $_BASE_SIZE;
		$lever_pos_top  = $lever_pos_top / $_BASE_SIZE;
		// 端数調整
		$lever_pos_left = round($lever_pos_left * 10000) / 100;
		$lever_pos_top  = round($lever_pos_top * 10000) / 100;

		// 洗面器位置（手前）をベースに、レバー位置を取得
		$lever_pos_left = $lavatory_pos_left + $lever_pos_left;
		$lever_pos_top  = $lavatory_pos_top + $lever_pos_top;

		// 実寸（px）に修正
		// レバー画像は、1200px × 1200pxの中心に配置されている（ハンドルの先端が中心に来る）ので調整する
		if ($is_calc) {
			$lever_pos_left = ($lever_pos_left - 50) / 100 * 1200;
			$lever_pos_top  = ($lever_pos_top - 50) / 100 * 1200;
		}

		$pos = array(
			'pos_left' => $lever_pos_left,
			'pos_top'  => $lever_pos_top
		);
	}

	return $pos;
}


/**
 * Soap Dispenseの位置調整
 * 
 */
function getSoapDispenserPosition($w_pos, $d_pos, $base_size=1200, $is_calc=true) {
	$pos = false;

	if ( ($w_pos != 0) || ($d_pos != 0) ) {
	  // 縮尺率（固定）
	  // $_RATIO     = 0.785;
	  // $_RATIO  = 0.48023432;
	  $_RATIO  = 0.47507309;

		// $_RADIAN = 0.674740942;
		$_RADIAN = 0.661043169;
		$diff_w = ($w_pos - 120);
		$diff_d = ($d_pos - 0);

		$diff_x = 0;
		$diff_y = 0;

		if ($diff_w != 0) {
			$diff_x = $diff_w * cos($_RADIAN);
			$diff_y = $diff_w * sin($_RADIAN);
		}

		if ($diff_d != 0) {
			$diff_x += $diff_d * cos($_RADIAN);
			$diff_y -= $diff_d * sin($_RADIAN);
		}

		if ( ($diff_x != 0) && ($diff_y != 0)) {
			$pos_left = $diff_x * $_RATIO;
			$pos_top  = $diff_y * $_RATIO;

			$pos = array(
				'pos_left' => $pos_left,
				'pos_top'  => $pos_top,
			);
		}
	}

	return $pos;
}

/**
 *
 *
 */
function pr($obj=false) {
	if ($obj) {
		echo '<pre style="border:1px solid #ccc; background-color:#eee; padding:1.0em; margin: 1.0em auto;">';
		print_r($obj);
		echo '</pre>';
	}
}

/**
 * 読み込んだCSV形式のデータを配列に変換
 *
 * @param string CSV形式のデータ（入力画面のテキストエリアに貼り付けられた値を想定）
 * @return array ２次元配列（空のセルも再現）
 */
function convert_csv2arr($path) {
	$data = array();

	if (($handle = fopen($path, "r")) !== FALSE) {
		// rewind($handle);
		while($line = fgetcsv_reg($handle, null, ",")) {
			$data[] = $line;
		}
		fclose($handle);
	}

	return $data;
}

/**
 * ファイルポインタから行を取得し、CSVフィールドを処理する
 * @param resource handle
 * @param int length
 * @param string delimiter
 * @param string enclosure
 * @return ファイルの終端に達した場合を含み、エラー時にFALSEを返します。
 */
function fgetcsv_reg(&$handle, $length = null, $d = ',', $e = '"') {
	$d = preg_quote($d);
	$e = preg_quote($e);
	$_line = "";

	$eof = false;

	while (($eof != true) and (!feof($handle))) {
		$_line .= (empty($length) ? fgets($handle) : fgets($handle, $length));
		$itemcnt = preg_match_all('/'.$e.'/', $_line, $dummy);
		if ($itemcnt % 2 == 0) $eof = true;
	}

	//$_csv_line    = preg_replace('/(?:\\r\\n|[\\r\\n])?$/', $d, trim($_line));
	$_csv_line    = preg_replace('/(?:\\r\\n|[\\r\\n])?$/', $d, $_line);
	$_csv_pattern = '/('.$e.'[^'.$e.']*(?:'.$e.$e.'[^'.$e.']*)*'.$e.'|[^'.$d.']*)'.$d.'/';
	preg_match_all($_csv_pattern, $_csv_line, $_csv_matches);
	$_csv_data = $_csv_matches[1];

	for($_csv_i=0;$_csv_i<count($_csv_data);$_csv_i++){
		$_csv_data[$_csv_i]=preg_replace('/^'.$e.'(.*)'.$e.'$/s','$1',$_csv_data[$_csv_i]);
		$_csv_data[$_csv_i]=str_replace($e.$e, $e, $_csv_data[$_csv_i]);
	}

	return empty($_line) ? false : $_csv_data;
}


/**
 *
 *
 */
function convert_arr2json($data) {
	$result = array();

	if ($data && is_array($data) && (count($data) > 3)) {
		$count = count($data) - 1;
		$title_list = $data[2];

		for($i=3; $i<$count; $i++) {
			$line = $data[$i];
			$item = array();
			foreach($line as $idx => $value) {
				$key = $title_list[$idx];
				$item[$key] = $value;
			}
			$result[] = $item;
		}
	}

	return $result;
}


/**
 *
 *
 */
function convert_arr2json4shower($data) {
	$result = array();

	if ($data && is_array($data) && (count($data) > 3)) {
		// $count = count($data) - 1;
		$count = count($data);
		$title_list = $data[2];

		for($i=3; $i<$count; $i++) {
			$line = $data[$i];
			$item = array();
			foreach($line as $idx => $value) {
				$key = $title_list[$idx];
				$item[$key] = $value;
			}
			$product_type = $item['PRODUCT_TYPE'];

			switch ($item['PRODUCT_TYPE']) {
				case 'over-head-shower':
				case 'hand-shower':
				case 'bath-spout':
				case 'controller':
				case 'valve':
					break;
				default:
					$product_type = 'accessory';
			}

			if (!array_key_exists($product_type, $result)) {
				$result[$product_type] = array();
			}
			$result[$product_type][] = $item;
		}
	}

	return $result;
}


/**
 *
 *
 */
function find_master($id, $list) {
	$result = false;

	foreach($list as $idx => $data) {
		if ($id == $data['PRODUCT_ID']) {
			$result = $data;
			break;
		}
	}

	return $result;
}

/**
 * 金額表示フォーマット変更
 *
 */
function convert_priceFormat($num, $options) {
	$cnv = $num . '';
	// 不要な文字を削除
	$cnv = preg_replace('/[^0-9\.]/', '', $cnv);

	// 数値形式に変換
	$cnv = floatval($cnv);

	// 小数点表示ありの場合
	$digit = ($options && $options['price_decimal_point_digit'])?$options['price_decimal_point_digit']:0;

	// 3桁区切り文字の取得
	$token = ($options && $options['price_token'])?$options['price_token']:',';
	// 金額のフォーマット変換
	$price = number_format($cnv, $digit, '.', $token);

	// 金額単位の取得
	$price_unit = ($options && $options['price_unit'])?$options['price_unit']:'';
	// 金額単位の表示位置の取得
	$price_unit_pos = ($options && $options['price_unit_pos'])?$options['price_unit_pos']:0;

	// 単位の設定
	if ($price_unit) {
		if ($price_unit_pos == 2) {
			$price = $price . ' ' . $price_unit;
		} else {
			$price = $price_unit . ' ' . $price;
		}
	}

	return $price;
}

/**
 * 技術アイコン取得
 *
 */
function get_tech_icon($product, $image_path, $settings, $messages) {
	$result = array();

	$tech_list = $settings['technologies'];

	// 技術アイコン、デザインアイコン
	foreach($tech_list as $idx => $tech) {
		$tech_flg = (isset($product['TECH_' . $idx]) && (!empty($product['TECH_' . $idx])))?true:false;
		if ($tech_flg) {
			$result[] = $image_path['tech_icon_image'] . $tech['id'] . '.png';
		}
	}

	return $result;
}

/**
 * デザイン取得
 *
 */
function get_award_icon($product, $image_path, $settings, $messages) {
	$result = array();
	if ( isset($product['AWARD_01']) && ($product['AWARD_01'] != '') ) {
		$result[] = $image_path['award_icon_image'] . $product['AWARD_01'] . '.png';
	}
	if ( isset($product['AWARD_02']) && ($product['AWARD_02'] != '') ) {
		$result[] = $image_path['award_icon_image'] . $product['AWARD_02'] . '.png';
	}

	return $result;
}

/**
 * URLパラメータを表示用品番に変換
 *
 */
function converParam2ProductID($product_id) {

	// US品番
	$product_id = str_replace('-', '#', $product_id);
	$product_id = str_replace('$', '/', $product_id);
	$product_id = str_replace('!', ' ', $product_id);

	return $product_id;
}

/**
 * SSLかどうかの判断
 *
 */
function is_ssl() {
	// Apache
	if ( isset($_SERVER['HTTPS']) === true ) {
		return ( $_SERVER['HTTPS'] === 'on' or $_SERVER['HTTPS'] === '1' );

	// IIS
	} elseif ( isset($_SERVER['SSL']) === true ) {
		return ( $_SERVER['SSL'] === 'on' );

	// Reverse proxy
	} elseif ( isset($_SERVER['HTTP_X_FORWARDED_PROTO']) === true ) {
		return ( strtolower($_SERVER['HTTP_X_FORWARDED_PROTO']) === 'https' );

	// Reverse proxy
	} elseif ( isset($_SERVER['HTTP_X_FORWARDED_PORT']) === true ) {
		return ( $_SERVER['HTTP_X_FORWARDED_PORT'] === '443' );

	} elseif ( isset($_SERVER['SERVER_PORT']) === true ) {
		return ( $_SERVER['SERVER_PORT'] === '443' );

	}

	return false;
}


/**
 *
 *
 */
class MYPDF extends TCPDF {
	public $custom_parm = array(
		'copy'   => 'TOTO',
		'title'  => '',
		'logo'   => '',
		'myfont' => '',
	);

	//Page header
	public function Header() {

		// Set font
		if (isset($this->custom_param['myfont'])) {
			$this->SetFont($this->custom_param['myfont'], '', 10);
		}

		// 出力用パラメータの取得
		$logo  = $this->custom_param['logo'];
		$title = $this->custom_param['title'];
		$style = $this->custom_param['style'];

		// HTMLコードの取得
		$html  = $style . generate_code_header($logo, $title);

		$this->writeHTML($html, true, false, true, false, '');
	}

	// Page footer
	public function Footer() {

		$this->setY(-8);

		// Set font
		if (isset($this->custom_param['myfont'])) {
			$this->SetFont($this->custom_param['myfont'], '', 10);
		}

		// 出力用パラメータの取得
		$copy = $this->custom_param['copy'];
		$style = $this->custom_param['style'];

		// HTMLコードの取得
		$html  = $style . generate_code_footer($copy);

		$this->writeHTML($html, true, false, true, false, '');
	}
}
