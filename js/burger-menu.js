// Бургер
let mobbar = document.querySelector('.mob-nav-bar');
let burger = document.querySelector('.button_burger');
let html = document.body;
burger.onclick = function() {
	mobbar.classList.toggle('activmob-nav-bar');
	burger.classList.toggle('closemobburger');
	body.classList.toggle('stopscroll');
}
// Табы (Дать на проверку)  = переписать под "делегировагие событий"
let toogletab = document.getElementById('toogletab');
let toogle = toogletab.querySelectorAll('#tog2, #tog1, #tog3');
let div = document.querySelectorAll('.tabcontent')
toogletab.onclick = function(e) {
	let target = e.target; 
	if(target.classList[1] === 'active') return;
	for (i=0; i < toogletab.children.length; i++) {
    if (toogle[i].classList.contains("active")) {
			toogle[i].classList.remove("active");
		}
	}
	target.classList.add('active');
  for(i = 0; i < div.length; i++ ) {
   div[i].classList.remove("visible")
	 if(target.dataset.number === div[i].dataset.number) {
		div[i].classList.add("visible");
	 }
	}
}
// Stop Scroll
