<?php
ini_set('display_errors', 1);
require_once(dirname(__FILE__) . '/classes/tcpdf/tcpdf.php');
require_once(dirname(__FILE__) . '/classes/settings.php');
require_once(dirname(__FILE__) . '/classes/functions.php');
session_start();

// --------------------------------------------------------
// 初期処理
// --------------------------------------------------------
// For Debug
$is_debug = false;
if (isset($_GET) && isset($_GET['debug'])) {
	$is_debug = true;
}

// includeパーツ内でデータ取得（画像作成と同じ機能のため）
$file_list = array();
$data_list = array();

include_once(dirname(__FILE__) . '/classes/init-process-shower.php');

// --------------------------------------------------------
/// 結果画像URLの取得
// --------------------------------------------------------
// $proc = (isset($_SERVER['SERVER_PORT']) && ($_SERVER['SERVER_PORT'] == '80'))?'http://':'https://';
$proc = is_ssl()?'https://':'http://';
$base_url   = $proc . $_SERVER['HTTP_HOST'];

$result_image_url = $base_url . $_SERVER['REQUEST_URI'];
$result_image_url = str_replace('download', 'result-image', $result_image_url);

$this_dir        = dirname(dirname(__FILE__));
$app_dir         = substr( $_SERVER["SCRIPT_FILENAME"], 0, - strlen( $_SERVER["SCRIPT_NAME"] ));
$base_image_path = str_replace($app_dir, '', $this_dir);

$base_image_url = $base_url . $base_image_path . '/assets';
$logo_image_url = $base_image_url . '/images/common/logo_pdf.png';

// --------------------------------------------------------
/// 製品欄のコード生成
// --------------------------------------------------------
$text_title       = $_VARS['messages']['shower_simulator_title'];
$text_tax         = $_VARS['messages']['tax_include'];
$text_amount      = $_VARS['messages']['total_amount'];
$text_annotation  = $_VARS['messages']['result_annotation'];
$text_footer      = $_VARS['messages']['pdf_footer_text'];

$html_product = '';
$total_price  = 0;

$col_idx      = 0;
$col_pos      = 0;
$data_count   = count($data_list);
$row_count    = ceil($data_count / 2);

foreach($data_list as $data_id => $data) {
	// カテゴリ名の取得
	$category_massage_id = str_replace('-', '_', $data_id);
	$category_name = $_VARS['messages'][$category_massage_id];

	if (isset($data['product_type']) && $data['product_type']) {
		$category_massage_id = str_replace('-', '_', $data['product_type']);
		$category_name = $_VARS['messages'][$category_massage_id];
	}

	// 画像の取得
	// 製品欄では画像を表示しないよう修正
	// $image = $base_image_url . $data['image'];

	// 技術アイコンの取得
	$code_icon_table = '';
	$code_icon_table = generate_code_icon_list($data, $base_image_url);

	// 合計金額の掲載
	$total_price += (isset($data['price_num']) && $data['price_num'])?$data['price_num']:0;

	// 製品リスト表示位置の制御
	$col_pos = $col_idx % 2;
	$col_idx++;

	// THMLコードの出力
	if ($col_pos == 0) {
		$html_product .=<<<EOF
<tr>
EOF;
	}

	// 品番非表示フラグの取得
	$product_no   = $data['name'];
	$product_type = isset($data['product_type'])?$data['product_type']:false;
	if ($product_type && array_key_exists($product_type . '-hide_product_no_flg', $_VARS['settings']) && $_VARS['settings'][$product_type . '-hide_product_no_flg']) {
		$product_no = '';
	}

	$html_product .=<<<EOF
	<td class="border-bottom" width="{$_MAIN_PRODUCT_WIDTH}">
		<table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr><td class="x-small category" align="left"><b>{$category_name}</b></td></tr>
			<tr><td class="large prooduct" align="left"><b>{$product_no}</b></td></tr>
			<tr><td align="left">{$code_icon_table}</td></tr>
		</table>
	</td>
	<td class="border-bottom price" width="{$_MAIN_PRICE_WIDTH}" align="right">
EOF;

	// 金額表示
	if ($_VARS['settings']['price_flg']) {
		$html_product .=<<<EOF
		<table class="border-left" cellpadding="0" cellspacing="0" border="0">
			<tr><td class="space" height="10"></td></tr>
			<tr><td class="large" align="right"><b>{$data['price']}</b></td></tr>
			<tr><td class="x-small gray" align="right">{$text_tax}</td></tr>
			<tr><td class="space" height="10"></td></tr>
		</table>
EOF;
	}

	$html_product .=<<<EOF
	</td>
EOF;

	// 2カラムの左側表示の場合、間のマージンを追加
	if ($col_pos == 0) {
		$html_product .=<<<EOF
<td class="border-bottom" width="{$_MAIN_PRODUCT_MARGIN}"></td>
<td class="border-bottom border-left" width="{$_MAIN_PRODUCT_MARGIN}"></td>
EOF;

	// 2カラムの右側表示の場合、trタグを閉じる
	} else {
		$html_product .=<<<EOF
</tr>
EOF;
	}
}

