$(document).ready(function() {

  var promotionImage = $('.promotionimage');
  var promotionBox = $('.promotionbox');
  var promotionDesc = $('.promotiondescription');
  var i;

  for ( i = 0 ; i < promotionImage.length ; i++){
    $(promotionBox[i]).css({ height: promotionImage[i].height });
    $(promotionDesc[i]).css({ height: promotionImage[i].height });
  }
});
