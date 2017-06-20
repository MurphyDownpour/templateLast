$(document).ready(function($) {
	$("#templateName").fadeIn(600, function() {
		$("#first").fadeIn(600, function() {
			$("#second").fadeIn(600, function() {
				$("#third").fadeIn(600, function(){
					$(".btn-group button").fadeIn(600, function() {
						$("form").show(600);
					});
				});
			});
		});
	});
});