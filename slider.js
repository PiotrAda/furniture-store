var i;
var j;
var picturesArray = document.getElementsByClassName("pictures");
var picturesArrayLastIndex = picturesArray.length-1;
var dots = document.getElementsByClassName("empty");

function slideButton(n){

// ustawia zmienną activeSlide na index aktywnego Slajdu
  for (i = 0; i < picturesArray.length; i++) {
    if (picturesArray[i].classList.contains("active")){
      var activeSlide = i;
    }
  }

// zamienia tło wszystkich guzików na spodzie slidera na białe
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" Whitebackground", "");
  }

// funkcja guzika w lewo - dwa warianty
  for (j = 0; j < picturesArray.length; j++) {
    if (activeSlide === j && activeSlide > 0 && n === -1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[j+n].className = picturesArray[j+n].className.replace("hidden", "active");
      picturesArray[j+n].id = 'left'
      dots[j+n].className += " Whitebackground";
    }

    else if (activeSlide === j && activeSlide === 0 && n === -1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[picturesArrayLastIndex].className = picturesArray[picturesArrayLastIndex].className.replace("hidden", "active");
      picturesArray[picturesArrayLastIndex].id = 'left'
      dots[picturesArrayLastIndex].className += " Whitebackground";
    }

// funkcja guzika w prawo - dwa warianty
    else if (activeSlide === j && activeSlide < picturesArrayLastIndex && n === 1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[j+n].className = picturesArray[j+n].className.replace("hidden", "active");
      picturesArray[j+n].id = 'right'
      dots[j+n].className += " Whitebackground";
    }

    else if (activeSlide === j && activeSlide === picturesArrayLastIndex && n === 1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[0].className = picturesArray[0].className.replace("hidden", "active");
      picturesArray[0].id = 'right'
      dots[0].className += " Whitebackground";
    }
  }
}

// nadaje animacje dla guzików w lewo i w prawo
$(".buttons").click(function(){
    var div = $("div");
    div.finish();
    $(".buttons").animate({opacity: '0.5'}, "slow");
    $(".buttons").animate({opacity: '1'}, "slow");
});

// ustawia slajd po wyświetleniu strony na '1' - pozwala na nadanie guzikowi białego tła
var slideIndex = 1;

function currentDiv(n) {
  showDivs(slideIndex = n);
}

// funkcja dla guzików na spodzie slidera, kompatybilna z guzikami na boki slidera
function showDivs(n) {

// ten element funkcji chowa wszystkie slajdy i usuwa tło z guzików
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" Whitebackground", "");
  }
  for (i = 0; i < picturesArray.length; i++) {
  picturesArray[i].className = picturesArray[i].className.replace("active", "hidden");
  picturesArray[i].id = ''
  }

// ten element funkcji odsłania właściwy slajd i nadaje białe tło dla odpowiedniego guzika
  picturesArray[slideIndex-1].id = 'start'
  picturesArray[slideIndex-1].className = picturesArray[slideIndex-1].className.replace("hidden", "active");
	dots[slideIndex-1].className += " Whitebackground";

}
