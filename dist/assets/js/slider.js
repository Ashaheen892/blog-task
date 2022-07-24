$(document).ready(function () {
  /*=============================================
=            Section slider_news            =
=============================================*/

  $(".slider_news .slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    rtl: true,
    autoplay: true,
    asNavFor: ".slider-nav",
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          fade: false,
          arrows: true,
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="icon fas fa-angle-right"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="icon fas fa-angle-left"></i></button>',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
          arrows: true,
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="icon fas fa-angle-right"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="icon fas fa-angle-left"></i></button>',
        },
      },
    ],
  });
  $(".slider_news .slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    verticalSwiping: true,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    lazyLoad: "ondemand",
  });

  /*=====  End of Section slider_news  ======*/
  /*=============================================
=            Section  most_watched_slider            =
=============================================*/
  $(".most_watched_slider ,.most_popular_slider,.most_read_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    dots: false,
    lazyLoad: "ondemand",
    prevArrow:
      '<button class="slide-arrow prev-arrow"><i class="icon fas fa-angle-right"></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><i class="icon fas fa-angle-left"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /*=====  End of Section  most_watched_slider  ======*/
  $('button[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    $(".most_watched_slider ,.most_popular_slider,.most_read_slider").slick(
      "setPosition",
      0
    );
  });
});
