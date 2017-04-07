$(document).ready(function(){
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
  // zmienne dla guzików posłużą nam do przewijania modala;
  var modalLeftButton = document.getElementById("modal-left-button");
  var modalRightButton = document.getElementById("modal-right-button");
  var activeImageIndex;

  // definiuje wyświetlenie modala;
  $(".galeria").click(function(left) {
    $(this).addClass('activemodal');
    for (i = 0; i < galleryArray.length; i++) {
      if (galleryArray[i].classList.contains("activemodal")){
        activeImageIndex = i;
      }
    }
    $(descriptionArray[activeImageIndex]).addClass('activedescription');
  // nadaje naszemu modalowi display: block;
    modalCon.style.display = "block";
  // zmienia adres obrazka z modala na adres wciśniętego zdjęcia oraz adres opisu;
    modalImg.src = galleryArray[activeImageIndex].src;
    modalCaption.textContent = descriptionArray[activeImageIndex].textContent;
  // nadaje opisowi taką szerokość jak ma obrazek;
    $(modalCaption).width($(modalImg).width());
  });

  // definiuje funkcję guzików na boki;
  function pressButton(n) {
    modalImg.src = galleryArray[activeImageIndex+n].src;
    $(galleryArray[activeImageIndex+n]).addClass('activemodal');
    $(galleryArray[activeImageIndex]).removeClass('activemodal');
    modalCaption.textContent = descriptionArray[activeImageIndex+n].textContent;
    $(descriptionArray[activeImageIndex+n]).addClass('activedescription');
    $(descriptionArray[activeImageIndex]).removeClass('activedescription');
    activeImageIndex = activeImageIndex+n;
    $("#modal-image").finish();
    $("#modal-image").css({ opacity: '0', blur: '10px' });
    $("#modal-image").animate({opacity: '1', blur: '0px'}, "slow");
    $(modalCaption).width($(modalImg).width());
  }

  // definiuje funkcję zamknięcia modala;
  function closeModal() {
    modalCon.style.display = "none";
    $(galleryArray[activeImageIndex]).removeClass('activemodal');
    $(descriptionArray[activeImageIndex]).removeClass('activedescription');
  }

  // definiuje akcje on-click klawiaturą - left, right, escape;
    $(document).keydown(function(f) {
      if (f.keyCode === 37) { // left
        pressButton(-1);
      }
      else if (f.keyCode === 39) { // right
        pressButton(1);
      }
      else if (f.keyCode === 27) { // escape
        closeModal();
      };
    });

    // definiuje akcje on-click przycisków lewo/prawo/naciśnięcia na szare tło;
    modalCon.onclick = function(e) {
      if($(e.target).is('.modal-content, #modal-left-button, #modal-right-button')){
        e.preventDefault();
        return;
      }
      closeModal();
    }
    modalLeftButton.onclick = function(){
      pressButton(-1);
    }
    modalRightButton.onclick = function(){
      pressButton(1);
    }

});
