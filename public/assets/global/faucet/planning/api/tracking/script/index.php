<?php
require_once(dirname(dirname(__FILE__)) . '/config.php');

// pr($_SERVER["SCRIPT_FILENAME"]);
// pr($_SERVER["SCRIPT_NAME"]);

// $_TRACKING_URL  = substr( $_SERVER["SCRIPT_FILENAME"], 0, - strlen( $_SERVER["SCRIPT_NAME"] ));
$_TRACKING_URL = APP_TRACK_URL;

header('Content-Type: application/javascript');
?>
"use strict";

var ENGINE = ENGINE || {};
ENGINE.SimulatorTracking = {
	send: function(params) {

		var query = '';
		var cnt = 0;
		for(var i in params) {
			if (cnt > 0) {
				query += '&';
			}
			query += i + '=' + params[i];
			cnt++;
		}

		ENGINE.SimulatorCommon.load(
			'<?php echo $_TRACKING_URL; ?>' + '?' + query,
			// Success
			function(data) {
			},
			// Error
			function(message) {
				console.log('tracking error');
				console.log(message);
			},
			// Progress
			function(state) {
			}
		);
	}
};

console.log(ENGINE.SimulatorTracking);
