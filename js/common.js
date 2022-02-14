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

// $(window).resize(function() {
//     var width = $(window).width();

//     if(width < 767) {
//         $(".mobile_menu").show();
//     }
// });

