$(document).ready(function(){

	// var bio_text = {};

	// $.ajax({
	// 	method: "GET",
	// 	url: "https://aanojima.mit.edu/Personal/resources/outdoors.txt",
	// 	async: false,
	// 	success: function(data){
	// 		bio_text['outdoors'] = data;
	// 		console.log(data);
	// 	}
	// })

	$(".about-icon").click(function(e){
		var type = $(this).data('type');
		$("#modal-label").text(type.toUpperCase());
		$.ajax({
			url : "Personal/data/" + type + ".txt",
			success : function(text){
				$('.modal-body').html(text);
				$('#modal').modal('show');
			},
			error : function(error){
				console.log(error);
			}
		})
	});


});