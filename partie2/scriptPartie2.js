/********************************************************   
----- - PRELOAD -   ---- 
******************************************************/

var p = 0;
$.arrPreload = [];
$.arrPreload[p++] = "img/bgPartie2-3.jpg";


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

// function afficherMasquer() {  
//     if (document.getElementById("pRepli").innerHTML == "Replier le menu")
//     {
//     	// alert("ok");
//         document.getElementById("pRepli").innerHTML ="Montrer le menu";  
//     }
//     else
//     {
//         document.getElementById("pRepli").innerHTML ="Replier le menu";  
//     }
// };