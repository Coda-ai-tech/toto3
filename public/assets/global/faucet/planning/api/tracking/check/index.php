<?php
require_once(dirname(dirname(__FILE__)) . '/config.php');

session_name(APP_SESSION_NAME_CONSOLE);
session_start();

$tracking = new TrackingLog($_TRACKING_CONF);

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TRACKING CHECKER | TOTO</title>

<style>
section {
	padding-bottom:  2.0em;
	padding-left: 1.0em;
	padding-right: 1.0em;
}
section + section {
	margin-top: 2.0em;
	padding-top: 2.0em;
	border-top: 1px solid #ccc;
}
</style>
</head>
<body>

<section>
<h2>Session</h2>
<?php
$count = 0;
if (isset($_SESSION['check-count']) && !empty($_SESSION['check-count'])) {
	$tmp_count = $_SESSION['check-count'];
	if (preg_match('/^[0-9]+$/', $tmp_count)) {
		$count = intval($tmp_count);
	}
}
$count++;
$_SESSION['check-count'] = $count;
?>
<p>COUNT : <?php echo $count; ?></p>
</section>

<section>
<h2>File</h2>

<?php
$tmp_path = dirname(dirname(__FILE__)) . '/data/tmp/';
$tmp_filename = 'check.csv';
$tmp_filepath = $tmp_path . $tmp_filename;

if (file_exists($tmp_filepath)) {
	echo '<p>TARGET FILE EXISTS.</p>';
	pr($tmp_filepath);
	if (is_writable($tmp_filepath)) {
		echo '<p>TARGET FILE IS WRITABLE.</p>';
		pr($tmp_filepath);
	} else {
		echo '<p>TARGET FILE IS NOT WRITABLE.</p>';
		pr($tmp_filepath);
	}

} else {
	echo '<p>TARGET FILE DOES NOT EXIST.</p>';
	pr($tmp_filepath);
}

// ファイルを新規に作成
try {

	if (is_writable($tmp_path)) {
		$handler = fopen($tmp_filepath, "a");

		flock($handler, LOCK_EX);
		fputs($handler, date('Y.m.d H:i:s') . ',TEST,AAA,BBB' . APP_CSV_NEWLINE);
		flock($handler, LOCK_UN);
		fclose($handler);

		chmod($tmp_filepath, 0777);

		if (file_exists($tmp_filepath)) {
			echo '<p>CREATED A NEW TARGET FILE. or UPDATED A TARGET FILE.</p>';
			pr($tmp_filepath);
		} else {
			echo '<p>FAILED TO CREATE A NEW TARGET FILE.</p>';
			pr($tmp_filepath);
		}
	} else {
		echo '<p>THE TARGET DIRECTORY CANNOT BE WRITTEN.</p>';
		pr($tmp_path);
	}

} catch (Exception $e) {
	echo '<p>FAILED TO CREATE A NEW TARGET FILE.</p>';

	pr($e->getMessage());
}

if (file_exists($tmp_filepath)) {
	echo '<p><a href="./download.php" target="_blank">DOWNLOAD</a></p>';
}
?>
</section>

<section>
<h2>DOWNLOAD TEST</h2>
<p><a href="./download.php?check_download" target="_blank">DOWNLOAD</a></p>
</section>

<section>
<h2>Tracking TEST</h2>
	<dl>
		<dt>faucet-lavatory</dt>
		<dd>
			<a href="../?top-faucet-series=1&fid=TLE24001&fc=PC&sdid=TLK07001&stid=TLK01101&cuid=TLE01501&coid=TLE05701&lid=LW546&type=f" target="_blank">tracking test</a>
		</dd>
	</dl>
	<dl>
		<dt>touchless-faucet-lavatory</dt>
		<dd>
			<a href="../?top-faucet-series=1&fid=TLE24001&fc=PC&sdid=TLK07001&stid=TLK01101&cuid=TLE01501&coid=TLE05701&lid=LW546&type=t" target="_blank">tracking test</a>
		</dd>
	</dl>
	<dl>
		<dt>shower</dt>
		<dd>
			<a href="../?top-over-head-shower=1&top-hand-shower=1&top-bath-spout=1&oid=TBW01003&pid=&hid=TBW01008&bid=TBP02001&cid=TBV02402&cuid=TBN01001&v1id=TBV02105&vu1id=TBN01001&v2id=&vu2id=&a1id=TBW01016&a2id=TBW01014&a3id=&type=s" target="_blank">tracking test</a>
		</dd>
	</dl>
</section>


<section>
<h2>DELETE FILE</h2>
<a href="?b_delete">Delete Tmp file</a>
<?php
if (isset($_GET['b_delete'])) {
	if (file_exists($tmp_filepath)) {
		if (unlink($tmp_filepath)) {
			echo '<p>file delete.</p>';
		}
	}
}

?>
</section>


</body>
</html>