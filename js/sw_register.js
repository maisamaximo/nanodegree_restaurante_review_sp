if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/sw.js')
	  .then(reg => {
		console.log('Falha ao registrar: ', reg.scope);
	  }).catch(err => {
		console.log('Sucesso ao Registrar: ', err);
	  });
	});
  }