// Бургер
let mobbar = document.querySelector('.mob-nav-bar');
let burger = document.querySelector('.button_burger');
let htdy = document.querySelectorAll('html, body');
burger.onclick = function() {
	mobbar.classList.toggle('activmob-nav-bar');
	burger.classList.toggle('closemobburger');
  for(i = 0; i < htdy.length; i++)
	 htdy[i].classList.toggle('stopscroll');
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
	return false;
}
// Табы документы(Дать на проверку)  = переписать под "делегировагие событий"
let toogledoc = document.querySelector('.toogledoc');
let toogleTagA = toogledoc.querySelectorAll('a');
let divdoc = document.querySelectorAll('.contentwr');
toogledoc.onclick = function(e) {
	let target = e.target; 
	if(target.classList === 'activetab') return;
	for (i=0; i < toogledoc.children.length; i++) {
    if (toogleTagA[i].classList.contains("activetab")) {
			toogleTagA[i].classList.remove("activetab");
		}
	}
	target.classList.add('activetab');
  for(i = 0; i < divdoc.length; i++ ) {
		divdoc[i].classList.remove("show")
	 if(target.dataset.number === divdoc[i].dataset.number) {
		divdoc[i].classList.add("show");
	 }
	}
	return false;
}
// FAQ
let faq = document.querySelector('.faq');
let text = faq.querySelectorAll('.anstext');
let quest = faq.querySelectorAll('.quest')
faq.onclick = function(e) {
	e.preventDefault()
	let mytarget = e.target;
	let parent = mytarget.parentNode;
	let parentdiv = parent.parentNode;
	if(mytarget.tagName != "SPAN") return;
	parentdiv.lastElementChild.classList.toggle('anstextshow')
   for (i = 0; i < text.length; i++) {
     if(text[i].classList[1]) {
			quest[i].classList.add('questback')
	   } else {
			quest[i].classList.remove('questback')
		 }
	 }
}