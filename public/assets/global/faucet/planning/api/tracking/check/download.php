<?php
session_start();
require_once(dirname(dirname(__FILE__)) . '/config.php');

$is_invalid = true;

$tmp_path = dirname(dirname(__FILE__)) . '/data/tmp/';
$filename = 'check.csv';
if (isset($_GET['check_download'])) {
	$filename = 'tmp.csv';
}
$filepath = $tmp_path . $filename;

if (file_exists($filepath)) {
	header('Content-Type: application/force-download');
	header('Content-Length: '.filesize($filepath));
	header('Content-disposition: attachment; filename="'.$filename.'"');
	readfile($filepath);
}
