function changeFocus(){
	let items = ['aside', 'header','footer', '#search']
	items.forEach(i => {
		document.querySelector(i).classList.toggle('focus')
	})
}

function changeFocusSearch(){
	if (!document.querySelector("#search").classList.contains('focus')){
		changeFocus();
	}
}
