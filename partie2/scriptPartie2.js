/********************************************************   
----- - PRELOAD -   ---- 
******************************************************/

var p = 0;
$.arrPreload = [];
$.arrPreload[p++] = "img/bgMenuPartie2.jpg";


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
