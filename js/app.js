Reveal.addEventListener('slide1', function() {
	Reveal.addEventListener( 'fragmentshown', function( event ) {
		document.getElementById("opacity").classList.add('opacity-applied');
	} );
})
