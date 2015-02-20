var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.mobileNav.init();
		jsTheme.forms.init();
		jsTheme.mediaQuery.init();
		//console.log("javascript is locked and loaded!") // for testing purposes. Check your console. Delete after you finished reading this. :-)
	}

};

jsTheme.mobileNav =
{
	init: function()
	{
		jsTheme.mobileNav.enableMobileNav();
		jsTheme.mobileNav.buildMobileNav();
	},

	// CSS is based on the class .mobile-nav
	//
	enableMobileNav: function()
	{
		$("html").addClass("mobile-nav");
	},

	// build mobile nav
	buildMobileNav: function()
	{
		var navHolder = $('.navigation');

		navHolder.prepend('<span class="main-nav-trigger">menu</span>');

		var trigger = $('.main-nav-trigger');
		var nav = $('.main-nav');

		trigger.on('click', function() {
			nav.toggle();
			$(this).toggleClass("trigger-active");
		});
	}

};

jsTheme.forms =
{
	init: function()
	{
		$('.alert-box').on('click', function(e)
		{
			e.preventDefault();
			$(this).closest('.alert-box').fadeOut(300);
		});
	}

};

jsTheme.mediaQuery =
{
	init: function()
	{
		if ($(window).width() < 680) {
		    $('#nav-row').removeClass('row');

		} else {
		    $('#nav-row').addClass('row');
		}
	}
};


$(jsTheme.init);



// JQuery

// Set pixelRatio to 1 if the browser doesn't offer it up.
var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
 
// Rather than waiting for document ready, where the images
// have already loaded, we'll jump in as soon as possible.
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('.retina').each(function() {
 
            // Very naive replacement that assumes no dots in file names.
            $(this).attr('src', $(this).attr('src').replace(".","@2x."));
        });
    }

	$(function() {
	    $('.main-nav ul a').bind('click',function(event){
	        var $anchor = $(this);
	 
	        $('html, body').animate({
	            scrollTop: $($anchor.attr('href')).offset().top + "px"
	        }, 1000);
	        event.preventDefault();
	    });
	});

	$(function() {
	    $('.back-to-top a').bind('click',function(event){
	        var $anchor = $(this);
	 
	        $('html, body').animate({
	            scrollTop: $($anchor.attr('href')).offset().top + "px"
	        }, 1000);
	        event.preventDefault();
	    });
	});


	//
	// function to get identifier
	//


	$(function() {
	   var iden_id = window.location.search.split('?identifier=')[1];
		if(iden_id === "contact") 
		{
			$(function() {
		        var $anchor = $("#contact");
		 
		        $('html, body').animate({
		            scrollTop: $($anchor).offset().top + "px"
		        }, 1000);
		        event.preventDefault();
			}); 
		}
	 });



	//
	// Navigation row
	//

	var mq = window.matchMedia( "(max-width: 680px)" );

	$(window).resize(function() {
 		if (mq.matches) {			
		    $('#nav-row').removeClass('row');
		}

		else {
		    $('#nav-row').addClass('row');

		}
	
	});


});




$(document).ready( function(){ 

//
// BLOG OVERLAY
//

	if ($(window).width() > 680) {
		$('.article').hover( 
            //Mouseover function 
            function(){ 
                $(this).find('.blog-overlay').fadeIn("fast"); 
            }, //Don't forget the comma here! 
 
            //Mouseout function 
            function(){ 
               $(this).find('.blog-overlay').fadeOut("fast"); 
            } 
		); 
	}
	else {

	}


	var mq = window.matchMedia( "(max-width: 680px)" );
	
	$(window).resize(function() {
 		if (mq.matches) {			
		    $('.blog-holder').removeClass('blog-overlay');
	    	//$('.project-overlay').show();
		}

		else {
			$('.blog-overlay').hide();
		    $('.blog-holder').addClass('blog-overlay');
		    $('.article').hover( 
	            //Mouseover function 
	            function(){ 
	                $(this).find('.blog-overlay').fadeIn("fast"); 
	            }, //Don't forget the comma here! 
	 
	            //Mouseout function 
	            function(){ 
	               $(this).find('.blog-overlay').fadeOut("fast"); 
	            } 
    		); 

		}
	
	});


	//
	// SLIDESHOW
	//

	$('#slider img:first').addClass('active');

}); 


	function cycleImages(){
      var $active = $('#slider .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#slider img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

	$(document).ready(function(){
	// run every 7s
	setInterval('cycleImages()', 4000);
	})





