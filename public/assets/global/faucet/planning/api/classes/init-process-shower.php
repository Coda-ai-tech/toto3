<?php
// --------------------------------------------------------
// 連続Click防止
// --------------------------------------------------------
$now = time();
if ( isset($_SESSION['lasttime']) ) {
	$lasttime = $_SESSION['lasttime'];
	if ( ($now - $lasttime) < 1) {
		$_SESSION['lasttime'] = $now;

		header ('HTTP/1.0 503 Service Temporarily Unavailable');
		exit;
	}
}

// --------------------------------------------------------
// 初期設定
// --------------------------------------------------------
// 各画像パスの定義
$_IMAGE_PATH = $_CONF['shower_image_path'];

// 画像サイズの定義
// $_SIZE = (isset($_GET['s']) && ($_GET['s']=='s'))?'small':'normal';
$_SIZE = 'normal';

$_BASE_IMAGE_WIDTH  = 2400;
$_BASE_IMAGE_HEIGHT = 2400;


// --------------------------------------------------------
// 各種データの取得
// --------------------------------------------------------
$_VARS = array();

// 取得したファイルからBOMを削除ためのBOM定義
$bom  = pack('H*','EFBBBF');
// JSONファイルの習得
foreach($_CONF['json'] as $type => $path) {

	$file_path = $_CONF['asset_path'] . $path;

	$json = file_get_contents($file_path);
	// 文字コード変換
	$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
	// BOM削除
	$json = preg_replace("/^$bom/", '', $json);
	// JSONデコード
	$data = json_decode($json, true);

	$_VARS[$type] = $data;
}

// CSVファイルの習得
foreach($_CONF['shower_csv'] as $type => $path) {

	$file_path = $_CONF['asset_path'] . $path;
	// JSONデコード
	$tmp_data = convert_csv2arr($file_path);

	if ($type == 'shower') {
		// 1要素を連想配列とする配列に変換
		$list = convert_arr2json4shower($tmp_data);
		foreach($list as $data_type => $data) {
			$_VARS[$data_type] = $data;
		}

	} else {
		// 1要素を連想配列とする配列に変換
		$data = convert_arr2json($tmp_data);

		$_VARS[$type] = $data;
	}
}

// pr($_VARS);
// --------------------------------------------------------
// URLパラメータの取得
// --------------------------------------------------------
$over_head_shower_id = (isset($_GET['oid']) && $_GET['oid']) ? $_GET['oid'] : false;
$hand_shower_id = (isset($_GET['hid']) && $_GET['hid']) ? $_GET['hid'] : false;
$bath_spout_id  = (isset($_GET['bid']) && $_GET['bid']) ? $_GET['bid'] : false;

$controller_id  = (isset($_GET['cid']) && $_GET['cid']) ? $_GET['cid'] : false;

$valve1_id  = (isset($_GET['v1id']) && $_GET['v1id']) ? $_GET['v1id'] : false;
$valve2_id  = (isset($_GET['v2id']) && $_GET['v2id']) ? $_GET['v2id'] : false;

$accessory1_id  = (isset($_GET['a1id']) && $_GET['a1id']) ? $_GET['a1id'] : false;
$accessory2_id  = (isset($_GET['a2id']) && $_GET['a2id']) ? $_GET['a2id'] : false;
$accessory3_id  = (isset($_GET['a3id']) && $_GET['a3id']) ? $_GET['a3id'] : false;

$relation_no  = (isset($_GET['pos']) && $_GET['pos']) ? $_GET['pos'] : false;


// --------------------------------------------------------
// 製品データ・画像リストの取得
// --------------------------------------------------------
$over_head_shower = false;
$over_head_shower_image = '';

$hand_shower = false;
$hand_shower_image = '';

$bath_spout = false;
$bath_spout_image = '';

$controller_spout = false;
$controller_spout_image = '';

$valve1 = false;
$valve1_image = '';

$valve2 = false;
$valve2_image = '';

$accessory1 = false;
$accessory1_image = '';

$accessory2 = false;
$accessory2_image = '';

$accessory3 = false;
$accessory3_image = '';


$background_image = $_IMAGE_PATH['common_image'] . 'shower_wall_s.png';

