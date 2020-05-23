'use strict';

// {
// 	function update() {
// 		// document.querySelector('#target').textContent = 'Chaged!';
// 		document.getElementById('target').textContent = 'Chaged!';
// 	}

// 	setTimeout(update, 1000);
// }

// {
// 	function update() {
// 		// querySelector=見つかった最初の要素のみ
// 		// document.querySelector('p').textContent = 'Chaged!';
// 		// querySelectorAll=全ての対象
// 		// document.querySelectorAll('p').textContent = 'Chaged!';
// 		// 配列指定
// 		// document.querySelectorAll('p')[2].textContent = 'Chaged!';
// 		document.querySelectorAll('p').forEach((p, index) => {
// 			p.textContent = `${index}番目のpです`;
// 		});
// 	}

// 	setTimeout(update, 1000);
// }

// {
// 	function update() {
// 		// document.querySelector('#target').textContent = 'Chaged!';
// 	}
// 	document.querySelector('button').addEventListener('click', () =>{
// 		document.getElementById('target').textContent = 'Chaged!';
// 	});
// }

// {
// 	document.querySelector('button').addEventListener('click', () =>{
// 		const targetNode = document.getElementById('target');
// 		targetNode.textContent = 'Chaged!';
// 		targetNode.title = `This is title!`;
// 		targetNode.style.color = 'red';
// 	});
// }

// {
// 	document.querySelector('button').addEventListener('click', () =>{
// 		const targetNode = document.getElementById('target');
// 		// className=書き換える
// 		targetNode.className = 'my-color'
// 	});
// }

// {
// 	document.querySelector('button').addEventListener('click', () =>{
// 		const targetNode = document.getElementById('target');
// 		// classList.add=書き換えずに追加
// 		// targetNode.classList.add('my-color')
// 		// contains=trueはfalseを返す
// 		// if(targetNode.classList.contains('my-color') == true) {
// 		// 	targetNode.classList.remove('my-color');
// 		// } else {
// 		// 	targetNode.classList.add('my-color');
// 		// }
// 		// toggle=表示、非表示を切り替える
// 		targetNode.classList.toggle('my-color');
// 	});
// }

// {
// 	document.querySelector('button').addEventListener('click', () =>{
// 		const targetNode = document.getElementById('target');
// 		// targetNode.textContent = 'Dontinstall'
// 		targetNode.textContent = targetNode.dataset.translation;
// 	});
// }

{
	document.querySelector('button').addEventListener('click', () => {
		const item0 = document.querySelectorAll('li')[0];
		const copy = item0.cloneNode(true);

		const ul = document.querySelector('ul');
		const item2 = document.querySelectorAll('li')[2];
		ul.insertBefore(copy, item2);
	});
}
