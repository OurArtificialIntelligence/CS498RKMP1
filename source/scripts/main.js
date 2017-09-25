console.log("yoyo");
var sec1 = document.getElementsByClassName("section1");
var sec2 = document.getElementsByClassName("section2");
var sec3 = document.getElementsByClassName("section3");
var sec4 = document.getElementsByClassName("section4");

//step 3
document.body.onscroll = function(){
	var current_p = document.body.scrollTop;
	console.log(current_p);
	if (scroller_flag) {
		marginy = current_p;
	}
	if(current_p < 10) {
  		document.getElementById("header").style.height = "8%";
  		document.getElementById("header").getElementsByTagName("p").marginTop = "15px";
	}
	else{
		document.getElementById("header").style.height = "5%";
	}

	if(current_p < 500) {
		document.getElementById('navbar-1').classList.remove("navbar-scroll");
		document.getElementById('navbar-2').classList.remove("navbar-scroll");
		document.getElementById('navbar-3').classList.remove("navbar-scroll");
		document.getElementById('navbar-4').classList.remove("navbar-scroll");
	}
	else if(current_p >= 500 && current_p < 950){
		document.getElementById('navbar-1').classList.add("navbar-scroll");
		document.getElementById('navbar-2').classList.remove("navbar-scroll");
		document.getElementById('navbar-3').classList.remove("navbar-scroll");
		document.getElementById('navbar-4').classList.remove("navbar-scroll");
	}
	else if(current_p >= 950 && current_p < 1300) {
		document.getElementById('navbar-2').classList.add("navbar-scroll");
		document.getElementById('navbar-1').classList.remove("navbar-scroll");
		document.getElementById('navbar-3').classList.remove("navbar-scroll");
		document.getElementById('navbar-4').classList.remove("navbar-scroll");
	}	
	else if(current_p >= 1300 && current_p < 1500){
		document.getElementById('navbar-3').classList.add("navbar-scroll");
		document.getElementById('navbar-1').classList.remove("navbar-scroll");
		document.getElementById('navbar-2').classList.remove("navbar-scroll");
		document.getElementById('navbar-4').classList.remove("navbar-scroll");
	}
	else {
		document.getElementById('navbar-4').classList.add("navbar-scroll");
		document.getElementById('navbar-1').classList.remove("navbar-scroll");
		document.getElementById('navbar-2').classList.remove("navbar-scroll");
		document.getElementById('navbar-3').classList.remove("navbar-scroll");
	}
}

// step 4
// The below scroll function is from https://www.youtube.com/watch?v=1GbuBXDmtLo
var marginy = 0;
var destination = 0;
var speed = 3;
var scroller = null;
var scroller_flag = true;

window.initScroll = function(elementId){
	scroller_flag = false;
	destination = document.getElementById(elementId).offsetTop - 200;
	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);
	if(marginy < destination + 5 && marginy > destination - 5){
		clearTimeout(scroller);
		scroller_flag = true;
	}
	if(marginy < destination){
		marginy = marginy + speed;
	}
	if(marginy > destination){
		marginy = marginy - speed;
	}
	window.scroll(0, marginy);
}

document.getElementById('navbar-1').onclick = function(){
	initScroll('section1');
}

document.getElementById('navbar-2').onclick = function(){
	initScroll('section2');
}

document.getElementById('navbar-3').onclick = function(){
	initScroll('section3');
}

document.getElementById('navbar-4').onclick = function(){
	initScroll('section4');
}

document.getElementById('navbar-p1').onclick = function(){
	initScroll('section1');
}

document.getElementById('navbar-p2').onclick = function(){
	initScroll('section2');
}

document.getElementById('navbar-p3').onclick = function(){
	initScroll('section3');
}

document.getElementById('navbar-p4').onclick = function(){
	initScroll('section4');
}

//step 6
//https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;

window.plusDivs = function(n) {
    showDivs(slideIndex += n);
}

window.showDivs = function(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x.length);
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

showDivs(slideIndex);

document.getElementById('slides-bl').onclick = function(){
	plusDivs(-1);
}

document.getElementById('slides-br').onclick = function(){
	plusDivs(1);
}

//step 11
var modal = document.getElementsByClassName("modal");
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

span5.onclick = function() {
    modal5.style.display = "none";
}