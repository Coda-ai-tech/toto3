<?php
require_once(dirname(__FILE__) . '/config.php');

session_name(APP_SESSION_NAME_TRACKING);
session_start();

// 送信データの取得
if (isset($_GET) && isset($_GET['type'])) {

	$type = $_GET['type'];
	if (array_key_exists($type, $_TRACKING_CONF['type'])) {
		$type = $_TRACKING_CONF['type'][$type];
		$tracking = new TrackingLog($_TRACKING_CONF, $type);

		// トラッキングデータの保存
		if (!$tracking->track($_GET)) {
			echo '0';
		} else {
			echo '1';
		}
	} else {
		pr($type);
		echo -1;
	}
}
