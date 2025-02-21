<?php
ini_set('display_errors', 1);
require_once(dirname(__FILE__) . '/classes/tcpdf/tcpdf.php');
require_once(dirname(__FILE__) . '/classes/settings.php');
require_once(dirname(__FILE__) . '/classes/functions.php');
session_start();

// --------------------------------------------------------
// 初期処理
// --------------------------------------------------------
// includeパーツ内でデータ取得（画像作成と同じ機能のため）
$file_list = array();
$data_list = array();

include_once(dirname(__FILE__) . '/classes/init-process-faucet.php');

// --------------------------------------------------------
// 画像の生成
// --------------------------------------------------------
// 空の画像を作成する
$baseimage = imagecreatetruecolor($_BASE_IMAGE_WIDTH, $_BASE_IMAGE_HEIGHT);
// 背景の設定
imagefill($baseimage, 0, 0, imagecolorallocate($baseimage, 237, 237, 237));

// 画像を重ねる
foreach($file_list as $item){
	$file_path = $item['file'];
	$file = $_CONF['asset_path'] . $file_path;

	if (!file_exists($file)) {
		continue;
	}
	$addImage = imagecreatefrompng($file); // 合成する画像を取り込む

		// 合成する画像のサイズを取得
	$sw = imagesx($addImage);
	$sh = imagesy($addImage);

	$pos_x = 0;
	$pos_y = 0;

	// 水栓金具の場合のセット位置調整
	if (($item['type'] == 'faucet') && isset($faucet_wallmount_pos) && $faucet_wallmount_pos) {
		$pos_y = $faucet_wallmount_pos * -1;
	}
	// 水栓レバー（ZL・Singleのみ）の場合のセット位置調整
	if (($item['type'] == 'faucet_lever') && isset($faucet_lever_pos) && $faucet_lever_pos) {
		$pos_x = $faucet_lever_pos['pos_left'];
		$pos_y = $faucet_lever_pos['pos_top'];
	}
	// S
	if (($item['type'] == 'soapdispenser') && isset($soapdispenser_pos) && $soapdispenser_pos) {
		$pos_x = $soapdispenser_pos['pos_left'] * -1;
		$pos_y = $soapdispenser_pos['pos_top'] * -1;
	}

	// 合成する際、透過を考慮する
	imageLayerEffect($baseimage, IMG_EFFECT_ALPHABLEND);
 	// 合成する
 	// imagecopy($baseimage, $addImage, 0, 0, 0, 0, $sw, $sh);
 	imagecopyresized($baseimage, $addImage, $pos_x, $pos_y, 0, 0, $_BASE_IMAGE_WIDTH, $_BASE_IMAGE_HEIGHT, $sw, $sh);


	// 破棄
	imagedestroy($addImage);
}

// pr('LEVER');
// pr($faucet_lever_pos);
// pr('SD');
// pr($soapdispenser_pos);
// exit;


$newimage = imagecreatetruecolor($_RESULT_IMAGE_WIDTH, $_RESULT_IMAGE_HEIGHT);
// imagecolortransparent($newimage, imagecolorallocate($newimage, 0, 0, 0));
imagecopyresampled($newimage, $baseimage, 0, 0, 0, 0, $_RESULT_IMAGE_WIDTH, $_RESULT_IMAGE_HEIGHT, $_BASE_IMAGE_WIDTH, $_BASE_IMAGE_HEIGHT);

// 別名で保存
// imagepng($newimage, "assets/images/combine.png");
header ('Content-Type: image/png');
imagepng($newimage);

imagedestroy($baseimage);
imagedestroy($newimage);

$_SESSION['lasttime'] = $now;

// header('Content-Type: image/png')
// imagepng($newImage);