/********************************************************   
----- - PRELOAD -   ---- 
******************************************************/

var p = 0;
$.arrPreload = [];
$.arrPreload[p++] = "img/bgPartie1-2.jpg";


$(document.createElement('img')).bind('load', function () {
  if ($.arrPreload.length > 0)
    this.src = $.arrPreload.shift()
  else
    preloadDone();
}).trigger('load');

function preloadDone(){
  setTimeout(function () {
    $("#oLoading").html("").fadeOut();
  }, 300);

};



$(document).ready(function() {


/********************************************************   
----- - MENU PLIE/DEPLIE -   ---- 
******************************************************/
 $(function(){
        $('.btnRepli').on('click touch', function(e){
            $('.menuChapitres').slideToggle();
            // $('.btnRepli p').replaceWith('<p>Montrer le menu</p>');
            e.preventDefault();

            if ($('.btnRepli p').html() == 'Replier le menu'){
       			 $('.btnRepli p').replaceWith('<p>Montrer le menu</p>');
    		}
    		else{
    			$('.btnRepli p').replaceWith('<p>Replier le menu</p>');
    		}

          });

        });

});
