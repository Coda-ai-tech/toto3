<?php
$_CONF = array();

$_CONF['asset_path'] = dirname(dirname(dirname(__FILE__))) . '/assets';
$_CONF['json'] = array(
	'settings' => '/data/settings.json',
	'messages' => '/data/message.json',
);
$_CONF['faucet_csv'] = array(
	'faucet'          => '/data/faucet.csv',
	'lavatory'        => '/data/lavatory.csv',
	'faucet_relation' => '/data/faucet-lavatory-relation.csv',
	'faucet_controller_relation' => '/data/faucet-controller-relation.csv',
	'faucet_sd_relation'         => '/data/faucet-sd-relation.csv',
	'sd_lavatory_position'       => '/data/sd-lavatory-position.csv',
);
$_CONF['shower_csv'] = array(
	'shower'          => '/data/shower-set.csv',
	'shower_relation' => '/data/shower-relation.csv',
);
$_CONF['faucet_image_path'] = array(
	'faucet_image'     => '/images/products/faucet/',
	'lavatory_image'   => '/images/products/lavatory/',
	'icon_image'       => '/images/common/icon/',
	'common_image'     => '/images/products/common/',
	'tech_icon_image'  => '/images/common/icon/technologies/',
	'award_icon_image' => '/images/common/icon/award/',
);
$_CONF['shower_image_path'] = array(
	'over-head-shower_image' => '/images/products/over-head-shower/',
	'hand-shower_image'      => '/images/products/hand-shower/',
	'bath-spout_image'       => '/images/products/bath-spout/',
	'controller_image'       => '/images/products/controller/',
	'valve_image'            => '/images/products/controller/',
	'accessory_image'        => '/images/products/shower-accessory/',
	'common_image'           => '/images/products/common/',
	'tech_icon_image'        => '/images/common/icon/technologies/',
	'award_icon_image'       => '/images/common/icon/award/',
);


$_RESULT_IMAGE_WIDTH  = 400;
$_RESULT_IMAGE_HEIGHT = 400;

$_PAGE_WIDTH    = '100%';
$_RESULT_WIDTH  = 300;
$_RESULT_MARGIN = 150;

$_TABLE_PADDING = 10;

$_MAIN_MARGIN   = 20;
$_MAIN_WIDTH    = 560;

$_MAIN_PRODUCT_WIDTH  = 180;
$_MAIN_PRODUCT_MARGIN = 5;
$_MAIN_PRICE_WIDTH    = 90;

$_MAIN_AMOUNT_WIDTH = $_MAIN_WIDTH - ($_MAIN_PRODUCT_WIDTH + ($_TABLE_PADDING * 2));

$_MAIN_AMOUNT_WIDTH = 460;

$_SECTION_SPACE_HEIGHT = 30;
$_SECTION_SPACE_HEIGHT_HALF = 15;

