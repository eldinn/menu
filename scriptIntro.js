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
				TweenMax.to("#BGplan1", 1, {backgroundPosition: "50% 30%", ease: Linear.easeNone}),
				TweenMax.to("#BGplan2", 1, {backgroundPosition: "50% 70%", ease: Linear.easeNone}),
				TweenMax.to("#BGplan3", 1, {backgroundPosition: "50% 80%", ease: Linear.easeNone})
			]);


		var sceneScrollBG = new ScrollMagic.Scene({triggerElement: "#reperePlanete", duration: 6000})
					.setTween(tweenScrollBG)
					.addIndicators({name: "parallaxePlans"}) // add indicators (requires plugin)
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


/*APPARITION PLANETES*/
	$(function () { 
		var tweenA1 = new TimelineMax ()
			.add([
				TweenMax.to(".dyamtirie", 1, {animation: "bounceIn 1000ms linear both", opacity: 1}, {duration: 0}),
				TweenMax.to(".heeytee", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.2}, {duration: 0}),
				TweenMax.to(".nune", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.4}, {duration: 0}),
				TweenMax.to(".naoisis", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".gooss", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.8}, {duration: 0})
			]);

		// build scene
		var sceneA1 = new ScrollMagic.Scene({triggerElement: '.A1'})
						.setTween(tweenA1)
						.addIndicators({name: "bounceIn"})
						.addTo(controller);
	});


	$(function () { 
		var tweenA2 = new TimelineMax ()
			.add([
				TweenMax.to(".mudlafrig", 1, {animation: "bounceIn 1000ms linear both", opacity: 1}, {duration: 0}),
				TweenMax.to(".uzukzh", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.2}, {duration: 0}),
				TweenMax.to(".roack", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.4}, {duration: 0}),
				TweenMax.to(".keks", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".aroll", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.8}, {duration: 0}),
				TweenMax.to(".ebes", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.9}, {duration: 0}),
				TweenMax.to(".tam", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 1}, {duration: 0})

			]);

		// build scene
		var sceneA2 = new ScrollMagic.Scene({triggerElement: '.A2'})
						.setTween(tweenA2)
						.addIndicators({name: "bounceIn"})
						.addTo(controller);
	});		



	$(function () { 
		var tweenA3 = new TimelineMax ()
			.add([
				TweenMax.to(".husphel", 1, {animation: "bounceIn 1000ms linear both", opacity: 1}, {duration: 0}),
				TweenMax.to(".vortasgoth", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.2}, {duration: 0}),
				TweenMax.to(".suah", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".soth", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".sifh", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0})
			]);

		// build scene
		var sceneA3 = new ScrollMagic.Scene({triggerElement: '.A3'})
						.setTween(tweenA3)
						.addIndicators({name: "bounceIn"})
						.addTo(controller);
	});




	$(function () { 
		var tweenA4 = new TimelineMax ()
			.add([
				TweenMax.to(".omian", 1, {animation: "bounceIn 1000ms linear both", opacity: 1}, {duration: 0}),
				TweenMax.to(".doplis", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
				TweenMax.to(".atus", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
				TweenMax.to(".jufus", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
				TweenMax.to(".eolia", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.2}, {duration: 0}),
				TweenMax.to(".tintyph", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.4}, {duration: 0}),
				TweenMax.to(".hriude", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".nox", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".paaju", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 0.6}, {duration: 0}),
				TweenMax.to(".medio", 1, {animation: "bounceIn 1000ms linear both", opacity: 1, delay: 1}, {duration: 0})
			]);

		// build scene
		var sceneA4 = new ScrollMagic.Scene({triggerElement: '.A4'})
						.setTween(tweenA4)
						.addIndicators({name: "bounceIn"})
						.addTo(controller);
	});





/*FIXED SYSTEME*/
	$(function () { 
		var scene8 = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 600})
			.setPin(".blocPlaneteS3")
			 //    .on("#removePin", function (e) {
    //     scene8.removePin(e.reset);
    // })
			.addIndicators({name: "FIXE SYSTEME"})
			.addTo (controller);
	});


/*
	$(function () { 
		var scene9 = new ScrollMagic.Scene({triggerElement: "#removePin"})
		  .removePin(true)
		  .addIndicators({name: "REMOVE PIN"})
		  .addTo (controller);		
	});*/

