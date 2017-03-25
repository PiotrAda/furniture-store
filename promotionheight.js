var promotionImage = document.getElementsByClassName('promotionimage');
var promotionBox = document.getElementsByClassName('promotionbox');
var promotionDesc = document.getElementsByClassName('promotiondescription');
var i;

console.log(promotionImage);
console.log(promotionBox);

$(document).ready(function() {

for ( i = 0 ; i < promotionImage.length ; i++){
$(promotionBox[i]).css({ height: promotionImage[i].height });
$(promotionDesc[i]).css({ height: promotionImage[i].height });

}});
