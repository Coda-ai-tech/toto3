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
$_IMAGE_PATH = $_CONF['faucet_image_path'];

// 画像サイズの定義
// $_SIZE = (isset($_GET['s']) && ($_GET['s']=='s'))?'small':'normal';
$_SIZE = 'normal';

$_BASE_IMAGE_WIDTH  = 1200;
$_BASE_IMAGE_HEIGHT = 1200;


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
foreach($_CONF['faucet_csv'] as $type => $path) {

	$file_path = $_CONF['asset_path'] . $path;
	// JSONデコード
	$tmp_data = convert_csv2arr($file_path);

	$data = false;

	if ($type == 'sd_lavatory_position') {

    $relation = array();
    foreach($tmp_data as $idx => $item) {
      if ($idx < 1) {
        continue;
      }

      $faucet_id   = trim($item[0]);
      $lavatory_id = trim($item[1]);
      $w_pos = trim($item[2]);
      $d_pos = trim($item[3]);

      if (!array_key_exists($faucet_id, $relation)) {
        $relation[$faucet_id] = array();
      }
      $relation[$faucet_id][$lavatory_id] = array(
        'w_pos' => $w_pos,
        'd_pos' => $d_pos,
      );
    }
    $data = $relation;
  } else {
		// 1要素を連想配列とする配列に変換
		$data = convert_arr2json($tmp_data);
  }

	$_VARS[$type] = $data;
}

// pr($_VARS);

// --------------------------------------------------------
// URLパラメータの取得
// --------------------------------------------------------
$faucet_id     = (isset($_GET['fid']) && $_GET['fid']) ? $_GET['fid'] : false;
$faucet_colour = (isset($_GET['fc']) && $_GET['fc']) ? $_GET['fc'] : false;
$lavatory_id   = (isset($_GET['lid']) && $_GET['lid']) ? $_GET['lid'] : false;


$soapdispenser_id       = (isset($_GET['sdid']) && $_GET['sdid']) ? $_GET['sdid'] : false;
$soaptank_id            = (isset($_GET['stid']) && $_GET['stid']) ? $_GET['stid'] : false;
$controller_unit_id     = (isset($_GET['cuid']) && $_GET['cuid']) ? $_GET['cuid'] : false;
$controller_option_id   = (isset($_GET['coid']) && $_GET['coid']) ? $_GET['coid'] : false;

$faucet_option_flow          = (isset($_GET['fof']) && $_GET['fof']) ? $_GET['fof'] : false;
$faucet_option_power         = (isset($_GET['fop']) && $_GET['fop']) ? $_GET['fop'] : false;
$faucet_option_soapdispenser = (isset($_GET['fosd']) && $_GET['fosd']) ? $_GET['fosd'] : false;
$faucet_option_temperature   = (isset($_GET['fot']) && $_GET['fot']) ? $_GET['fot'] : false;


// --------------------------------------------------------
// 製品データの取得
// --------------------------------------------------------
$is_outset = false;

$faucet    = false;
$faucet_series     = '';
$faucet_series_cat = '';
$faucet_shape      = '';
$faucet_category   = '';
$faucet_image      = '';
$faucet_image_upper = '';


$soapdispenser = false;
$soapdispenser_image = '';
$soaptank = false;
$controller_unit = false;
$controller_option = false;


$lavatory = false;
$lavatory_shape = '';
$lavatory_image = '';

$background_image_name = '';
$background_image = '';

