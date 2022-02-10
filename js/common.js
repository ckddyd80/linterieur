$(".trigger").on({  
    "click" : function(){
        // 햄버거 메뉴 버튼이 보일때 (햄버거 메뉴가 visible 상태인가?로 판단) 
        if($(".mobile.hamburger").is(":visible")) {
            /* 모바일 닫기 버튼 show */
            $(".mobile.hamburger").hide();
            $(".mobile.close").show();

            /* 모바일 전체 메뉴 show */
            $("#main_header").height(60);
            $("#main_content").hide();
            $("#main_footer").hide();

            $("#mobile_menu").empty(); // #mobile_menu 하위 태그 초기화

            var nav = $(".nav").clone(); 
            $("#mobile_menu").append(nav);
            $("#mobile_menu").show();
            
        } else {
            // 닫기 메뉴 버튼이 보일때
            /* 모바일 햄버거 버튼 show */
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();
            /* 모바일 전체 메뉴 show */
            $("#main_header").height(390);
            $("#main_content").show();
            $("#main_footer").show();
            $("#mobile_menu").hide();
        }
    
    }
});

$(window).resize(function() {
    var width = $(window).width();

    if(width >= 767) {
    if ($("#mobile_menu").is(":visible")) {
        $(".mobile.hamburger").show();
        $(".mobile.close").hide();

        $("#main_header").height(390);
        $("#main_content").show();
        $("#main_footer").show();
        $("#mobile_menu").hide();
    }
    }
});