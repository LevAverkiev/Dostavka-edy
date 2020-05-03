$(function(){


    $('.special-offer__inner').slick({
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '85px',
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
    });

    $('.popular-product__inner').slick({
        slidesToShow: 2,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.best-offers__inner').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.drinks__inner').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.similar-offers__inner').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.burgers__inner').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.blog__inner').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 796,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.slider-advertising__wrap').slick({
        slidesToShow: 6,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 836,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.menu-btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.button__desc').on('click', function () {
        $('.product__desc').slideToggle();
    });

    if ($(window).width() < 1000) {
        $('.category__top-title').on('click', function () {
            $('.category__top-menu .menu').slideToggle();
        });
    }
    
    
});