/*ELDINN SUIT LE SYSTEME*//*
	$(function () { // wait for document ready
		// build tween
		var tween7 = TweenMax.to("#eldinnPlanete", 1, {marginTop:"1200px", ease: Linear.easeNone});

		// build scene
		var scene9 = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 600})
						.setTween(tween7)
						// .setPin("#bodySkroll")
						.addIndicators({name: "eldinn suit"}) // add indicators (requires plugin)
						.addTo(controller);
	});
*/

/*ELDINN REDUIT + SE PLACE DANS LE SYSTEME*/
	$(function () { // wait for document ready
		// build tween
		var tween5 = TweenLite.to("#eldinnPlanete", 1, {width: "50px", marginTop: "775px", marginLeft: "250px", ease: Linear.easeNone});

		// build scene
		var scene6 = new ScrollMagic.Scene({triggerElement: '#reperePlanete', duration: 500})
						.setTween(tween5)

						.addIndicators({name: "move eldinn"}) // add indicators (requires plugin)
						.addTo(controller);
	});	

	$(function () { 
		var scene11 = new ScrollMagic.Scene({triggerElement: "#hideEldinn"})
			.setClassToggle("#eldinnPlanete", "hide")
			.addIndicators({name: "HIDE"})
			.addTo (controller);
		});

	$(function () { 
		var tween8 = TweenLite.to(".eldinn", 0, {display: "block", ease: Linear.easeNone});

		var scene12 = new ScrollMagic.Scene({triggerElement: "#showEldinn"})
			.setTween(tween8)
			.addIndicators({name: "SHOW"})
			.addTo (controller);
		});






/*ELDINN DESCEND + GROSSI*/
	$(function () { // wait for document ready   

		var tween6 = new TimelineMax ()
			.add([
				TweenMax.to(".eldinn img", 1, {width: "1200px", marginTop: "600px", marginLeft: "-350px", rotation: -160, ease: Linear.easeNone}),
				TweenMax.to(".eldinn", 1, {width: "1000px", ease: Linear.easeNone})
			]);

		// build scene
		var scene7 = new ScrollMagic.Scene({triggerElement: '#repereEldinnDown', duration: 400})
						.setTween(tween6)
						.addIndicators({name: "move eldinn 2"}) // add indicators (requires plugin)
						.addTo(controller);
	});	



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


/*Event flux box texte*/

	$(function () {

		var tween5 = new TimelineMax ()
			.add([
				TweenMax.to("#fluxBTG", 1, {height:"600px"}),
				TweenMax.to("#fluxBTD", 1, {height:"600px"})
			]);


		var scene5 = new ScrollMagic.Scene({triggerElement: ".blocHistoire", duration: 400})
					.setTween(tween5)
					.addIndicators({name: "width++ 2"}) // add indicators (requires plugin)
					.addTo(controller);

	});


/*Event box texte 2*/

	$(function () {
		var scene6 = new ScrollMagic.Scene({
			triggerElement: "#repereBlocHistoire"
			})
			// trigger a TweenMax.to tween
			.setTween("#boxHistoire", 0.5, {scale: 1}) 
			 // add indicators (requires plugin)
			.addIndicators({name: "pop  texteHistoire"})
			.addTo(controller);
	});


/*Event 4 flux*/

	$(function () {

		var tween6 = new TimelineMax ()
			.add([
				TweenMax.to("#flux1S4", 1, {height:"2000px"}),
				TweenMax.to("#flux2S4", 1, {height:"2000px"}),
				TweenMax.to("#flux3S4", 1, {height:"2000px"}),
				TweenMax.to("#flux4S4", 1, {height:"2000px"})
			]);


		var scene7 = new ScrollMagic.Scene({triggerElement: ".fluxS4", duration: 2000, offset: 50})
					.setTween(tween6)
					.addIndicators({name: "width++"}) // add indicators (requires plugin)
					.addTo(controller);

	});

/*FIXED PORTAIL*/
	$(function () { 
		var scene10 = new ScrollMagic.Scene({triggerElement: "#reperePortailFixe", duration: 1300})
			.setPin(".blocPortail")
			.addIndicators({name: "FIXE PORTAIL"})
			.addTo (controller);
		});


/* APPARTITION PORTAIL */
	// $(function () { 
	// 	var scene11 = new ScrollMagic.Scene({triggerElement: "#reperePortailFixe", duration: 1000})
	// 		.setPin(".blocPortail")
	// 		.addIndicators({name: "FIXE PORTAIL"})
	// 		.addTo (controller);
	// 	});
