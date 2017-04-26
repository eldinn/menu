/********************************************************    
----- - PRELOAD -   ---- 
******************************************************/

jQuery(document).ready(function($)
{

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
----- - SMOOTH SCROLL -   ---- 
******************************************************/

var smoothScroll = {
    speed: 0,
    delay: 10, // en ms
    timer: null,
    scrollSpeed: 4,
    inertia: 0.95,
    init: function(){
        this.setEventsListeners();
    },
    setEventsListeners: function(){
        var me = this;
        $(document).bind('DOMMouseScroll mousewheel', function(e){
            me.setSpeed(e.originalEvent);
        });
	 },
    setSpeed: function(e){
        var direction = e.detail ? -e.detail : e.wheelDelta;
    	this.speed += direction < 0 ? -this.scrollSpeed : this.scrollSpeed;
    	if(this.timer == null){
    		this.timer = setTimeout(this.smoothScroll, this.delay, this); 
    	}
    	e.preventDefault();
    },
    smoothScroll: function(scope){
		var self = scope;
    	self.speed *= self.inertia;

        var currScrollTop = $(window).scrollTop();
        $(window).scrollTop(currScrollTop-self.speed);

    	if(self.speed < self.inertia && self.speed > -self.inertia){
    		self.speed = 0;
    		clearTimeout(self.timer);
    		self.timer = null;
    	}else{
    		self.timer = setTimeout(self.smoothScroll, self.delay, self);
    	}
    }
}

smoothScroll.init();

/********************************************************   
----- - DEFILEMENT FLECHES -   ---- 
******************************************************/

        //Défilement du texte a droite avec les flèches haut et bas
        $(function() {
            var ele   = $('#texteHistoire');
            var speed = 25, scroll = 5, scrolling;

            $('#flecheHaut').mouseenter(function() {
                // Scroll the element up
                scrolling = window.setInterval(function() {
                    ele.scrollTop( ele.scrollTop() - scroll );
                }, speed);
            });

            $('#flecheBas').mouseenter(function() {
                // Scroll the element down
                scrolling = window.setInterval(function() {
                    ele.scrollTop( ele.scrollTop() + scroll );
                }, speed);
            });

            $('#flecheHaut, #flechebas').bind({
                click: function(e) {
                    // Prevent the default click action
                    e.preventDefault();
                },
                mouseleave: function() {
                    if (scrolling) {
                        window.clearInterval(scrolling);
                        scrolling = false;
                    }
                }
            });
        });


});





/********************************************************   
----- - EVENT -   ---- 
******************************************************/
	// init controller
	var controller = new ScrollMagic.Controller();


/*FIXED INTRO*/
	$(function () { 
		var sceneFiceIntro = new ScrollMagic.Scene({triggerElement: "", duration: 400})
			.setPin("#BGplan1", "#BGplan2", "#BGplan3")
			.addIndicators({name: "FIXE"})
			.addTo (controller);
		});


/*SCROLL BG (en 3 plans)*/
	$(function () {

		var tweenScrollBG = new TimelineMax ()
			.add([
				TweenMax.to("#BGplan1", 1, {backgroundPosition: "50% 40%", ease: Linear.easeNone}),
				TweenMax.to("#BGplan2", 1, {backgroundPosition: "50% 90%", ease: Linear.easeNone}),
				TweenMax.to("#BGplan3", 1, {backgroundPosition: "50% 100%", ease: Linear.easeNone})
			]);


		var sceneScrollBG = new ScrollMagic.Scene({triggerElement: "#reperePlanete", duration: 1000})
					.setTween(tweenScrollBG)
					.addIndicators({name: "parallaxePlans"}) // add indicators (requires plugin)
					.addTo(controller);

	});



/*PARTICULES*/
	$(function () {

		var tweenScrollParticules = new TimelineMax ()
			.add([
				TweenMax.to("#particulesDebut", 1, {marginTop: "-20%", ease: Linear.easeNone})
			]);


		var sceneScrollBG = new ScrollMagic.Scene({triggerElement: "", duration: 1000})
					.setTween(tweenScrollParticules)
					.addIndicators({name: "parallaxeParticules"}) // add indicators (requires plugin)
					.addTo(controller);

	});


