<?php
// optional settings
// TIMEZONE
define('APP_TIMEZONE', 'Asia/Tokyo');

// CSV settings
define('APP_CSV_NEWLINE', "\r\n");
define('APP_CSV_DELIMITER', ",");
define('APP_CSV_DATEFORMAT', "Y-m-d H:i:s");

// Login settings
define('APP_LOGIN_USER', 'toto');
define('APP_LOGIN_PASS', 'mm-toto');
define('APP_LOGIN_ANNOTATION', "Contact us when you forgot your user id or password.\nTOTO LTD. Global Product Marketing Sec.\nTOTO株式会社 グローバル事業推進本部 グローバル商品営業G");

// system settings
define('APP_TRACK_URL', "../api/tracking/");

date_default_timezone_set(APP_TIMEZONE);
ini_set('display_errors', 1);

define('APP_SESSION_NAME_CONSOLE', 'simulator-console');
define('APP_SESSION_NAME_TRACKING', 'simulator-tracking');

ini_set('session.cookie_httponly', '1');
session_name(APP_SESSION_NAME_CONSOLE);


$_TRACKING_CONF = array();

$_TRACKING_CONF['type'] = array(
	'f' => 'faucet-lavatory',
	// 't' => 'touchless-faucet-lavatory',
	't' => 'faucet-lavatory',
	's' => 'shower',
);

// Faucet / Lavatory Planning
$_TRACKING_CONF['faucet-lavatory'] = array(
	'title' => array(
		'date'              => 'DATE',
		'uuid'              => 'UUID',
		'is-touchless'      => 'TOUCHLESS FLG',
		'top-faucet-series' => 'TOP Select - FAUCET / Series',
		'top-faucet-shape'  => 'TOP Select - FAUCET / Shape',
		'top-faucet-colour' => 'TOP Select - FAUCET / Colour',
		'top-lavatory'      => 'TOP Select - LAVATORY',
		'fid'               => 'FAUCET',
		'fc'                => 'FAUCET COLOUR',
		'sdid'              => 'SOAP DISPENSER',
		'stid'              => 'SOAP TANK',
		'cuid'              => 'CONTROLLER UNIT',
		'coid'              => 'OPTION',
		'lid'               => 'LAVATORY',
	),
);

// Touchless Faucet / Lavatory Planning
$_TRACKING_CONF['touchless-faucet-lavatory'] = $_TRACKING_CONF['faucet-lavatory'];

// Shower Planning
$_TRACKING_CONF['shower'] = array(
	'title' => array(
		'date'                 => 'DATE',
		'uuid'              => 'UUID',
		'top-over-head-shower' => 'TOP Select - OVER HEAD SHOWER',
		'top-hand-shower'      => 'TOP Select - HAND SHOWER',
		'top-bath-spout'       => 'TOP Select - BATH SPOUT',
		'oid'                  => 'OVER HEAD SHOWER',
		'pid'                  => 'PIPE',
		'hid'                  => 'HAND SHOWER',
		'bid'                  => 'BATH SPOUT',
		'cid'                  => 'CONTROLLER',
		'cuid'                 => 'CONTROLLER UNIT',
		'v1id'                 => 'CONTROLLER',
		'vu1id'                => 'CONTROLLER UNIT',
		'v2id'                 => 'CONTROLLER',
		'vu2id'                => 'CONTROLLER UNIT',
		'a1id'                 => 'SLIDE RAIL / SHOWER HOOK',
		'a2id'                 => 'SHOWER ELBOW',
		'a3id'                 => 'SHOWER HOSE',
	)
);

// ログファイルの出力先
$_TRACKING_CONF['log_file'] = dirname(__FILE__) . '/data/';



// グローバル関数
if (!function_exists('pr')) {
	function pr($obj=false) {
		echo '<pre style="margin: 1.0em 0; padding: 1.0em; border: 1px solid #ccc; background-color: #eee;">';
		print_r($obj);
		echo '</pre>';
	}
}


require_once(dirname(__FILE__) . '/classes/TrackingLog.php');
