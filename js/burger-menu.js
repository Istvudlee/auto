// Бургер
let mobbar = document.querySelector('.mob-nav-bar');
let burger = document.querySelector('.button_burger');
let htdy = document.querySelectorAll('html, body');
burger.onclick = function() {
	mobbar.classList.toggle('activmob-nav-bar');
	burger.classList.toggle('closemobburger');
  for(i = 0; i < htdy.length; i++) {
    htdy[i].classList.toggle('stopscroll');
	}
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
// // Табы документы(Дать на проверку)  = переписать под "делегировагие событий"

// let toogledoc = document.querySelector('.toogledoc');
// let toogleTagA = toogledoc.querySelectorAll('a');
// let divdoc = document.querySelectorAll('.contentwr');
// toogledoc.onclick = function(e) {
// 	let target = e.target; 
// 	if(target.classList === 'activetab') return;
// 	for (i=0; i < toogledoc.children.length; i++) {
//     if (toogleTagA[i].classList.contains("activetab")) {
// 			toogleTagA[i].classList.remove("activetab");
// 		}
// 	}
// 	target.classList.add('activetab');
//   for(i = 0; i < divdoc.length; i++ ) {
// 		divdoc[i].classList.remove("show")
// 	 if(target.dataset.number === divdoc[i].dataset.number) {
// 		divdoc[i].classList.add("show");
// 	 }
// 	}
// 	return false;
// }

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
// Comments
	let count = 3;
	if(document.documentElement.clientWidth < 769){
		count = 1;
	}
	let position = 0;
	let wrapper = document.querySelector('.slaidcomments');
	let slide = wrapper.querySelector('.slide');
	let slidelength = wrapper.querySelectorAll('.slide');
	let arrows = document.getElementById('arrow_slide');
	let width = slide.offsetWidth;
	arrows.onclick = function(e) {
		 e.preventDefault();
     let target = e.target;
		 if(target.tagName != 'A') return;
		 if(target.classList == 'leftarr') {
			position += width;
			position = Math.min(position, 0);
			wrapper.style.left = position + 'px';
		 }
		 if(target.classList == 'rightarr') {
			position -= width;
			position = Math.max(position, -width * (slidelength.length - count));
			wrapper.style.left = position + 'px';
		 }
	}
// License
let fourth = document.getElementById('fourth');
let fullfon = document.querySelector('.fullfon');
let contentdiv = fourth.querySelector('.contentdoc');
let img = contentdiv.querySelectorAll('.imgl');
contentdiv.onclick = function(e) {
	let target = e.target;
	if(document.documentElement.clientWidth < 769) return;
	if (target.tagName != "IMG") return;
	target.classList.toggle('bigimg');
	fullfon.classList.toggle('fullopen');
};
//Forma show 
let blockforma = document.querySelector('.blockforma');
let button_form = document.querySelectorAll('#buttonfirst, #buttonfifth, #buttonpenalty, #buttonsecond, #buttonscont');
for (i = 0; i < button_form.length; i++) {
	button_form[i].onclick = function(e) {
		e.preventDefault();
		blockforma.classList.remove('show-form');
		fullfon.classList.add('fullopen');
		blockforma.style.left = document.documentElement.clientWidth/2 - blockforma.offsetWidth/2 +'px'
		blockforma.style.top = document.documentElement.clientHeight/2 - blockforma.offsetHeight/2 +'px'
	}
}
//Black full Screen
fullfon.onclick = function() {
	fullfon.classList.remove('fullopen');
	blockforma.classList.add('show-form');
	for (i = 0; i < img.length; i++) {
   if(img[i].classList.contains("bigimg")){
		img[i].classList.remove("bigimg")
	 }
	}
}
//Mobile menu
mobbar.onclick = function(e) {
		let target = e.target;
		if(target.tagName != "A") return;
		mobbar.classList.toggle('activmob-nav-bar');
		for(i = 0; i < htdy.length; i++) {
			htdy[i].classList.toggle('stopscroll');
		}
}
//