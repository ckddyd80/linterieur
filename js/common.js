$(".hamburger").on({  
    "click" : function(){
            $(".mobile_menu").show();
            $(this).hide();
            $(".close").show();
    }
});

$(".close").on({  
    "click" : function(){
            $(".mobile_menu").hide();
            $(this).hide();
            $(".hamburger").show();
    }
});


