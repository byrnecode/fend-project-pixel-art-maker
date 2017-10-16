// When size is submitted by the user, call makeGrid()
$('#submit').on( 'click' , function (e) {
	e.preventDefault();
	makeGrid();
});


// for sinlge click on grid column
$('#pixel_canvas').on( 'mousedown', 'td', function () {
	var color = $('#colorPicker').val();
	$(this).css('background-color', color);
});

// for hold click on grid column
$('#pixel_canvas').mousedown( function () {
	var color = $('#colorPicker').val();
	
	$(this).find('td').hover( function () {
		$(this).css('background-color', color);
	});
	
}).mouseup( function () {
	$(this).find('td').off();
});

// make sure to remove hover event for columns
// when mousepointer is out of canvas
$(document).mouseup( function() {
	$('#pixel_canvas td').off();
})

// Function to make Grid in the Canvas
function makeGrid() {
	
	var $container = $('#pixel_canvas > tbody'),
			gridHeight = $('#input_height').val(),
			gridWidth = $('#input_width').val(),
			grid = '';
	
	for (var x = 0; x < gridHeight; x++) {
		grid += '<tr>';
		
		for (var y = 0; y < gridWidth; y++) {
			grid += '<td></td>';
		}
		
		grid += '</tr>';
	}
	
	$container.html(grid);
}
