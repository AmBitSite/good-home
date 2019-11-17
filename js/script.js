$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $(".toTop").fadeIn();   
    } else {
        $('.toTop').fadeOut();
    }
});
$('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});


$(".gallery-more").click(function () {
    if ($(".gallery-more").text()==="View all") {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item").length; i++) {
            document.getElementsByClassName("portfolio-block-img__item")[i].style.display = "flex";
        }
        $(".gallery-more").text("Hide")
    }
    else{
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item").length; i++) {
            if(i>8){
                document.getElementsByClassName("portfolio-block-img__item")[i].style.display = "none";
            }
            $(".gallery-more").text("View all")
        }
    }
})

$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});