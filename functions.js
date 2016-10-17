/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/
function installEventHandler(selector, event, eventHandler){
	//Recuepratipon du 1er objet DOM correspondant au selecteur
	var domObject = document.querySelector(selector);

	//Installation d'un gestionnaire d'éléments sur cette DOM
	domObject.addEventListener(event, eventHandler); 
}


//Fonction evenement spécifique aux liens, pour prendre en compte TOUS ces liens (sinon avec la fonction du haut, seul le 1er et affecté)
function installEventHandlers(selector, event, eventHandler){
	//Recuepratipon du 1er objet DOM correspondant au selecteur
	var domObject = document.querySelectorAll(selector);

	//Installation d'un gestionnaire de multi-éléments sur cette DOM
	for(index = 0; index < domObject.length; index++){
		domObject[index].addEventListener(event, eventHandler); 
	}
}
 
/*******************************************************************************************/
/*******************************************************************************************/




function showHTML(selector){
	//Supression de la class CSS "hide" de l'objet DOM trouvé avec le selecteur entré en paramètre
	document.querySelector(selector).classList.remove('hide');
}

function hideHTML(selector){
	//Ajout de la class CSS "hide" de l'objet DOM trouvé avec le selecteur entré en paramètre
	document.querySelector(selector).classList.add('hide');
}




function resetAnimationMenu1(selector){
	document.querySelector(selector).classList.remove('animation-target1');
}
function resetAnimationMenu2(selector){
	document.querySelector(selector).classList.remove('animation-target2');
}
function resetAnimationMenu3(selector){
	document.querySelector(selector).classList.remove('animation-target3');
}
function resetAnimationMenu4(selector){
	document.querySelector(selector).classList.remove('animation-target4');
}



function AnimationMenu1(selector){
	document.querySelector(selector).classList.add('animation-target1');
}
function AnimationMenu2(selector){
	document.querySelector(selector).classList.add('animation-target2');
}
function AnimationMenu3(selector){
	document.querySelector(selector).classList.add('animation-target3');
}
function AnimationMenu4(selector){
	document.querySelector(selector).classList.add('animation-target4');
}


// document.addEventListener('DOMContentLoaded', function(){
	
// 	installEventHandler("#bouton", 'click', onClickMenu);
	// installEventHandler("#js-save-contact", 'click', onClickSaveContact);
	// installEventHandler("#js-clear-address-book", 'click', onClickClearAddressBook);
	
	// refreshAddressBook();



// });



// function modifCSS(selector){
// 	document.querySelector(selector).
// }