// Faucet情報の取得
if ($faucet_id) {
	$faucet = find_master($faucet_id, $_VARS['faucet']);
	if ($faucet) {
		if ( isset($faucet['COLOUR_' . $faucet_colour]) && $faucet['COLOUR_' . $faucet_colour] ) {
			$faucet_image       = $_IMAGE_PATH['faucet_image'] . $faucet_id . '_' . $faucet_colour . '.png';
			$faucet_image_upper = $_IMAGE_PATH['faucet_image'] . $faucet_id . '_' . $faucet_colour . '_u.png';
			$faucet_series     = $faucet['SERIES'];
			$faucet_series_cat = $faucet['SERIES_CATEGORY'];
			$faucet_shape      = $faucet['SHAPE'];
			$faucet_category   = $faucet['CATEGORY_1'];
			$faucet_price      = $faucet['PRICE'];

			// Colourに応じて金額を変更する設定の場合
			if (isset($_VARS['settings']['faucet_price_type']) && $_VARS['settings']['faucet_price_type']) {
				$faucet_price = $faucet['COLOUR_' . $faucet_colour];
			}

			$data_list['faucet'] = array(
				'name'       => $faucet_id . ' (' . $faucet_series . $_VARS['messages']['category_series'] . ')',
				'price_num'  => $faucet_price,
				'price'      => convert_priceFormat($faucet_price, $_VARS['settings']),
				'colour'     => $_VARS['messages']['colour_' . $faucet_colour],
				'tech_icon'  => get_tech_icon($faucet, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
				'award_icon' => get_award_icon($faucet, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
				'image'      => $faucet_image,
			);

			// Soap Dispenser
			if ($soapdispenser_id) {
				$soapdispenser = find_master($soapdispenser_id, $_VARS['faucet']);
				if ($soapdispenser) {
					$soapdispenser_image = $_IMAGE_PATH['faucet_image'] . $soapdispenser_id . '_' . $faucet_colour . '.png';
					$soapdispenser_price = $soapdispenser['PRICE'];
					$data_list['soapdispenser'] = array(
						'name'       => $soapdispenser_id,
						'price_num'  => $soapdispenser_price,
						'price'      => convert_priceFormat($soapdispenser_price, $_VARS['settings']),
						'colour'     => $_VARS['messages']['colour_' . $faucet_colour],
						'tech_icon'  => get_tech_icon($soapdispenser, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
						'award_icon' => get_award_icon($soapdispenser, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
						'image'      => false,
					);

					if ($soaptank_id) {
						$soaptank = find_master($soaptank_id, $_VARS['faucet']);
						if ($soaptank) {
							$soaptank_price = $soaptank['PRICE'];
							$data_list['soaptank'] = array(
								'name'       => $soaptank_id,
								'price_num'  => $soaptank_price,
								'price'      => convert_priceFormat($soaptank_price, $_VARS['settings']),
								'colour'     => false,
								'tech_icon'  => get_tech_icon($soaptank, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
								'award_icon' => get_award_icon($soaptank, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
								'image'      => false,
							);
						}
					}
				}
			}

			if ($controller_unit_id) {
				$controller_unit = find_master($controller_unit_id, $_VARS['faucet']);
				if ($controller_unit) {
					$controller_unit_price = $controller_unit['PRICE'];
					$data_list['faucet_controller_unit'] = array(
						'name'       => $controller_unit_id,
						'price_num'  => $controller_unit_price,
						'price'      => convert_priceFormat($controller_unit_price, $_VARS['settings']),
						'colour'     => $_VARS['messages']['colour_' . $faucet_colour],
						'tech_icon'  => get_tech_icon($controller_unit, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
						'award_icon' => get_award_icon($controller_unit, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
						'image'      => false,
					);

					if ($controller_option_id) {
						$controller_option = find_master($controller_option_id, $_VARS['faucet']);
						if ($controller_option) {
							$controller_option_price = $controller_option['PRICE'];
							$data_list['faucet_controller_option'] = array(
								'name'       => $controller_option_id,
								'price_num'  => $controller_option_price,
								'price'      => convert_priceFormat($controller_option_price, $_VARS['settings']),
								'colour'     => false,
								'tech_icon'  => get_tech_icon($controller_option, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
								'award_icon' => get_award_icon($controller_option, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
								'image'      => false,
							);
						}
					}
				}
			}
		}
	}
}

$background_image_name  = 'wall_only.png';
if ($lavatory_id) {
	// Lavatoryの品番は # がつくものがあるが、URL（画面名含む）の場合はNGのため、「-」に変換された品番が送られるため、変換が必要
	// 表示や、データ検索は「#」で行い、画像のみ「-」
	$lavatory_image_name = $lavatory_id;
	$lavatory_id = str_replace('-', '#', $lavatory_id);

	$lavatory = find_master($lavatory_id, $_VARS['lavatory']);

	if ($lavatory) {

		$lavatory_shape = $lavatory['SHAPE'];
		$lavatory_image_add = '';
		if ($lavatory['IS_CHANGE_SERIES']) {
			if ($faucet_series_cat == 'L') {
				$lavatory_image_add = '_L';
			}
		}
		// 洗面器がunderと、水栓金具がwallmoutかつshortの組み合わせの場合、洗面器画像を変える
		$is_counter_none = false;
		if ( ( ($lavatory_shape == 'under') || ($lavatory_shape == 'vessel_outset') || ($lavatory_shape == 'self_rimming') || ($lavatory_shape == 'semi_reccesed') || ($lavatory_shape == 'galalato') )  && ($faucet_shape == 'wallmount') && ($faucet_category == 'short') ) {
			$lavatory_image_add .= '_short';

			// semi reccesed + shortの場合はカウンター付き洗面器のため、背景を変更する
			if ($lavatory_shape == 'semi_reccesed') {
				$is_counter_none = true;
			}
		}

		$lavatory_image = $_IMAGE_PATH['lavatory_image'] . $lavatory_image_name . $lavatory_image_add . '.png';

		// 重ね順の制御
		$is_separete_counter = $lavatory['IS_SEPARETE_COUNTER']?true:false;
		// Shapeがvessel_outset、galalato以外の場合、カウンターあり画像のためinset / outset に関わらず、金具が上になる (inset扱いとする)
		// $is_outset = (($lavatory['CATEGORY_2'] == 'outset') && (($lavatory_shape == 'vessel_outset') || ($lavatory_shape == 'galalato')  || ($lavatory_shape == 'self_rimming' && $is_separete_counter) ))?true:false;
		$is_outset = (($lavatory['CATEGORY_2'] == 'outset') && (($lavatory_shape == 'vessel_outset') || ($lavatory_shape == 'galalato')  || ( (($lavatory_shape == 'self_rimming') || ($lavatory_shape == 'semi_reccesed')) && $is_separete_counter) ))?true:false;

		// Faucetがwallmountの場合、outset扱いを解除（faucetが１番上になるよう制御）
		if ($faucet && ($faucet['SHAPE'] == 'wallmount')) {
			$is_outset = false;
		}

		// 背景画像の制御
		// if ( ($lavatory_shape == 'vessel_inset') || ($lavatory_shape == 'vessel_outset') ) {
		if ( ($lavatory_shape == 'vessel_outset') || ($lavatory_shape == 'galalato') || $is_separete_counter ) {
			$background_image_name  = 'wall_counter.png';

			if (!$is_counter_none && ($lavatory_shape == 'semi_reccesed')) {
				$background_image_name  = 'wall_counter_semi_reccesed.png';
			} else if ($is_counter_none) {
				$background_image_name  = 'wall_only.png';
			}
		}

		$lavatory_price  = $lavatory['PRICE'];

		$data_list['lavatory'] = array(
			'name'       => $lavatory_id . ' (' . $_VARS['messages']['lavatory_shape_' . $lavatory_shape] . ')',
			'price_num'  => $lavatory_price,
			'price'      => convert_priceFormat($lavatory_price, $_VARS['settings']),
			'colour'     => $_VARS['messages']['colour_W'],
			'tech_icon'  => get_tech_icon($lavatory, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'award_icon' => get_award_icon($lavatory, $_IMAGE_PATH, $_VARS['settings'], $_VARS['messages']),
			'image'      => $lavatory_image,
		);

	}
}

// faucet が wallmountの場合の表示位置の取得
$faucet_wallmount_data = $_VARS['settings']['faucet_wallmount_pos']?$_VARS['settings']['faucet_wallmount_pos']:false;
$faucet_wallmount_pos  = getFaucetPosition($faucet, $lavatory, $faucet_wallmount_data, $_BASE_IMAGE_HEIGHT);

// faucet が ZLかつSingleの場合、レバー表示が必要
// レバーの設置位置が、洗面器との組み合わせにより異なるため、表示位置を取得する
$faucet_lever_data = $_VARS['settings']['faucet_lever_pos']?$_VARS['settings']['faucet_lever_pos']:false;
$faucet_lever_pos  = getFaucetLeverPosition($faucet, $lavatory, $faucet_lever_data, $_BASE_IMAGE_HEIGHT);

$faucet_faucet_separate_data = $_VARS['settings']['faucet_separete']?$_VARS['settings']['faucet_separete']:false;
$is_faucet_separate = false;
if (isset($faucet_faucet_separate_data[$faucet_id]) && $faucet_faucet_separate_data[$faucet_id]) {
	$is_faucet_separate = true;
}

// SD
$soapdispenser_pos = false;
$sd_lavatory_position = $_VARS['sd_lavatory_position'];
if ($soapdispenser && array_key_exists($soapdispenser_id, $sd_lavatory_position) && array_key_exists($lavatory_id, $sd_lavatory_position[$soapdispenser_id])) {
  $position = $sd_lavatory_position[$soapdispenser_id][$lavatory_id];
  $w_pos = $position['w_pos'];
  $d_pos = $position['d_pos'];

  // if ($angle) {
  //   $soap_dispenser_image_add = '_' . $angle;
  // }

  $calc_pos = getSoapDispenserPosition($w_pos, $d_pos);
  if ($calc_pos) {
    $calc_left = $calc_pos['pos_left'];
    $calc_top  = $calc_pos['pos_top'];

    // パーセンテージに変換
    // $calc_left = (-1) * round($calc_w_pos * 10000 / 1200) / 100;
    // $calc_top  = (-1) * round($calc_d_pos * 10000 / 1200) / 100;

    $soapdispenser_pos = array(
    	'pos_left' => $calc_left,
    	'pos_top'  => $calc_top,
    );

  }
}




// --------------------------------------------------------
// 出力画像リストの取得
// --------------------------------------------------------
if ($faucet && $lavatory) {
	if ($is_outset) {
		$file_list[] = array('file' => $_IMAGE_PATH['common_image'] . $background_image_name, 'type' => 'background');
		if ($soapdispenser_image) {
			$file_list[] = array('file' => $soapdispenser_image, 'type' => 'soapdispenser');
		}
		$file_list[] = array('file' => $faucet_image, 'type' => 'faucet');
		$file_list[] = array('file' => $lavatory_image, 'type' => 'lavatory');
	} else {
		$file_list[] = array('file' => $_IMAGE_PATH['common_image'] . $background_image_name, 'type' => 'background');
		$file_list[] = array('file' => $lavatory_image, 'type' => 'lavatory');
		if ($soapdispenser_image) {
			$file_list[] = array('file' => $soapdispenser_image, 'type' => 'soapdispenser');
		}
		$file_list[] = array('file' => $faucet_image, 'type' => 'faucet');
	}

	// FaucetがZLシリーズの場合のレバー画像（single/w sinngle/wo の場合）
	if ($faucet_lever_pos) {
		$add_faucet_lever_image = '';
		if (isset($_VARS['settings']['faucet_lever_image']) && isset($_VARS['settings']['faucet_lever_image'][$lavatory_id]) && $_VARS['settings']['faucet_lever_image'][$lavatory_id] ) {
			$add_faucet_lever_image = '_' . $_VARS['settings']['faucet_lever_image'][$lavatory_id];
		}
		$faucet_lever_image = $_IMAGE_PATH['faucet_image'] . 'zl_lever/zl_lever_' . $faucet_colour . $add_faucet_lever_image . '.png';


		$file_list[] = array('file' => $faucet_lever_image, 'type' => 'faucet_lever');
	}
	// Lavatoryとの組み合わせより、Faucetの上部を分割する必要があるため、上部分のみの画像を追加
	if ($is_faucet_separate) {
		$file_list[] = array('file' => $faucet_image_upper, 'type' => 'faucet_upper');
	}
}

