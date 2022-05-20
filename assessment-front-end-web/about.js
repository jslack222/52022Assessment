console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let duck = document.querySelector("#duck")

duck.addEventListener("mouseover", imgCom)

function imgCom() {
	alert('Looking good cupcake')
}
