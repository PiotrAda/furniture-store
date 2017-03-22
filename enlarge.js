function enlarge(imgName){

// Get the modal


var modal = document.getElementById('myModal');

modal.style.display = "block";

modalImg = document.getElementById("img01");
modalImg.src = imgName;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
}


var slideIndex = 1;	

showModal(slideIndex);

function plusmodal(n) {
  showModal(slideIndex += n);													
}

function showModal(n) {
  var i;
  var x		= document.getElementsByClassName("galeria");							

  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  
  

//   $("#img01").animate({
 //       opacity: '0',
   // });
	
    for (i = 0; i < x.length; i++) {
	 modalImg.src = x[slideIndex-1].src
  }
   

  
// $("#img01").animate({
  //      opacity: '1',
    //});
  
}