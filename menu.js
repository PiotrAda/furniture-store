
// Funkcja uruchamia się wraz z wyświetleniem strony;
$(document).ready(function() {

  // Hover w jQuery nadaje dwa atrybuty - pierwszy to najechanie myszką na obiekt a drugi to zjechanie myszką z obiektu;
    $( '.dropdown' ).hover(

      // Po najechaniu - slideDown - to zmienia display na 'block';
        function(){
            $(this).children('.submenu').finish();
            $(this).children('.submenu').slideDown(150, stop());
        },

      // Po opuszczeniu - slideUp to zmienia display na 'none';
        function(){
            $(this).children('.submenu').finish();
            $(this).children('.submenu').slideUp(150, stop());
        }
    );
    function stop(){
    $('.sub-menu').stop(true, true);
    }
// Kończy '$(document).ready'
});