// 商品数が奇数の場合、空の要素を追加
if ($col_pos == 0) {
	$html_product .=<<<EOF
	<td class="border-bottom" width="{$_MAIN_PRODUCT_WIDTH}">
	</td>
	<td class="border-bottom price" width="{$_MAIN_PRICE_WIDTH}" align="right">
	</td>
</tr>
EOF;
}

// 表示用合計金額の取得
$total_price_disp = convert_priceFormat($total_price, $_VARS['settings']);

// 製品欄用のtableの組み立て
if ($html_product) {
	$html_product =<<<EOF
<table cellpadding="0" cellspacing="0" border="0" width="{$_PAGE_WIDTH}" class="container">
	<tr>
		<td width="{$_MAIN_MARGIN}"></td>
		<td width="{$_MAIN_WIDTH}">
			<table cellpadding="{$_TABLE_PADDING}" cellspacing="0" border="0" width="100%" class="border-top">
			{$html_product}
			</table>
		</td>
		<td width="{$_MAIN_MARGIN}"></td>
	</tr>
EOF;

	// 金額表示（金額表示ありの場合のみ）
	if ($_VARS['settings']['price_flg']) {

		$html_product .=<<<EOF
	<tr>
		<td width="{$_MAIN_MARGIN}"></td>
		<td width="{$_MAIN_WIDTH}">
			<table cellpadding="{$_TABLE_PADDING}" cellspacing="0" border="0" width="100%">
				<tr>
					<td class="amount" width="{$_MAIN_AMOUNT_WIDTH}">
						<table cellpadding="0" cellspacing="0" border="0" width="100%">
							<tr><td class="large" align="left"><b>{$text_amount}</b></td></tr>
						</table>
					</td>
					<td align="right" class="amount" width="{$_MAIN_PRICE_WIDTH}">
						<table cellpadding="0" cellspacing="0" border="0" width="100%">
							<tr><td class="large" align="right"><b>{$total_price_disp}</b></td></tr>
							<tr><td class="x-small gray" align="right">{$text_tax}</td></tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
		<td width="{$_MAIN_MARGIN}"></td>
	</tr>
EOF;
	}

	$html_product .=<<<EOF
</table>

EOF;
}


// --------------------------------------------------------
/// 結果画像欄のコード生成
// --------------------------------------------------------
$html_result =<<<EOF
<table cellpadding="0" cellspacing="0" border="0" width="100%">
	<tr>
		<td width="{$_RESULT_MARGIN}"></td>
		<td width="{$_RESULT_WIDTH}" align="center">
			<img src="{$result_image_url}" width="{$_RESULT_WIDTH}" height="{$_RESULT_WIDTH}">
		</td>
		<td width="{$_RESULT_MARGIN}"></td>
	</tr>
	<tr>
		<td width="{$_RESULT_MARGIN}"></td>
		<td width="{$_RESULT_WIDTH}" align="left" class="gray x-small">{$text_annotation}</td>
		<td width="{$_RESULT_MARGIN}"></td>
	</tr>
	<tr>
		<td colspan="3" height="{$_SECTION_SPACE_HEIGHT_HALF}"></td>
	</tr>
