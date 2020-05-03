$(function() {

    $('.travel__slider').slick({
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                    centerPadding: true
                }
            }
        ]
    })

    let slides = $('.travel__item');
    let slidesLength = Math.floor(slides.length / 2);
    let currentSlide = $(".current");
    let restSlide = $('.rest');
    let prevBtn = $('.travel__slider .slick-prev');
    let nextBtn = $('.travel__slider .slick-next');


    let count = 1;
    currentSlide.html('0' + count);

    nextBtn.on('click', function() {
        incrementSlideCount()
    });

    prevBtn.on('click', function() {
        decrementSlideCount()
    });

    function incrementSlideCount() {
        count++;
        if (count > slidesLength) {
            count = 1;
        }
        currentSlide.html('0' + count);
    }

    function decrementSlideCount() {
        count--;
        if (count < 1) {
            count = slidesLength
        }
        currentSlide.html('0' + count);
    }
    restSlide.text('/' + '0' + slidesLength)

    $(".gallery__slider").slick({
        variableWidth: true,
        slidesToShow: 4,
        arrows: true,
        loop: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2
                }
            }
        ]
    })

  
    

})