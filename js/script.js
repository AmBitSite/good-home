$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $(".toTop").fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});
$('.toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
});


$(".gallery-more").click(function () {
    if ($(".gallery-more").text() === "View all") {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item").length; i++) {
            document.getElementsByClassName("portfolio-block-img__item")[i].style.display = "flex";
        }
        $(".gallery-more").text("Hide")
    }
    else {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item").length; i++) {
            if (i > 8) {
                document.getElementsByClassName("portfolio-block-img__item")[i].style.display = "none";
            }
            $(".gallery-more").text("View all")
        }
    }
})
$(".gallery-more2").click(function () {
    if ($(".gallery-more2").text() === "View all") {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item_2").length; i++) {
            document.getElementsByClassName("portfolio-block-img__item_2")[i].style.display = "flex";
        }
        $(".gallery-more2").text("Hide")
    }
    else {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item_2").length; i++) {
            if (i > 8) {
                document.getElementsByClassName("portfolio-block-img__item_2")[i].style.display = "none";
            }
            $(".gallery-more2").text("View all")
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
$(document).ready(function () {
    $('.popup-gallery2').magnificPopup({
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


//-------------------------------slider------------------------------------

var slider = document.querySelector(".comment-slider");
var arrSliderItem = slider.children;
var numberSlider = document.querySelector(".comment-control__current-number-slider");
var btnPrev = document.querySelector(".comment-control__prev");
var btnNext = document.querySelector(".comment-control__next");
var correctNumberSlider = +numberSlider.innerText - 1;
var countSlider = document.querySelector(".comment-control__count-slider");
countSlider.innerText = arrSliderItem.length
function nextSlide() {
    for (var count = 0; count < arrSliderItem.length; count++) {
        arrSliderItem[count].style.display = "none";
    };
    arrSliderItem[correctNumberSlider].style.display = "flex";
    countSlider.innerText = arrSliderItem.length;
    numberSlider.innerText = correctNumberSlider + 1
};
nextSlide();
function sliderr() {
    if (correctNumberSlider <= arrSliderItem.length - 2) {
        correctNumberSlider += 1;
        nextSlide();
    }
    else {
        correctNumberSlider = 0;
        nextSlide();
    }
}
btnNext.addEventListener("click", function () {
    sliderr();
});
btnPrev.addEventListener("click", function () {
    if (!correctNumberSlider == 0) {
        correctNumberSlider -= 1;
        nextSlide();
    }
    else {
        correctNumberSlider = 7;
        correctNumberSlider -= 1;
        nextSlide();
    };
})

 setInterval(sliderr, 3000)