$file_list = array();
if ($over_head_shower_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$over_head_shower_image_id = $over_head_shower_id;
	$over_head_shower_id = converParam2ProductID($over_head_shower_id);

	$over_head_shower = find_master($over_head_shower_id, $_VARS['over-head-shower']);
	if ($over_head_shower) {
		$over_head_shower_image = $_IMAGE_PATH['over-head-shower_image'] . $over_head_shower_image_id . '.png';

		$file_list[] = array(
			'file' => $over_head_shower_image,
			'type' => 'over-head-shower'
		);

		// 表示用品番に変換
		$over_head_shower_price  = $over_head_shower['PRICE'];
		$data_list['over-head-shower'] = array(
			'name'       => $over_head_shower_id,
			'price_num'  => $over_head_shower_price,
			'price'      => convert_priceFormat($over_head_shower_price, $_VARS['settings']),
			'tech_icon'  => get_tech_icon($over_head_shower, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($over_head_shower, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $over_head_shower_image,
		);
	}
}
if ($hand_shower_id) {

	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$hand_shower_image_id = $hand_shower_id;
	$hand_shower_id = converParam2ProductID($hand_shower_id);

	$hand_shower = find_master($hand_shower_id, $_VARS['hand-shower']);
	if ($hand_shower) {
		$hand_shower_image = $_IMAGE_PATH['hand-shower_image'] . $hand_shower_image_id . '.png';

		$file_list[] = array(
			'file' => $hand_shower_image,
			'type' => 'hand-shower'
		);

		$hand_shower_price  = $hand_shower['PRICE'];
		$data_list['hand-shower'] = array(
			'name'       => $hand_shower_id,
			'price_num'  => $hand_shower_price,
			'price'      => convert_priceFormat($hand_shower_price, $_VARS['settings']),
			'tech_icon'  => get_tech_icon($hand_shower, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($hand_shower, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $hand_shower_image,
		);
	}
}
if ($bath_spout_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$bath_spout_image_id = $bath_spout_id;
	$bath_spout_id = converParam2ProductID($bath_spout_id);

	$bath_spout = find_master($bath_spout_id, $_VARS['bath-spout']);
	if ($bath_spout) {
		$bath_spout_image = $_IMAGE_PATH['bath-spout_image'] . $bath_spout_image_id . '.png';

		$file_list[] = array(
			'file' => $bath_spout_image,
			'type' => 'bath-spout'
		);

		$bath_spout_price  = $bath_spout['PRICE'];
		$data_list['bath-spout'] = array(
			'name'       => $bath_spout_id,
			'price_num'  => $bath_spout_price,
			'price'      => convert_priceFormat($bath_spout_price, $_VARS['settings']),
			'tech_icon'  => get_tech_icon($bath_spout, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($bath_spout, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $bath_spout_image,
		);

	}
}
if ($controller_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$controller_image_id = $controller_id;
	$controller_id = converParam2ProductID($controller_id);

	$controller = find_master($controller_id, $_VARS['controller']);
	if ($controller) {
		$controller_image = $_IMAGE_PATH['controller_image'] . $controller_image_id . '.png';

		$file_list[] = array(
			'file' => $controller_image,
			'type' => 'controller'
		);

		$controller_price  = $controller['PRICE'];
		$data_list['controller'] = array(
			'name'       => $controller_id,
			'price_num'  => $controller_price,
			'price'      => convert_priceFormat($controller_price, $_VARS['settings']),
			'tech_icon'  => get_tech_icon($controller, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($controller, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $controller_image,
		);
	}
}
if ($valve1_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$valve1_image_id = $valve1_id;
	$valve1_id = converParam2ProductID($valve1_id);

	$valve1 = find_master($valve1_id, $_VARS['valve']);
	if ($valve1) {
		$valve1_image = $_IMAGE_PATH['valve_image'] . $valve1_image_id . '.png';

		$file_list[] = array(
			'file' => $valve1_image,
			'type' => 'valve1'
		);

		$valve1_price  = $valve1['PRICE'];
		$data_list['valve1'] = array(
			'name'       => $valve1_id,
			'price_num'  => $valve1_price,
			'price'      => convert_priceFormat($valve1_price, $_VARS['settings']),
			'tech_icon'  => get_tech_icon($valve1, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($valve1, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $valve1_image,
		);
	}
}
if ($valve2_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$valve2_image_id = $valve2_id;
	$valve2_id = converParam2ProductID($valve2_id);

	$valve2 = find_master($valve2_id, $_VARS['valve']);
	if ($valve2) {
		$valve2_image = $_IMAGE_PATH['valve_image'] . $valve2_image_id . '.png';

		$file_list[] = array(
			'file' => $valve2_image,
			'type' => 'valve2'
		);

		$valve2_price  = $valve2['PRICE'];
		$data_list['valve2'] = array(
			'name'       => $valve2_id,
			'price_num'  => $valve2_price,
			'price'      => convert_priceFormat($valve2_price, $_VARS['settings']),
			'tech_icon'  => get_tech_icon($valve2, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($valve2, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $valve2_image,
		);
	}
}

if ($accessory1_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$accessory1_image_id = $accessory1_id;
	$accessory1_id = converParam2ProductID($accessory1_id);

	$accessory1 = find_master($accessory1_id, $_VARS['accessory']);
	if ($accessory1) {

		// USの場合、ホース別品番のため、処理を分岐する
		if ($_VARS['settings']['shower-hose-separete_flg']) {
			$accessory1_image = $_IMAGE_PATH['accessory_image'] . $accessory1_image_id . '.png';
		} else {
			$accessory1_image = $_IMAGE_PATH['accessory_image'] . $accessory1_image_id . '_PVC_L1600.png';
		}

		$file_list[] = array(
			'file' => $accessory1_image,
			'type' => 'accessory'
		);

		$accessory1_price  = $accessory1['PRICE'];
		$data_list['accessory1'] = array(
			'name'         => $accessory1_id,
			'product_type' => $accessory1['PRODUCT_TYPE'],
			'price_num'    => $accessory1_price,
			'price'        => convert_priceFormat($accessory1_price, $_VARS['settings']),
			'tech_icon'    => get_tech_icon($accessory1, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon'   => get_award_icon($accessory1, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'        => $accessory1_image,
		);
	}
}

$is_elbow_hook = false;
if ($accessory2_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$accessory2_image_id = $accessory2_id;
	$accessory2_id = converParam2ProductID($accessory2_id);

	$accessory2 = find_master($accessory2_id, $_VARS['accessory']);
	if ($accessory2) {

		$accessory2_image = $_IMAGE_PATH['accessory_image'] . $accessory2_image_id . '.png';

		// エルボーフック（一体型）選択時、ホース切り替えが必要
		if ($accessory2['PRODUCT_TYPE'] == "shower-elbow-hook") {
			$is_elbow_hook = true;
			$accessory2_image = $_IMAGE_PATH['accessory_image'] . $accessory2_image_id . '_PVC_L1600.png';
			if ($_VARS['settings']['shower-hose-separete_flg']) {
				$accessory2_image = $_IMAGE_PATH['accessory_image'] . $accessory2_image_id . '.png';
			}
		}

		$file_list[] = array(
			'file' => $accessory2_image,
			'type' => 'accessory'
		);

		$accessory2_price  = $accessory2['PRICE'];
		$data_list['accessory2'] = array(
			'name'         => $accessory2_id,
			'product_type' => $accessory2['PRODUCT_TYPE'],
			'price_num'    => $accessory2_price,
			'price'        => convert_priceFormat($accessory2_price, $_VARS['settings']),
			'tech_icon'    => get_tech_icon($accessory2, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon'   => get_award_icon($accessory2, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'        => $accessory2_image,
		);
	}
}
if ($accessory3_id) {
	// 表示品番（変換）、画像品番（URLパラメータそのまま）の制御
	$accessory3_image_id = $accessory3_id;
	$accessory3_id = converParam2ProductID($accessory3_id);

	$accessory3 = find_master($accessory3_id, $_VARS['accessory']);
	if ($accessory3) {
		$accessory3_image = $_IMAGE_PATH['accessory_image'] . $accessory3_image_id . '.png';
		// エルボーフック（一体型）選択時、ホース切り替えが必要
		if ($is_elbow_hook) {
			$accessory3_image = $_IMAGE_PATH['accessory_image'] . $accessory3_image_id . '_ELBOW_HOOK.png';
		}

		$file_list[] = array(
			'file' => $accessory3_image,
			'type' => 'accessory'
		);

		$accessory3_price  = $accessory3['PRICE'];
		$data_list['accessory3'] = array(
			'name'         => $accessory3_id,
			'product_type' => $accessory3['PRODUCT_TYPE'],
			'price_num'    => $accessory3_price,
			'price'        => convert_priceFormat($accessory3_price, $_VARS['settings']),
			'tech_icon'    => get_tech_icon($accessory3, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon'   => get_award_icon($accessory3, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'        => $accessory3_image,
		);
	}
}

// Controllerの表示位置の取得
$controller_combination_count = $_VARS['settings']['controller_combination_count'][$relation_no]?$_VARS['settings']['controller_combination_count'][$relation_no]:1;
$controller_pos = array();
if ($controller_combination_count == 1) {
	$controller_pos['controller'] = array(0, 0);
	$controller_pos['valve1']     = false;
	$controller_pos['valve2']     = false;
} else if ($controller_combination_count == 2) {
	$controller_pos['controller'] = array(0, 200);
	$controller_pos['valve1']     = array(0, 0);
	$controller_pos['valve2']     = false;
} else if ($controller_combination_count == 3) {
	// $controller_pos['controller'] = array(0, 200);
	// $controller_pos['valve1']     = array(0, -200);
	// $controller_pos['valve2']     = array(0, 0);
	$controller_pos['controller'] = array(0, 200);
	$controller_pos['valve1']     = array(0, 0);
	$controller_pos['valve2']     = array(0, -200);
}



if (count($file_list) > 0) {
	array_unshift($file_list, array('file' => $background_image, 'type' => 'wall'));
}

