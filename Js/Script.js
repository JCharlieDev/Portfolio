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
});