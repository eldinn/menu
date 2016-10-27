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



/* Scroll*/
	$(function () { // wait for document ready
		// build tween
		var tween = new TimelineMax ()
			.add([
				TweenMax.fromTo(".vortasgoth", 1, {marginTop: "-10"} ,{marginTop: "-2500", ease: Linear.easeNone}),
				TweenMax.fromTo(".husphel", 1, {marginTop: "100"}, {marginTop: "-1500", ease: Linear.easeNone}),
				TweenMax.fromTo(".nune", 1, {marginTop: "100"}, {marginTop: "-1000", ease: Linear.easeNone}),
				TweenMax.to("#bodySkroll", 1, {backgroundPosition: "50% 100%", ease: Linear.easeNone})
			]);

		// build scene
		var scene3 = new ScrollMagic.Scene({triggerElement: 'body', duration: 7200})
						.setTween(tween)
						// .setPin("#bodySkroll")
						.addIndicators({name: "parallaxe"}) // add indicators (requires plugin)
						.addTo(controller);
	});



/*Event texte 1 */
	$(function () {
	var scene1 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "green", scale: 2.5}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "box texte pop"})
		.addTo(controller);


	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText2"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "#fff", scale: 1}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "box texte down"})
		.addTo(controller);
	});




/*Event mouvement planetes scene 3*/
	$(function () { // wait for document ready
		// build tween
		var tween2 = new TimelineMax ()
			.add([
				// TweenMax.fromTo(".bleue", 1, {marginTop: "-150"} ,{marginTop: "-1400", ease: Linear.easeNone}),
				TweenMax.to(".tintyph", 1, {marginTop: "-100px", ease: Linear.easeNone}),
				TweenMax.to(".eldinn", 1, {marginTop: "100px", ease: Linear.easeNone}),
				TweenMax.to(".roack", 1, {marginTop: "150px", ease: Linear.easeNone}),
				TweenMax.to(".nox", 1, {marginTop: "-300px", ease: Linear.easeNone})
				// TweenMax.to("#bodySkroll", 1, {backgroundPosition: "50% 100%", ease: Linear.easeNone})
			]);

		// build scene
		var scene4 = new ScrollMagic.Scene({triggerElement: '.blocPlaneteS3', duration: 1200})
						.setTween(tween2)
						// .setPin("#bodySkroll")
						.addIndicators({name: "parallaxe2"}) // add indicators (requires plugin)
						.addTo(controller);
	});


/*Event 4 flux*/
	$(function () {

		var tween3 = new TimelineMax ()
			.add([
				TweenMax.fromTo("#flux1", 1, {height: "0px"}, {height:"1200px"}),
				TweenMax.fromTo("#flux2", 1, {height: "0px"}, {height:"1200px"}),
				TweenMax.fromTo("#flux3", 1, {height: "0px"}, {height:"1200px"}),
				TweenMax.fromTo("#flux4", 1, {height: "0px"}, {height:"1200px"})
			]);


		var scene5 = new ScrollMagic.Scene({triggerElement: ".fluxS4", duration: 1500, offset: 50})
					.setTween(tween3)
					.addIndicators({name: "width++"}) // add indicators (requires plugin)
					.addTo(controller);

	});