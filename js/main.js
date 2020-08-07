$(document).ready(function(){

	let $btns = $('.project-display .button-group button'); //not working

	$btns.click(function(e){
			
		$('.project-display .button-group button').removeClass("active");
		e.target.classList.add("active");

		let selector = $(e.target).attr("data-filter");
		$('.project-display .grid').isotope({
			filter:selector
		});
		return false;
	})

	$('project-area .button-group #btn1').trigger("click");

	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').trigger('focus')
	})
});