/*EVENT TITRE + TEXTE INTRO*/
	$(function () { 
		var tweenEventIntro = new TimelineMax ()
			.add([
				TweenMax.to("h1", 1, {marginTop: "-700px", ease: Linear.easeNone}),
				TweenMax.to("h2", 1, {marginLeft: "1500px", ease: Linear.easeNone}),
				TweenMax.to(".containerTexteIntro", 1, {marginLeft: "-500px", ease: Linear.easeNone})
			]);

		// build scene
		var sceneIntro = new ScrollMagic.Scene({triggerElement: '', duration: 200})
						.setTween(tweenEventIntro)
						.addIndicators({name: "titre+intro se barrent"})
						.addTo(controller);
	});




	// $(function () { 
	// 	var tweenA2 = new TimelineMax ()
	// 		.add([

	// 		]);

	// 	// build scene
	// 	var sceneA2 = new ScrollMagic.Scene({triggerElement: '.A2', duration: 600})
	// 					.setTween(tweenA2)
	// 					.addIndicators({name: "bounceIn"})
	// 					.addTo(controller);
	// });		



	// $(function () { 
	// 	var tweenA3 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to(".husphel", 1, {animation: "bounceIn 1000ms linear both", opacity: 1}, {duration: 0}),
	// 			TweenMax.to(".vortasgoth", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.2}, {duration: 0}),
	// 			TweenMax.to(".suah", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
	// 			TweenMax.to(".soth", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
	// 			TweenMax.to(".sifh", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0})
	// 		]);

	// 	// build scene
	// 	var sceneA3 = new ScrollMagic.Scene({triggerElement: '.A3'})
	// 					.setTween(tweenA3)
	// 					.addIndicators({name: "bounceIn"})
	// 					.addTo(controller);
	// });




	// $(function () { 
	// 	var tweenA4 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to(".omian", 1, {animation: "bounceIn 1000ms linear both", opacity: 1}, {duration: 0}),
	// 			TweenMax.to(".doplis", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
	// 			TweenMax.to(".atus", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
	// 			TweenMax.to(".jufus", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
	// 			TweenMax.to(".eolia", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.2}, {duration: 0}),
	// 			TweenMax.to(".tintyph", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.4}, {duration: 0}),
	// 			TweenMax.to(".hriude", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
	// 			TweenMax.to(".nox", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
	// 			TweenMax.to(".paaju", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0})
	// 		]);

	// 	// build scene
	// 	var sceneA4 = new ScrollMagic.Scene({triggerElement: '.A4'})
	// 					.setTween(tweenA4)
	// 					.addIndicators({name: "bounceIn"})
	// 					.addTo(controller);
	// });









/*ELDINN REDUIT + SE PLACE DANS LE SYSTEME*/
	// $(function () { // wait for document ready
	// 	// build tween
	// 	var tween5 = TweenLite.to("#eldinnPlanete", 1, {width: "50px", marginTop: "775px", marginLeft: "250px", ease: Linear.easeNone});

	// 	// build scene
	// 	var scene6 = new ScrollMagic.Scene({triggerElement: '#reperePlanete', duration: 500})
	// 					.setTween(tween5)

	// 					.addIndicators({name: "move eldinn"}) // add indicators (requires plugin)
	// 					.addTo(controller);
	// });	

	// $(function () { 
	// 	var scene11 = new ScrollMagic.Scene({triggerElement: "#repereFixeSysteme"})
	// 		.setClassToggle("#eldinnPlanete", "hide")
	// 		.addIndicators({name: "HIDE"})
	// 		.addTo (controller);
	// 	});

	// $(function () { 
	// 	var tween8 = TweenLite.to(".eldinn", 0, {display: "block", ease: Linear.easeNone});

	// 	var scene12 = new ScrollMagic.Scene({triggerElement: "#repereFixeSysteme"})
	// 		.setTween(tween8)
	// 		.addIndicators({name: "SHOW"})
	// 		.addTo (controller);
	// 	});




/*BG 3 PLANS FADE OUT*/
	// $(function () { 
	// 	var fadeOutBG = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 0})
	// 		.setClassToggle("#BGplan1", "hide")
	// 		.addIndicators({name: "HIDE PLAN 1"})
	// 		.addTo (controller);
	// 	});






/*FIXED HYPERSPACE*/
	$(function () { 
		var fixedSys = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 2500})
			.setPin(".containHyperspace")
			.addIndicators({name: "FIXE SYSTEME"})
			.addTo (controller);
	});


