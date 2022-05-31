function doLoad1(value) {
	err = document.getElementById('cerror');
	var req = new JsHttpRequest(); req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') { var url = "/thanks.html"; $(location).attr('href', url); window.location = '/thanks.html'; return true; }
			else { err.innerHTML = req.responseJS.er_mess; }
		}
	}
	req.open(null, 'comment.php', true); req.send({ q: value });
}

function doLoad2(value) {
	err = document.getElementById('cerror2');
	var req = new JsHttpRequest(); req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') { var url = "/thanks.html"; $(location).attr('href', url); window.location = '/thanks.html'; return true; }
			else { err.innerHTML = req.responseJS.er_mess; }
		}
	}
	req.open(null, 'comment2.php', true); req.send({ q: value });
}