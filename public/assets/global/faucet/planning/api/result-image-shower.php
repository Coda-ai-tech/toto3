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

include_once(dirname(__FILE__) . '/classes/init-process-shower.php');


// --------------------------------------------------------
// 画像の生成
// --------------------------------------------------------
// 空の画像を作成する
$baseimage = imagecreatetruecolor($_BASE_IMAGE_WIDTH, $_BASE_IMAGE_HEIGHT);

// imagecolortransparent($baseimage, imagecolorallocate($baseimage, 0, 0, 0));
imagefill($baseimage, 0, 0, imagecolorallocate($baseimage, 237, 237, 237));

// 画像を重ねる
foreach($file_list as $item){
	$product_type = $item['type'];
	$file_path = $item['file'];
	$file = $_CONF['asset_path'] . $file_path;

	if (!file_exists($file)) {
		continue;
	}
	$addImage = imagecreatefrompng($file); // 合成する画像を取り込む

		// 合成する画像のサイズを取得
	$sw = imagesx($addImage);
	$sh = imagesy($addImage);

	$pos_y = 0;
	if (isset($controller_pos[$product_type]) && isset($controller_pos[$product_type][1]) && $controller_pos[$product_type][1]) {
		$pos_y = $controller_pos[$product_type][1];
	}

	// 合成する際、透過を考慮する
	imageLayerEffect($baseimage, IMG_EFFECT_ALPHABLEND);
 	// 合成する
 	// imagecopy($baseimage, $addImage, 0, 0, 0, 0, $sw, $sh);
 	imagecopyresized($baseimage, $addImage, 0, $pos_y, 0, 0, $_BASE_IMAGE_WIDTH, $_BASE_IMAGE_HEIGHT, $sw, $sh);
	// 破棄
	imagedestroy($addImage);
}


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