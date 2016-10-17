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

