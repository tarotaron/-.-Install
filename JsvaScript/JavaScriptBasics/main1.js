'use strict';

{
	function update() {
		// document.querySelector('#target').textContent = 'Chaged!';
		document.getElementById('target').textContent = 'Chaged!';
	}

	setTimeout(update, 1000);
}