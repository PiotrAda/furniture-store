// zmienna galleryArray zwraca indeksy wszystkich obrazków;
var galleryArray = document.getElementsByClassName("galeria")

// zmienna descriptionArray zwraca indeksy wszystkich opisów;
var descriptionArray = document.getElementsByClassName("gallerydescription")

// zmienna modalCon posłuży do przywrócenia przez funkcję display: block dla naszego modala;
var modalCon = document.getElementById("modalContainer");

// zmienna modalImg posłuży do nadania obrazkowi modala nowego źródła;
var modalImg = document.getElementById("modalImage");

// zmienna modalCaption posłuży do nadania obrazkowi opisu modala nowego źródła;
var modalCaption = document.getElementById("modalcaption");

// zmienne dla guzików posłużą nam do zamykania i przewijania modala;
var modalCloseButton = document.getElementById("modalclosebutton");
var modalLeftButton = document.getElementById("modalleftbutton");
var modalRightButton = document.getElementById("modalrightbutton");

$(".galeria").click(function() {

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

// nadaje krzyżykowi funkcję zamykania modala;
    modalCloseButton.onclick = function() {
      modalCon.style.display = "none";
      $(galleryArray[activeImageIndex]).removeClass('activemodal');
      $(descriptionArray[activeImageIndex]).removeClass('activedescription');
    }

// nadaje guzikowi w lewo funkcjonalność;
    modalLeftButton.onclick = function() {
      modalImg.src = galleryArray[activeImageIndex-1].src;
      $(galleryArray[activeImageIndex-1]).addClass('activemodal');
      $(galleryArray[activeImageIndex]).removeClass('activemodal');
      modalCaption.textContent = descriptionArray[activeImageIndex-1].textContent;
      $(descriptionArray[activeImageIndex-1]).addClass('activedescription');
      $(descriptionArray[activeImageIndex]).removeClass('activedescription');
      activeImageIndex = activeImageIndex - 1;
      $("#modalImage").finish();
      $("#modalImage").css({ opacity: '0', blur: '10px' });
      $("#modalImage").animate({opacity: '1', blur: '0px'}, "slow");

    }

// nadaje guzikowi w prawo funkcjonalność;
    modalRightButton.onclick = function() {
      modalImg.src = galleryArray[activeImageIndex+1].src
      $(galleryArray[activeImageIndex+1]).addClass('activemodal');
      $(galleryArray[activeImageIndex]).removeClass('activemodal');
      modalCaption.textContent = descriptionArray[activeImageIndex+1].textContent
      $(descriptionArray[activeImageIndex+1]).addClass('activedescription');
      $(descriptionArray[activeImageIndex]).removeClass('activedescription');
      activeImageIndex = activeImageIndex + 1;
      $("#modalImage").finish();
      $("#modalImage").css({ opacity: '0', blur: '10px' });
      $("#modalImage").animate({ opacity: '1', blur: '0px'}, "slow");
    }

});
