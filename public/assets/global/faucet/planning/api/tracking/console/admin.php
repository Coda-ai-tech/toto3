<?php
require_once(dirname(dirname(__FILE__)) . '/config.php');
session_start();

$sys_message  = '';
$is_login = false;

$tracking = false;
if (isset($_SESSION['b_login']) && ($_SESSION['b_login'] === true)) {
	$is_login = true;
	$tracking = new TrackingLog($_TRACKING_CONF);

	if (isset($_POST) && isset($_POST['act']) && ($_POST['act'] == 'delete')) {

		$filename = isset($_POST['period'])?trim($_POST['period']):'ng.csv';
		if (!empty($filename)) {
			$filepath = $_TRACKING_CONF['log_file'] . $filename;
			if (file_exists($filepath)) {
				unlink($filepath);
				$sys_message  = 'file deleted. <br>' . $filename;
			}
		}
	}

}



?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>CSV DOWNLOAD | Faucet / Lavatory & Shower Simulator | TOTO</title>
	<meta name="description" content="TOTO's free simulator. You can freely choose the combination of faucet and lavatory. You can easily choose a combination from your favorite shape, color and series.">
	<meta name="keywords" content="">
	<meta name="robots" content="noindex">

	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../../../assets/css/tracking-console.css">

</head>
<body>
<div class="l_wrapper">

	<header class="l_header">
		<div class="l_header__inner">
			<h1 class="l_header__logo">
				<span class="l_header__logo--img"><img src="../../../assets/images/common/logo_black.svg" alt="TOTO"></span>
				<span class="l_header__logo--txt">FAUCET & LAVATORY / SHOWER Planning</span>
			</h1>
		</div>
	</header>

	<main class="l_main">
		<section class="l_main__inner">
			<h2 class="uq_title">CSV Manager</h2>

<?php
// [START] ログイン状態による分岐
// ログイン済の場合
if ($is_login) :
	// データファイルの取得
	$filelist = $tracking->get_logfiles();
?>
			<div class="uq_donwload">
				<dl class="uq_donwload__item">
					<dt class="uq_donwload__item--title">FAUCET</dt>
					<dd class="uq_donwload__item--body">
<?php
	$options  = $filelist['faucet-lavatory'];
	$message  = (count($options) > 0)?'':'No data found.';
	$disabled = (count($options) > 0)?'':'disabled';

?>
						<form class="js-download-form" action="" method="post" <?php echo $disabled; ?>>

							<p class="uq_select">
								<select name="period" required <?php echo $disabled; ?>>
									<option value="">Choose a month</option>
									<?php echo $tracking->generate_options($options); ?>
								</select>
							</p>
							<p class="uq_donwload__btn">
								<button class="uq_btn" type="submit" <?php echo $disabled; ?>><span>DELETE</span></button>
							</p>
							<p class="uq_message js-download-form--error"><?php echo $message; ?></p>

							<input type="hidden" name="act" value="delete">
							<input type="hidden" name="type" value="faucet">
						</form>
					</dd>
				</dl>

				<dl class="uq_donwload__item">
					<dt class="uq_donwload__item--title">SHOWER</dt>
					<dd class="uq_donwload__item--body">
<?php
	$options  = $filelist['shower'];
	$message  = (count($options) > 0)?'':'No data found.';
	$disabled = (count($options) > 0)?'':'disabled';
?>
						<form class="js-download-form" action="" method="post" <?php echo $disabled; ?>>
							<p class="uq_select">
								<select name="period" required <?php echo $disabled; ?>>
									<option value="">Choose a month</option>
									<?php echo $tracking->generate_options($options); ?>
								</select>
							</p>
							<p class="uq_donwload__btn">
								<button class="uq_btn" type="submit" <?php echo $disabled; ?>><span>DELETE</span></button>
							</p>
							<p class="uq_message js-download-form--error"><?php echo $message; ?></p>

							<input type="hidden" name="act" value="delete">
							<input type="hidden" name="type" value="shower">
						</form>
					</dd>
				</dl>
			</div>

			<p class="uq_message"><?php echo $sys_message; ?></p>

<?php
endif;
// [END] ログイン状態による分岐
?>


		</section>

	</main>

<script src="../../../assets/js/libs/libs.min.js"></script>
<script src="../../../assets/js/tracking-console.min.js"></script>

</body>
</html>