/*TEST 2*/
		$(function () {

		var tweensceneScrollHyperspace = new TimelineMax ()
			.add([
				TweenMax.to(".wrap", 1, {transform: "translateZ(500px) rotate(0deg)", ease: Linear.easeNone}),
				TweenMax.to(".wrap:nth-child(2)", 1, {transform: "translateZ(500px) rotate(0deg)", ease: Linear.easeNone}),
				TweenMax.to(".wall", 1, {display:"block", opacity: 1, ease: Linear.easeNone})
			]);


		var sceneScrollHyperspace = new ScrollMagic.Scene({triggerElement: "#repereFixeSysteme", duration: 2000})
					.setTween(tweensceneScrollHyperspace)
					.addIndicators({name: "HYPERSPACE"}) // add indicators (requires plugin)
					.addTo(controller);

	});


/*FIXED SYSTEME*/
	$(function () { 
		var fixedSys = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 2000})
			.setPin(".blocPlaneteS3")
			.addIndicators({name: "FIXE SYSTEME"})
			.addTo (controller);
	});

/*APPARITION PLANETES*/
	$(function () { 
		var tweenA1 = new TimelineMax ()
			.add([
				TweenMax.to(".hriude", 1, {width: "130px", marginTop: "400px", marginLeft: "-1400px", ease: Linear.easeNone, delay: 0}),
				TweenMax.to(".tintyph", 1, {width: "240px", marginTop: "200px", marginLeft: "-1500px", ease: Linear.easeNone, delay: 0.1}),
				TweenMax.to(".nox", 1, {width: "190px", marginTop: "-100px", marginLeft: "-1700px", ease: Linear.easeNone, delay: 0.2}),
				TweenMax.to(".ebes", 1, {width: "1000px", marginTop: "-400px", marginLeft: "-1900px", ease: Linear.easeNone, delay: 0.3}),
				
				TweenMax.to(".paaju", 1, {width: "130px", marginTop: "500px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.2}),
				TweenMax.to(".husphel", 1, {width: "350px", marginTop: "400px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.3}),
				TweenMax.to(".vortasgoth", 1, {width: "500px", marginTop: "300px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.4}),

				TweenMax.to(".eolia", 1, {width: "175px", marginTop: "570px", marginLeft: "-450px", ease: Linear.easeNone, delay: 0.4}),
				TweenMax.to(".jufus", 1, {width: "240px", marginTop: "530px", marginLeft: "-400px", ease: Linear.easeNone, delay: 0.5}),
				TweenMax.to(".atus", 1, {width: "100px", marginTop: "570px", marginLeft: "-600px", ease: Linear.easeNone, delay: 0.6}),
				TweenMax.to(".doplis", 1, {width: "190px", marginTop: "600px", marginLeft: "-700px", ease: Linear.easeNone, delay: 0.7}),
				TweenMax.to(".omian", 1, {width: "350px", marginTop: "530px", marginLeft: "-500px", ease: Linear.easeNone, delay: 0.8}),
				
				TweenMax.to(".medio", 1, {width: "400px", marginTop: "-100px", marginLeft: "-300px", ease: Linear.easeNone, delay: 1}),

				TweenMax.to(".sifh", 1, {width: "120px", marginTop: "200px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.4}),
				TweenMax.to(".soth", 1, {width: "130px", marginTop: "200px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.5}),
				TweenMax.to(".suah", 1, {width: "140px", marginTop: "100px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.6}),
				TweenMax.to(".tam", 1, {width: "50px", marginTop: "200px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.7}),
				TweenMax.to(".aroll", 1, {width: "150px", marginTop: "100px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.8}),
				TweenMax.to(".keks", 1, {width: "100px", marginTop: "100px", marginLeft: "2000px", ease: Linear.easeNone, delay: 0.9}),
				TweenMax.to(".roack", 1, {width: "50px", marginTop: "200px", marginLeft: "1000px", ease: Linear.easeNone, delay: 1}),
				TweenMax.to(".uzukzh", 1, {width: "300px", marginTop: "170px", marginLeft: "1500px", ease: Linear.easeNone, delay: 1.1}),
				TweenMax.to(".mudlafrig", 1, {width: "200px", marginTop: "110px", marginLeft: "1600px", ease: Linear.easeNone, delay: 1.2}),

				TweenMax.to(".eldinn", 1, {width: "190px", marginTop: "-700px", marginLeft: "250px", ease: Linear.easeNone, delay: 0.9}),

				TweenMax.to(".gooss", 1, {width: "350px", marginTop: "-300px", marginLeft: "-600px", ease: Linear.easeNone, delay: 1.5}),
				TweenMax.to(".naoisis", 1, {width: "250px", marginTop: "-600px", marginLeft: "600px", ease: Linear.easeNone, delay: 1.6}),
				TweenMax.to(".dyamtirie", 1, {width: "100px", marginTop: "700px", marginLeft: "250px", ease: Linear.easeNone, delay: 1.7}),
				TweenMax.to(".nune", 1, {width: "150px", marginTop: "500px", marginLeft: "-250px", ease: Linear.easeNone, delay: 1.8}),
				TweenMax.to(".heeytee", 1, {width: "150px", marginTop: "500px", marginLeft: "500px", ease: Linear.easeNone, delay: 1.9})
			]);

		// build scene
		var sceneA1 = new ScrollMagic.Scene({triggerElement: '.A1', duration: 2000})
						.setTween(tweenA1)
						.addIndicators({name: "bounceIn"})
						.addTo(controller);
	});


/*SYSTEME*/
	// $(function () { 
	// 	var tweenBlocs = TweenLite.to(".blocPlanete5", 1, {width: "500px", marginTop: "-100px", marginLeft: "-250px", ease: Linear.easeNone});

	// 	var sceneBlocs = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 500})
	// 					.setTween(tweenBlocs)

	// 					.addIndicators({name: "move blocs"})
	// 					.addTo(controller);
	// });	

/*ELDINN DESCEND + GROSSI*/
	// $(function () { // wait for document ready   

	// 	var tween6 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to(".eldinn img", 1, {width: "1200px", marginTop: "600px", marginLeft: "-350px", rotation: -160, ease: Linear.easeNone}),
	// 			TweenMax.to(".eldinn", 1, {width: "1000px", ease: Linear.easeNone})
	// 		]);

	// 	// build scene
	// 	var scene7 = new ScrollMagic.Scene({triggerElement: '#repereEldinnDown', duration: 400})
	// 					.setTween(tween6)
	// 					.addIndicators({name: "move eldinn 2"}) // add indicators (requires plugin)
	// 					.addTo(controller);
	// });	



/*
	$(function () { // wait for document ready
		// build tween
		var tween2 = new TimelineMax ()
			.add([
				// TweenMax.fromTo(".bleue", 1, {marginTop: "-150"} ,{marginTop: "-1400", ease: Linear.easeNone}),
			TweenMax.to(".vortasgoth", 1, {marginTop: "100", ease: Linear.easeNone}),
			TweenMax.to(".husphel", 1, {marginTop: "50", ease: Linear.easeNone}),
			TweenMax.to(".nune", 1, {marginTop: "50", ease: Linear.easeNone})
				// TweenMax.to("#bodySkroll", 1, {backgroundPosition: "50% 100%", ease: Linear.easeNone})
			]);

		// build scene
		var scene4 = new ScrollMagic.Scene({triggerElement: '.planeteS1', duration: 1200})
						.setTween(tween2)
						// .setPin("#bodySkroll")
						.addIndicators({name: "planetes"}) // add indicators (requires plugin)
						.addTo(controller);
	});

*/
/*Event box texte 1 */
/*
$(function () {
	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "#85D86E", scale: 2.5}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "box texte pop"})
		.addTo(controller);




	var scene3 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText2"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "#6AEAFC", scale: 1}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "box texte down"})
		.addTo(controller);
});

*/

/*Déplie cellule*/
/*
$(function () {
	// build tween
	var tween2 = new TimelineMax ()
		.add([
			// TweenMax.fromTo(".bleue", 1, {marginTop: "-150"} ,{marginTop: "-1400", ease: Linear.easeNone}),
			TweenMax.to("#cellule1", 1, {marginTop: "2px", marginLeft: "-50px", width: "25%", rotation: -90, ease: Linear.easeNone}),
			TweenMax.to("#cellule2", 1, {marginTop: "-19px", marginLeft: "231px", width: "25%", ease: Linear.easeNone}),
			TweenMax.to("#cellule3", 1, {marginTop: "59px", marginLeft: "260px", width: "25%", rotation: -90, ease: Linear.easeNone}), 
			TweenMax.to("#cellule4", 1, {marginTop: "90px", marginLeft: "-21px", width: "25%", ease: Linear.easeNone})
		]);

	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: '#repereBlocText', duration: 0})
		.setTween(tween2)
		.addIndicators({name: "deplie cellule"}) // add indicators (requires plugin)
		.addTo(controller);
});
*/

/*Replie cellule*/
/*
$(function () {
	// build tween
	var tween7 = new TimelineMax ()
		.add([
			// TweenMax.fromTo(".bleue", 1, {marginTop: "-150"} ,{marginTop: "-1400", ease: Linear.easeNone}),
			TweenMax.to("#cellule1", 1, {marginTop: "-23px", marginLeft: "-27px", width: "60%", rotation: 0, ease: Linear.easeNone}),
			TweenMax.to("#cellule2", 1, {marginTop: "-19px", marginLeft: "154px", width: "50%", ease: Linear.easeNone}),
			TweenMax.to("#cellule3", 1, {marginTop: "40px", marginLeft: "137px", width: "60%", rotation: 0, ease: Linear.easeNone}), 
			TweenMax.to("#cellule4", 1, {marginTop: "45px", marginLeft: "-20px", width: "50%", ease: Linear.easeNone})
		]);

	// build scene
	var scene8 = new ScrollMagic.Scene({triggerElement: '#repereBlocText2', duration: 0})
		.setTween(tween7)
		.addIndicators({name: "replie cellule"}) // add indicators (requires plugin)
		.addTo(controller);
});
*/

/*Event mouvement planetes scene 3*/
/*
	$(function () { // wait for document ready
		// build tween
		var tween3 = new TimelineMax ()
			.add([
				// TweenMax.fromTo(".bleue", 1, {marginTop: "-150"} ,{marginTop: "-1400", ease: Linear.easeNone}),
				TweenMax.to(".tintyph", 1, {marginTop: "-100px", ease: Linear.easeNone}),
				TweenMax.to(".eldinn", 1, {marginTop: "100px", marginLeft: "100px", ease: Linear.easeNone}),
				TweenMax.to(".roack", 1, {marginTop: "350px", marginRight: "50px", ease: Linear.easeNone}),
				TweenMax.to(".dyamtirie", 1, {marginTop: "-300px", ease: Linear.easeNone}),
				TweenMax.to(".nox", 1, {marginTop: "-500px", ease: Linear.easeNone}),
				TweenMax.to("#flux1S3", 1, {height:"1500px"}),
				TweenMax.to("#flux2S3", 1, {height:"1500px"})
				// TweenMax.to("#bodySkroll", 1, {backgroundPosition: "50% 100%", ease: Linear.easeNone})
			]);

		// build scene
		var scene4 = new ScrollMagic.Scene({triggerElement: '.blocPlaneteS3', duration: 1200})
						.setTween(tween3)
						// .setPin("#bodySkroll")
						.addIndicators({name: "parallaxe2"}) // add indicators (requires plugin)
						.addTo(controller);
	});

*/


/*
$(function () {
	// build scene
	var scene9 = new ScrollMagic.Scene({triggerElement: "#bulle1"})
					// trigger a velocity opaticy animation
					.setTween("#bulle1", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle1"}) // add indicators 
					.addTo(controller);
});
$(function () {
	// build scene
	var scene10 = new ScrollMagic.Scene({triggerElement: "#bulle2"})
					// trigger a velocity opaticy animation
					.setTween("#bulle2", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle2"}) // add indicators 
					.addTo(controller);
});
$(function () {
	// build scene
	var scene11 = new ScrollMagic.Scene({triggerElement: "#bulle3"})
					// trigger a velocity opaticy animation
					.setTween("#bulle3", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle3"}) // add indicators 
					.addTo(controller);
});
$(function () {
	// build scene
	var scene12 = new ScrollMagic.Scene({triggerElement: "#bulle4"})
					// trigger a velocity opaticy animation
					.setTween("#bulle4", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle4"}) // add indicators 
					.addTo(controller);
});
$(function () {
	// build scene
	var scene13 = new ScrollMagic.Scene({triggerElement: "#bulle5"})
					// trigger a velocity opaticy animation
					.setTween("#bulle5", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle5"}) // add indicators 
					.addTo(controller);
});
$(function () {
	// build scene
	var scene14 = new ScrollMagic.Scene({triggerElement: "#bulle6"})
					// trigger a velocity opaticy animation
					.setTween("#bulle6", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle6"}) // add indicators 
					.addTo(controller);
});
$(function () {
	// build scene
	var scene15 = new ScrollMagic.Scene({triggerElement: "#bulle7"})
					// trigger a velocity opaticy animation
					.setTween("#bulle7", 1, {opacity: 1}, {duration: 0})
					.addIndicators({name: "bulle7"}) // add indicators 
					.addTo(controller);
});



*/


/* FLUX MONDES */

// function pathPrepare ($el) {
//    var lineLength = $el[0].getTotalLength();
//    $el.css("stroke-dasharray", lineLength);
//    $el.css("stroke-dashoffset", lineLength);
// }



// var $fluxMonde1A = $("path#fluxMonde1A");
// var $fluxMonde1B = $("path#fluxMonde1B");
// var $fluxMonde1C = $("path#fluxMonde1C");
// var $fluxMonde1D = $("path#fluxMonde1D");
// var $fluxMonde1E = $("path#fluxMonde1E");
// var $fluxMonde1F = $("path#fluxMonde1F");
// var $fluxMonde1G = $("path#fluxMonde1G");
// var $fluxMonde1H = $("path#fluxMonde1H");
// var $fluxMonde1I = $("path#fluxMonde1I");
// var $fluxMonde1J = $("path#fluxMonde1J");
// var $fluxMonde1K = $("path#fluxMonde1K");
// var $fluxMonde1L = $("path#fluxMonde1L");
// var $fluxMonde1M = $("path#fluxMonde1M");
// var $fluxMonde1N = $("path#fluxMonde1N");
// var $fluxMonde1O = $("path#fluxMonde1O");
// var $fluxMonde1P = $("path#fluxMonde1P");
// var $fluxMonde1Q = $("path#fluxMonde1Q");
// var $fluxMonde1R = $("path#fluxMonde1R");
// var $fluxMonde1S = $("path#fluxMonde1S");
// var $fluxMonde1T = $("path#fluxMonde1T");
// var $fluxMonde1U = $("path#fluxMonde1U");
// var $fluxMonde1V = $("path#fluxMonde1V");
// var $fluxMonde1W = $("path#fluxMonde1W");
// var $fluxMonde1X = $("path#fluxMonde1X");
// var $fluxMonde1Y = $("path#fluxMonde1Y");
// var $fluxMonde1Z = $("path#fluxMonde1Z");

// var $fluxMonde2 = $("path#fluxMonde2");
// var $fluxMonde3 = $("path#fluxMonde3");
// var $fluxMonde4 = $("path#fluxMonde4");
// var $fluxMonde5 = $("path#fluxMonde5");


// var $dot = $("path#dot");

// prepare SVG
// pathPrepare($fluxMonde1A);
// pathPrepare($fluxMonde1B);
// pathPrepare($fluxMonde1C);
// pathPrepare($fluxMonde1D);
// pathPrepare($fluxMonde1E);
// pathPrepare($fluxMonde1F);
// pathPrepare($fluxMonde1G);
// pathPrepare($fluxMonde1H);
// pathPrepare($fluxMonde1I);
// pathPrepare($fluxMonde1J);
// pathPrepare($fluxMonde1K);
// pathPrepare($fluxMonde1L);
// pathPrepare($fluxMonde1M);
// pathPrepare($fluxMonde1N);
// pathPrepare($fluxMonde1O);
// pathPrepare($fluxMonde1P);
// pathPrepare($fluxMonde1Q);
// pathPrepare($fluxMonde1R);
// pathPrepare($fluxMonde1S);
// pathPrepare($fluxMonde1T);
// pathPrepare($fluxMonde1U);
// pathPrepare($fluxMonde1V);
// pathPrepare($fluxMonde1W);
// pathPrepare($fluxMonde1X);
// pathPrepare($fluxMonde1Y);
// pathPrepare($fluxMonde1Z);

// pathPrepare($fluxMonde2);
// pathPrepare($fluxMonde3);
// pathPrepare($fluxMonde4);
// pathPrepare($fluxMonde5);
// pathPrepare($dot);


/*****FLUX 1****/
// build tween
// var tween20 = new TimelineMax()
// 	.add(TweenMax.to($fluxMonde1A, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1B, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1C, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1D, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1E, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1F, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1G, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1H, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1I, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1J, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1K, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1L, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1M, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1N, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1O, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1P, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1Q, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1R, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1S, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1T, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1U, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1V, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1W, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1X, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1Y, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// 	.add(TweenMax.to($fluxMonde1Z, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw word for 0.9
	// .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	// .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing
// build scene
// var scene20 = new ScrollMagic.Scene({triggerElement: "#repereFluxMonde1", duration: 200, tweenChanges: true})
// 				.setTween(tween20)
// 				.addIndicators({name: "Flux 1"}) // add indicators (requires plugin)
// 				.addTo(controller);


/*****FLUX 2****/
// var tween21 = new TimelineMax()
// 	.add(TweenMax.to($fluxMonde2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
// 	.add(TweenMax.to("path", 1, {stroke: "#93a9f2", ease:Linear.easeNone}), 0); // change color during the whole thing

// var scene21 = new ScrollMagic.Scene({triggerElement: "#repereFluxMonde2", duration: 200, tweenChanges: true})
// 				.setTween(tween21)
// 				.addIndicators({name: "Flux 2"}) // add indicators (requires plugin)
// 				.addTo(controller);

/*****FLUX 3****/
// var tween22 = new TimelineMax()
// 	.add(TweenMax.to($fluxMonde3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
// 	.add(TweenMax.to("path", 1, {stroke: "#93a9f2", ease:Linear.easeNone}), 0); // change color during the whole thing

// var scene22 = new ScrollMagic.Scene({triggerElement: "#repereFluxMonde1", duration: 250, tweenChanges: true})
// 				.setTween(tween22)
// 				.addIndicators({name: "Flux 3"}) // add indicators (requires plugin)
// 				.addTo(controller);

/*****FLUX 4****/
// var tween23 = new TimelineMax()
// 	.add(TweenMax.to($fluxMonde4, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
// 	.add(TweenMax.to("path", 1, {stroke: "#93a9f2", ease:Linear.easeNone}), 0); // change color during the whole thing

// var scene23 = new ScrollMagic.Scene({triggerElement: "#repereFluxMonde1", duration: 250, tweenChanges: true})
// 				.setTween(tween23)
// 				.addIndicators({name: "Flux 4"}) // add indicators (requires plugin)
// 				.addTo(controller);

/*****FLUX 5****/
// var tween24 = new TimelineMax()
// 	.add(TweenMax.to($fluxMonde5, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
// 	.add(TweenMax.to("path", 1, {stroke: "#93a9f2", ease:Linear.easeNone}), 0); // change color during the whole thing

// var scene24 = new ScrollMagic.Scene({triggerElement: "#repereFluxMonde2", duration: 250, tweenChanges: true})
// 				.setTween(tween24)
// 				.addIndicators({name: "Flux 5"}) // add indicators (requires plugin)
// 				.addTo(controller);


/*Event flux box texte*/

// 	$(function () {

// 		var tween5 = new TimelineMax ()
// 			.add([
// 				TweenMax.to("#fluxBTG", 1, {height:"800px"}),
// 				TweenMax.to("#fluxBTD", 1, {height:"800px"})
// 			]);


// 		var scene5 = new ScrollMagic.Scene({triggerElement: "#repereFluxTxt", duration: 600})
// 					.setTween(tween5)
// 					.addIndicators({name: "width++ 2"}) // add indicators (requires plugin)
// 					.addTo(controller);

// 	});


// /*Event box texte 2*/

// 	$(function () {
// 		var scene6 = new ScrollMagic.Scene({
// 			triggerElement: "#repereBlocHistoire"
// 			})
// 			// trigger a TweenMax.to tween
// 			.setTween("#boxHistoire", 0.5, {scale: 1}) 
// 			 // add indicators (requires plugin)
// 			.addIndicators({name: "pop  texteHistoire"})
// 			.addTo(controller);
// 	});


/*Event 4 flux*/

	// $(function () {

	// 	var tween6 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to("#flux1S4", 1, {height:"2000px"}),
	// 			TweenMax.to("#flux2S4", 1, {height:"2000px"}),
	// 			TweenMax.to("#flux3S4", 1, {height:"2000px"}),
	// 			TweenMax.to("#flux4S4", 1, {height:"2000px"})
	// 		]);


	// 	var scene7 = new ScrollMagic.Scene({triggerElement: ".fluxS4", duration: 2000, offset: 50})
	// 				.setTween(tween6)
	// 				.addIndicators({name: "width++"}) // add indicators (requires plugin)
	// 				.addTo(controller);

	// });


/*FIXED PORTAIL*/
	$(function () { 
		var sceneEndBG = new ScrollMagic.Scene({triggerElement: "#repereFixeSysteme", duration: 4000})
			.setPin(".blocPortail")
			.addIndicators({name: "FIXE PORTAIL"})
			.addTo (controller);
		});

/*FIXED PORTAIL*/
	$(function () { 
		var tweenEndBG = new TimelineMax ()
			.add([
				TweenMax.to(".wall", 1, {display:"none", opacity: 1, ease: Linear.easeNone}),
				TweenMax.to(".blocPortail", 1, {animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 100}),
				TweenMax.to(".containHyperspace", 1, {animation: "FadeOut 1000ms linear both", opacity: 0, delay: 0}, {duration: 100}),
				TweenMax.to(".blocPlaneteS3", 1, {animation: "FadeOut 1000ms linear both", opacity: 0, delay: 0}, {duration: 100})
			]);

		var sceneEndBG = new ScrollMagic.Scene({triggerElement: "#reperePortailFixe", duration: 0})
			.setTween(tweenEndBG)
			.addIndicators({name: "FADEIN PORTAIL"})
			.addTo (controller);
		});


/* APPARTITION PORTAIL */

	// $(function () {
	// 	var tween11 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to("#cristal1Lux", 0.1, /*{animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}*/{opacity:1}, {duration: 0})
	// 		]);

	// 	var scene11 = new ScrollMagic.Scene({triggerElement: "#repereCristal1"})
	// 				.setTween(tween11)
	// 				.addIndicators({name: "Fade in Lux1"}) // add indicators (requires plugin)
	// 				.addTo(controller);

	// });


	// $(function () {
	// 	var tween12 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to("#cristal2Lux", 0.1, /*{animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}*/{opacity:1}, {duration: 0})
	// 		]);

	// 	var scene12 = new ScrollMagic.Scene({triggerElement: "#repereCristal2"})
	// 				.setTween(tween12)
	// 				.addIndicators({name: "Fade in Lux2"}) // add indicators (requires plugin)
	// 				.addTo(controller);

	// });


	// $(function () {
	// 	var tween13 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to("#cristal3Lux", 0.1, /*{animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}*/{opacity:1}, {duration: 0})
	// 		]);

	// 	var scene13 = new ScrollMagic.Scene({triggerElement: "#repereCristal3"})
	// 				.setTween(tween13)
	// 				.addIndicators({name: "Fade in Lux3"}) // add indicators (requires plugin)
	// 				.addTo(controller);

	// });


	// $(function () {
	// 	var tween14 = new TimelineMax ()
	// 		.add([
	// 			TweenMax.to("#cristal4Lux", 0.1, /*{animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}*/{opacity:1}, {duration: 0})
	// 		]);

	// 	var scene14 = new ScrollMagic.Scene({triggerElement: "#repereCristal4"})
	// 				.setTween(tween14)
	// 				.addIndicators({name: "Fade in Lux4"}) // add indicators (requires plugin)
	// 				.addTo(controller);

	// });


	$(function () {
		var tween15 = new TimelineMax ()
			.add([
				TweenMax.to("#portail", 1, {animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
				TweenMax.to(".fondPortail a", 1, {animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0})
			]);

		var scene15 = new ScrollMagic.Scene({triggerElement: "#reperePortalFadeIn"})
					.setTween(tween15)
					.addIndicators({name: "Fade in Portail"}) // add indicators (requires plugin)
					.addTo(controller);

	});






/********************************************************   
----- - LECTEUR MUSIQUE -   ---- 
******************************************************/
      function play(idPlayer, control) {
          var player = document.querySelector('#' + idPlayer);
          var image = document.getElementById ("controlSon");
  
          if (player.paused) {
              player.play();
              image.src = 'menu/img/iconSonActive.png';
          } else {
              player.pause(); 
              image.src = 'menu/img/iconSonInactive.png';
          }
      };

      function resume(idPlayer) {
          var player = document.querySelector('#' + idPlayer);
  
          player.currentTime = 0;
          player.pause();
      };

