

function showDivs(n) {
  var i;
  var x		= document.getElementsByClassName("slajdy");							/* Liczy ilość obrazków jpg z klasą "slajdy" */
  var y 	= document.getElementsByClassName("description");						/* Liczy ilość obrazków jpg z klasą "description" */
  var dots 	= document.getElementsByClassName("empty");								/* Liczy ilość obrazków jpg z klasą "empty" */
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";  
  }
    for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" Whitebackground", "");
  }
  
  x[slideIndex-1].style.display = "block";  
  y[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " Whitebackground";
}

var slideIndex = 1;																	/* Ustawia zmienną slideIndex na "1" */	
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);														/* funkcja dla guzików w lewo i w prawo */
}

function currentDiv(n) {															/* funkcja dla guzików na dole bannera*/
  showDivs(slideIndex = n);
}
