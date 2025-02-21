<?php
require_once(dirname(dirname(__FILE__)) . '/config.php');
session_start();

$is_invalid = true;
$filename = '';
$filepath = '';

$is_login = false;
if (isset($_SESSION['b_login']) && $_SESSION['b_login']) {
	if (isset($_POST)) {

		// ログイン処理
		if (isset($_POST['act']) && ($_POST['act'] == 'download')) {

			$filename = isset($_POST['period'])?trim($_POST['period']):'';

			if (!empty($filename)) {
				$filepath = $_TRACKING_CONF['log_file'] . $filename;
				if (file_exists($filepath)) {
					$is_invalid = false;
				}
			}
		}
	}

	if (!$is_invalid) {
		header('Content-Type: application/force-download');
		header('Content-Length: '.filesize($filepath));
		header('Content-disposition: attachment; filename="'.$filename.'"');
		readfile($filepath);
		exit;
	}
}

header('Location: ./');
exit;