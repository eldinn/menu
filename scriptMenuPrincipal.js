/********************************************************   
----- - PRELOAD -   ---- 
******************************************************/

// var gif = document.getElementById('oLoading');
// var images = new Array()
//       function preload() {
//         for (i = 0; i < preload.arguments.length; i++) {
//           images[i] = new Image()
//           images[i].src = preload.arguments[i]
//           gif.style.
//         }
//       }
//       preload(
//            "img/BGouh.jpg",
//            "img/BGouhDK.jpg", 
//            "img/UIg.png",
//            "img/onglet1.png",  
//            "img/onglet2.png",
//            "img/onglet3.png",
//            "img/onglet4.png",
//            "img/globeMenu2.png", 
//            "img/globeMenu1.png",
//            "img/annexes.png",
//            "img/faillesAnim.gif",
//            "img/failles.png",
//            "img/forteresseAnim.gif",  
//            "img/forteresse1.png",
//            "img/cristaux2.png",
//            "img/cristaux1.png",
//            "img/portailAnim.gif", 
//            "img/portail2.png",
//            "img/alguesAnim2.gif", 
//            "img/algues.png",
//            "img/UId2.png",
//            "img/btnVue1lux.png", 
//            "img/btnVue1.png",
//            "img/btnVue2lux.png",  
//            "img/btnVue2.png"
//       )


var p = 0;
$.arrPreload = [];
$.arrPreload[p++] = "img/BGouh.jpg";
$.arrPreload[p++] = "img/BGouhDK.jpg";
$.arrPreload[p++] = "img/UIg.png";
$.arrPreload[p++] = "img/onglet1.png";  
$.arrPreload[p++] = "img/onglet2.png";
$.arrPreload[p++] = "img/onglet3.png";
$.arrPreload[p++] = "img/onglet4.png";
$.arrPreload[p++] = "img/globeMenu2.png"; 
$.arrPreload[p++] = "img/globeMenu1.png";
$.arrPreload[p++] = "img/annexes.png";
$.arrPreload[p++] = "img/faillesAnim.gif";
$.arrPreload[p++] = "img/failles.png";
$.arrPreload[p++] = "img/forteresseAnim.gif";  
$.arrPreload[p++] = "img/forteresse1.png";
$.arrPreload[p++] = "img/cristaux2.png";
$.arrPreload[p++] = "img/cristaux1.png";
$.arrPreload[p++] = "img/portailAnim.gif"; 
$.arrPreload[p++] = "img/portail2.png";
$.arrPreload[p++] = "img/alguesAnim2.gif"; 
$.arrPreload[p++] = "img/algues.png";
$.arrPreload[p++] = "img/UId2.png";
$.arrPreload[p++] = "img/btnVue1lux.png"; 
$.arrPreload[p++] = "img/btnVue1.png";
$.arrPreload[p++] = "img/btnVue2lux.png";  
$.arrPreload[p++] = "img/btnVue2.png"

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

  // Works.init();

}



/********************************************************		
-----	-	MENU DEROULANT -   ---- 
******************************************************/

function onClickMenu(){
	// console.log('onClic de l image');
  var onglet1 = document.getElementById('imgMenu1');
  var onglet2 = document.getElementById('imgMenu2');
  var onglet3 = document.getElementById('imgMenu3');
  var onglet4 = document.getElementById('imgMenu4');
  
  //Affichage des onglets : si la class de l'id "js-contact-form" est "hide", alors
  if(onglet1.classList == 'animation-target1'){
    //Execution de la fonction "showHTML" sur l'id "js-contact-form"
    resetAnimationMenu1('#imgMenu1');
    resetAnimationMenu2('#imgMenu2');
    resetAnimationMenu3('#imgMenu3');
    resetAnimationMenu4('#imgMenu4');

  }
  //Sinon
  else{ 
    //Execution de la fonction "hideHTML" sur l'id "js-contact-form"
    AnimationMenu1('#imgMenu1');
    AnimationMenu2('#imgMenu2');
    AnimationMenu3('#imgMenu3');
    AnimationMenu4('#imgMenu4');
    //Remodification du bouton
    // this.innerHTML = "Ajouter un contact";
  }

};


function onClickVue1(){
  var vue1 = document.getElementById('blocMenu');
  // var elements = document.getElementById('blocElements');


  vue1.style.backgroundImage = "url(img/BGouh.jpg)";
  showHTML('#blocElements');
};

function onClickVue2(){
  var vue1 = document.getElementById('blocMenu');
  // var elements = document.getElementById('blocElements');


  vue1.style.backgroundImage = "url(img/BGouhDK2.jpg)";
  hideHTML('#blocElements');
};


