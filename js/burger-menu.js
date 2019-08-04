// Бургер
var mobbar = document.querySelector('.mob-nav-bar');
var burger = document.querySelector('.button_burger');
burger.onclick = function() {
	mobbar.classList.toggle('activmob-nav-bar');
	burger.classList.toggle('closemobburger');
	document.body.classList.toggle('stopscroll');
}
// Табы (Дать на проверку)  = переписать под "делегировагие событий"
var toogletab = document.getElementById('toogletab');
var toogle = toogletab.querySelectorAll('#tog2, #tog1, #tog3');
var div = document.querySelectorAll('.tabcontent')
toogletab.onclick = function(e) {
	var target = e.target; 
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
