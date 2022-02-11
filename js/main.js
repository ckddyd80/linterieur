$(window).resize(function() {
    var width = $(window).width();

    if(width < 767) {
        $(".modern_img > img").attr("src", "./img/medium_banner_mo/me_mo_be.jpg");
        $(".k_img > img").attr("src", "./img/product_ca/pro_kitchen_s.jpg");
    }
});