</table>
EOF;

// --------------------------------------------------------
// style(CSS)コードの取得
// --------------------------------------------------------
$html_style = generate_code_style();


// --------------------------------------------------------
// For Debug
// --------------------------------------------------------
if ($is_debug) {

	echo $html_style;

	// Debug用Header出力
	echo generate_code_header($logo_image_url, $text_title, $is_debug);

	// pr($_MAIN_AMOUNT_WIDTH);
	// 結果画像欄の表示
	echo $html_result;

	// 製品情報欄・合計金額欄の表示
	echo $html_product;

	// Debug用Footer出力
	echo generate_code_footer($text_footer, $is_debug);

	exit;
}

// --------------------------------------------------------
// PDFファイルの生成
// --------------------------------------------------------
// FONTの設定
$font = new TCPDF_FONTS();
//ttfフォントをTCPDF用に変換 
$myfont = false;
if ($_VARS['settings']['language'] == 'en') {
	$myFont = $font->addTTFfont(dirname(__FILE__) . '/assets/font/Poppins-Regular.ttf');
} else if ($_VARS['settings']['language'] == 'th') {
	$myFont = $font->addTTFfont(dirname(__FILE__) . '/assets/font/THSarabunNew.ttf');
} else {
	$myFont = $font->addTTFfont(dirname(__FILE__) . '/assets/font/DroidSansFallback.ttf');
}

// TCPDFインスタンスを作成
$orientation = 'P'; // 用紙の向き (P or L)
$unit        = 'mm'; // 単位
$format      = 'A4'; // 用紙フォーマット
$unicode     = true; // ドキュメントテキストがUnicodeの場合にTRUEとする
$encoding    = 'UTF-8'; // 文字コード
$diskcache   = false; // ディスクキャッシュを使うかどうか

$pdf = new MYPDF($orientation, $unit, $format, $unicode, $encoding, $diskcache);

// 自動改ページをONにする
// $pdf->SetAutoPageBreak(true, 5);
// PDFファイルのタイトルを設定
$pdf->SetTitle('TOTO ' . $text_title);
// PDFファイルのサブタイトルを設定
$pdf->SetSubject($text_title);
// PDFファイルの作成者を設定
$pdf->SetAuthor('TOTO');

// HEADER・FOOTERの変数
$pdf->custom_param = array();
$pdf->custom_param['myfont'] = $myFont;
$pdf->custom_param['style']  = $html_style;
$pdf->custom_param['logo']   = $logo_image_url;
$pdf->custom_param['title']  = $text_title;
$pdf->custom_param['copy']   = $text_footer;

// HEADER・FOOTERの出力
$pdf->setPrintHeader(true);
$pdf->setPrintFooter(true);

// 余白の設定
$pdf->SetMargins(0, 20, 0);

// ページ追加
$pdf->AddPage();

// フォントの設定
$pdf->SetFont($myFont, "", 10);

// HTMLの出力（結果画像欄）
$pdf->writeHTML($html_style . $html_result . $html_product, true, false, true, false, '');

// // HTMLの出力（結果画像欄）
// $pdf->writeHTML($html_style . $html_result, true, false, true, false, '');
// if ($row_count > 3) {
// 	// 改ページ追加
// 	$pdf->AddPage();
// }
// // HTMLの出力（製品情報欄）
// $pdf->writeHTML($html_style . $html_product, true, false, true, false, '');

// reset pointer to the last page
$pdf->lastPage();

// ファイルを出力
$fileName = 'toto-shower-set.pdf';
$pdfData  = $pdf->Output(rawurlencode($fileName), 'S');
$pdf->Output(rawurlencode($fileName), "I");
