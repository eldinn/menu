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



/* Scroll*/

	$(function () { // wait for document ready
		// build tween
		var tween = TweenMax.to("#bodySkroll", 1, {backgroundPosition: "50% 50%", ease: Linear.easeNone});

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: 'body', duration: 7200})
						.setTween(tween)
						// .setPin("#bodySkroll")
						.addIndicators({name: "parallaxe"}) // add indicators (requires plugin)
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
/*Event texte 1 */
	$(function () {
	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#repereBlocText"
		})
		// trigger a TweenMax.to tween
		.setTween("#boxIntro", 0.5, {backgroundColor: "green", scale: 2.5}) 
		 // add indicators (requires plugin)
		.addIndicators({name: "box texte pop"})
		.addTo(controller);


	var scene3 = new ScrollMagic.Scene({
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
		var tween3 = new TimelineMax ()
			.add([
				// TweenMax.fromTo(".bleue", 1, {marginTop: "-150"} ,{marginTop: "-1400", ease: Linear.easeNone}),
				TweenMax.to(".tintyph", 1, {marginTop: "-100px", ease: Linear.easeNone}),
				TweenMax.to(".eldinn", 1, {marginTop: "100px", marginLeft: "100px", ease: Linear.easeNone}),
				TweenMax.to(".roack", 1, {marginTop: "250px", marginRight: "50px", ease: Linear.easeNone}),
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


/*Event 4 flux*/
	$(function () {

		var tween4 = new TimelineMax ()
			.add([
				TweenMax.to("#flux1S4", 1, {height:"1500px"}),
				TweenMax.to("#flux2", 1, {height:"1500px"}),
				TweenMax.to("#flux3", 1, {height:"1500px"}),
				TweenMax.to("#flux4", 1, {height:"1500px"})
			]);


		var scene5 = new ScrollMagic.Scene({triggerElement: ".fluxS4", duration: 1700, offset: 50})
					.setTween(tween4)
					.addIndicators({name: "width++"}) // add indicators (requires plugin)
					.addTo(controller);

	});

