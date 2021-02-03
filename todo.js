//checkoff specific elements by clicking
$("ul").on("click" , "li", function(){
    $(this).toggleClass("strike");
});
//click on x to delete items
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation;
});
//grabbing input of todo
$("input").keypress(function(event){
    if(event.which === 13){
        var todotext = $(this).val();
        $(this).val("");
//create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todotext+"</li>");

    }
});
$(".fa-plus").click(function(){
    $("input").fadeToggle()
});
