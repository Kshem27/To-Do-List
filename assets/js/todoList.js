//Checking off todos 
$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
})
//To delete todos
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){//To fade out the todos
        $(this).remove()//To remove the todos
    })
    event.stopPropagation();
})
$('input[type="text"]').keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val()
        $(this).val("")
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})
$(".fa-plus").click(function(){
    $("input").fadeToggle(200);
})