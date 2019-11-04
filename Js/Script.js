//	Will ececute the function when the document is ready.
$(document).ready(function()
{
	$('#slides').superslides(
		{
			animation: 'fade',
			play: 5000,
			pagination: false
		});

	var typed = new Typed(".typed", 
	{
		strings: ["Computer Science Engineer", "Game Programmer and Developer", "3D Designer"],
		typeSpeed: 50,
		loop: true,
		starDelay: 1000,
		showCursor: true
	})

	var owl = $('.owl-carousel').owlCarousel(
	{
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:2000,
    	autoplayHoverPause:true,
	    responsive:
	    {
	        0:
	        {
	            items:1
	        },
	        600:
	        {
	            items:3
	        },
	        1000:
	        {
	            items:5
	        }
	    }
	})

	owl.on('mousewheel', '.owl-stage', function (e) 
	{
	    if (e.deltaY>0) 
	    {
	        owl.trigger('next.owl');
	    } 
	    else 
	    {
	        owl.trigger('prev.owl');
	    }
	    e.preventDefault();
	});


});

