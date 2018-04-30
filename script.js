
$(document).ready(function(){    
    $("h1").hover(function(){
        $(this).css("font-family", "Times New Roman");
    }, function(){
        $(this).css("font-family", "Georgia");
    });
});

$(document).ready(function(){    
    $("h1").dblclick(function(){
        $(this).addClass("blue");
    });
});
