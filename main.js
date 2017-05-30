$(function() {

	// https://github.com/alvarotrigo/fullPage.js/

	$('#fullpage').fullpage({
		scrollingSpeed: 1500,
		sectionSelector: 'section,.section',
		menu: 'nav',
		// white, mustard, mint, burgundy, celeste, chocolate, tangerine
		sectionsColor: ['#fff', '#ffa700', '#a5d0b4', '#800020', '#a1c3d3', '#7c4a32', '#ff7f50'], 

		// Below this size (bootstrap sm or less) there will be no autoscroll
		responsiveWidth: 767,
		responsiveHeight: 500,

		// CSS3 animation doesn't allow for parallax bg
		css3: false,

		// smooth loading transition
		afterRender: function() {
			$('body').addClass('loaded');
		},

		// Move to/from first page will hide/show the top banner background and logo (links are always present)
		onLeave: function(index, nextIndex) {
			if (index == 1) {
				$('.navbar').animate({backgroundColor: 'rgba(0, 164, 188, 1)'}, 1500, 'easeInOutCubic');
				$('.navbar-brand').animate({opacity: 1}, 2500, 'easeInOutCubic');
			}
			if (nextIndex == 1) {
				$('.navbar').animate({backgroundColor: 'rgba(0, 164, 188, 0)'}, 1500, 'easeInOutCubic');
				$('.navbar-brand').animate({opacity: 0}, 500, 'easeInOutCubic');
			}
		}		
	});

    $('[data-toggle="tooltip"]').tooltip();

	// If there is no autoscroll (mobile), then the hide/show transition for the top banner,
	// needs to be based on scroll position

	var $nb = $('.navbar'), $nbb = $('.navbar-brand'), about = $('section[data-anchor="about"]')[0],
	windowHeight = window.innerHeight || document.documentElement.clientHeight;

	window.addEventListener('scroll', function(e) {
    	var posAbout = about.getBoundingClientRect().top,
   		nbOpacity = 1 - (Math.max(posAbout, 0) / windowHeight);
   		$nb.css('background-color', 'rgba(0, 164, 188, ' + nbOpacity + ')');   		
	});

    // http://stackoverflow.com/questions/21203111/bootstrap-3-collapsed-menu-doesnt-close-on-click
    $(document).on('click','.navbar-collapse.show',function(e) {
	    if( $(e.target).is('a') ) {
	        $(this).collapse('hide');
	    }
	});
});