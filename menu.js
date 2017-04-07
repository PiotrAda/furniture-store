$(document).ready(function(){
  $('.dropdown').hover(
    // Po najechaniu - slideDown;
    function(){
        $(this).children('.submenu').finish();
        $(this).children('.submenu').slideDown(150);
    },
    // Po opuszczeniu - slideUp;
    function(){
        $(this).children('.submenu').finish();
        $(this).children('.submenu').slideUp(150);
    }
  );
});
