// zmienna galleryArray zwraca indeksy wszystkich obrazków;
var galleryArray = document.getElementsByClassName("galeria")

// zmienna descriptionArray zwraca indeksy wszystkich opisów;
var descriptionArray = document.getElementsByClassName("gallerydescription")

// zmienna modalCon posłuży do przywrócenia przez funkcję display: block dla naszego modala;
var modalCon = document.getElementById("modal-main");

// zmienna modalImg posłuży do nadania obrazkowi modala nowego źródła;
var modalImg = document.getElementById("modal-image");

// zmienna modalCaption posłuży do nadania obrazkowi opisu modala nowego źródła;
var modalCaption = document.getElementById("modal-caption");

// zmienne dla guzików posłużą nam do zamykania i przewijania modala;
var modalCloseButton = document.getElementById("modal-close-button");
var modalLeftButton = document.getElementById("modal-left-button");
var modalRightButton = document.getElementById("modal-right-button");


$(".galeria").click(function(left) {

// nadaje wciśniętemu obrazkowi klasę activemodal
    $(this).addClass('activemodal');

// tworzy zmienną activeImageIndex, która zawiera indeks wciśniętego obrazka
    for (i = 0; i < galleryArray.length; i++) {
      if (galleryArray[i].classList.contains("activemodal")){
        var activeImageIndex = i;
      }
    }

    $(descriptionArray[activeImageIndex]).addClass('activedescription');

// nadaje naszemu bodalowi display: block;
    modalCon.style.display = "block";

// zmienia adres obrazka z modala na adres wciśniętego zdjęcia;
    modalImg.src = galleryArray[activeImageIndex].src;
    modalCaption.textContent = descriptionArray[activeImageIndex].textContent;

// nadaje opisowi taką szerokość jak ma obrazek;

    $(modalCaption).width($(modalImg).width());

// definiuje funkcję zamknięcia modala;

    function pressClose() {
      modalCon.style.display = "none";
      $(galleryArray[activeImageIndex]).removeClass('activemodal');
      $(descriptionArray[activeImageIndex]).removeClass('activedescription');
    }

// definiuje funkcję guzika w lewo;

    function pressLeft() {
      modalImg.src = galleryArray[activeImageIndex-1].src;
      $(galleryArray[activeImageIndex-1]).addClass('activemodal');
      $(galleryArray[activeImageIndex]).removeClass('activemodal');
      modalCaption.textContent = descriptionArray[activeImageIndex-1].textContent;
      $(descriptionArray[activeImageIndex-1]).addClass('activedescription');
      $(descriptionArray[activeImageIndex]).removeClass('activedescription');
      activeImageIndex = activeImageIndex - 1;
      $("#modal-image").finish();
      $("#modal-image").css({ opacity: '0', blur: '10px' });
      $("#modal-image").animate({opacity: '1', blur: '0px'}, "slow");
      $(modalCaption).width($(modalImg).width());
    }

// definiuje funkcję guzika w prawo;

    function pressRight() {
      modalImg.src = galleryArray[activeImageIndex+1].src
      $(galleryArray[activeImageIndex+1]).addClass('activemodal');
      $(galleryArray[activeImageIndex]).removeClass('activemodal');
      modalCaption.textContent = descriptionArray[activeImageIndex+1].textContent
      $(descriptionArray[activeImageIndex+1]).addClass('activedescription');
      $(descriptionArray[activeImageIndex]).removeClass('activedescription');
      activeImageIndex = activeImageIndex + 1;
      $("#modal-image").finish();
      $("#modal-image").css({ opacity: '0', blur: '10px' });
      $("#modal-image").animate({ opacity: '1', blur: '0px'}, "slow");
      $(modalCaption).width($(modalImg).width());
    }

// definiuje akcje on-click przycisków lewo/prawo/naciśnięcia na szare tło;

    modalCon.onclick = function(e) {
      if($(e.target).is('.modal-content, #modal-left-button, #modal-right-button')){
      e.preventDefault();
      return;
      }
      pressClose();
    }
    modalLeftButton.onclick = function(){
      pressLeft();
    }
    modalRightButton.onclick = function(){
      pressRight();
    }
// definiuje akcje on-click klawiaturą - left, right, escape;

    $(document).keydown(function(f) {
            if (f.keyCode == 37) { // left
    pressLeft();
            }
            else if (f.keyCode == 39) { // right
    pressRight();
            }
            else if (f.keyCode == 27) { // escape
    pressClose();
          };
    });
});
