$(document).ready(function() {

	$("#submit-btn").click(function(){

		console.log("Hello to the log world");

		//var exclamation = document.getElementById("exclamation").value();
		var exclamation = $('#exclamation').val();
		var adverb = $('#adverb').val();
		var noun = $('#noun').val();
		var verb = $('#verb').val();

		console.log(exclamation);

		var mad_lib = "'" + exclamation + "!' he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";
		
		$("#para").hide();
		$("#para").html("<h1>"+mad_lib+"</h1>").css('color', '#0000ff').fadeIn("slow");
		//$("#para")..fadeToggle();
		 
		
		//$this.addclass("#shd")
		console.log(mad_lib);

	});
});