window.addEventListener('load', () =>{
	console.log('loaded...')
	const roulette = document.querySelector('.roulette');
	const result = document.querySelector('.result')
	while (true){
		roulette.addEventListener('click', () =>{
			result.textContent = 'randomizing...';
			const opt1 = document.querySelector('#opt1').value;
			const opt2 = document.querySelector('#opt1').value;
			const opt3 = document.querySelector('#opt1').value;
			const opt4 = document.querySelector('#opt1').value;
			const opt5 = document.querySelector('#opt1').value;
			const opt6 = document.querySelector('#opt1').value;
			const opt7 = document.querySelector('#opt1').value;
			const opt8 = document.querySelector('#opt1').value;
			const opt9 = document.querySelector('#opt1').value;
			const opt10 = document.querySelector('#opt1').value;
			const opt11 = document.querySelector('#opt1').value;
			const opt12 = document.querySelector('#opt1').value;
			const options = [opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10, opt11, opt12]
			results = options[Math.floor(Math.random() * options.length)];
			console.log(results)
			result.textContent = results

		});
	}

});