/********************************************************   
----- - PRELOAD -   ---- 
******************************************************/

// var p = 0;
// $.arrPreload = [];
// $.arrPreload[p++] = "img/BGouh.jpg";
// $.arrPreload[p++] = "img/BGouhDK.jpg";
// $.arrPreload[p++] = "img/UIg.png";
// $.arrPreload[p++] = "img/onglet1.png";  
// $.arrPreload[p++] = "img/onglet2.png";
// $.arrPreload[p++] = "img/onglet3.png";
// $.arrPreload[p++] = "img/onglet4.png";
// $.arrPreload[p++] = "img/globeMenu2.png"; 
// $.arrPreload[p++] = "img/globeMenu1.png";
// $.arrPreload[p++] = "img/annexes.png";
// $.arrPreload[p++] = "img/faillesAnim.gif";
// $.arrPreload[p++] = "img/failles.png";
// $.arrPreload[p++] = "img/forteresseAnim.gif";  
// $.arrPreload[p++] = "img/forteresse1.png";
// $.arrPreload[p++] = "img/cristaux2.png";
// $.arrPreload[p++] = "img/cristaux1.png";
// $.arrPreload[p++] = "img/portailAnim.gif"; 
// $.arrPreload[p++] = "img/portail2.png";
// $.arrPreload[p++] = "img/alguesAnim2.gif"; 
// $.arrPreload[p++] = "img/algues.png";
// $.arrPreload[p++] = "img/UId2.png";
// $.arrPreload[p++] = "img/btnVue1lux.png"; 
// $.arrPreload[p++] = "img/btnVue1.png";
// $.arrPreload[p++] = "img/btnVue2lux.png";  
// $.arrPreload[p++] = "img/btnVue2.png"

// $(document.createElement('img')).bind('load', function () {
//   if ($.arrPreload.length > 0)
//     this.src = $.arrPreload.shift()
//   else
//     preloadDone();
// }).trigger('load');

// function preloadDone(){
//   setTimeout(function () {
//     $("#oLoading").html("").fadeOut();
//   }, 300);

// };



/********************************************************   
----- - SCROLL -   ---- 
******************************************************/
	// init controller
	var controller = new ScrollMagic.Controller();


	var scene1 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "green", scale: 2.5}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "1 (duration : 0.5)"})
		.addTo(controller);


	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText2"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "#fff", scale: 1}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "2 (duration : 0.5)"})
		.addTo(controller);


var tween = new TimelineMax ()
					.add([
						TweenMax.to(".test", 1, {left: 50, ease: Circ.easeIn}),
						TweenMax.to(".test", 1, {top: -60, ease: Circ.easeOut})
					])
					.add([
						TweenMax.to(".test", 1, {top: 0, ease: Circ.easeIn}),
						TweenMax.to(".test", 1, {left: 70, ease: Circ.easeOut})
					]);

				// build scene
				var scene3 = new ScrollMagic.Scene({triggerElement: "#repereTest", duration: 300})
								.setTween(tween)
								.addIndicators({name: "3 (duration : 4)"}) // add indicators (requires plugin)
								.addTo(controller);