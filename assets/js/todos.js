//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");	
});

//Remove Specific Todos By Clicking
$("ul").on("click", "span", function(event){
	//$(this).parent().remove();
	//$(this).parent().css("display", "none");
	$(this).parent().fadeOut(500, function(){
		$(this).remove;
	}); //or $(this).parent().fadeOut().remove();
	event.stopPropagation(); //Stop triggering parent elements (bubbling)
	

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){//code of key: enter
		//get new todo text from input
		var todoText = $(this).val();
		$(this).val("");//important!
		//creat a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	} 
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
