/*----------------------------------------------------------------------
  Template Name: Pertest - Personal Portfolio HTML Template
  Author: Creativemela
  Author URL: https://themeforest.net/user/creativemela

  Note: This is Plugins Active file. 
------------------------------------------------------------------------*/
(function ($) {
  ('use strict');

  $(window).on('load', function () {
    // Preloader Active Code
    $('#container').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('#container').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader')
        .delay(500)
        .queue(function () {
          $(this).remove();
        });
    }
  });

  // WoW Js
  var wow = new WOW({});
  wow.init();

  // Isotop Projects Filter
  $('#container').imagesLoaded(function () {
    $('.project-filter ul li span').click(function () {
      $('.project-filter ul li span.active').removeClass('active');
      // $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $projectContainer.isotope({
        filter: filterValue,
      });
    });
    var $projectContainer = $('.projects-container').isotope({
      layoutMode: 'fitRows',
      itemSelector: '.grid-item',
      parcentPosition: true,
      animationOptions: {
        queue: true,
      },
      fitRows: {
        gutter: '.gutter-sizer',
      },
    });
  });

  // Skills Slider
  $('.skills-slider').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    responsiveClass: true,
    responsiveBaseElement: 'body',
    responsive: {
      0: { items: 1 },
      438: { items: 2 },
      650: { items: 3 },
      768: { items: 3 },
      850: { items: 4 },
      1050: { items: 5 },
      1270: { items: 6 },
      1470: { items: 7 },
      1700: { items: 8 },
    },
  });

  // Brands Slider
  $('.brands-slider').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 100,
    dots: false,
    responsiveClass: true,
    responsiveBaseElement: 'body',
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      768: { items: 3 },
      1040: { items: 4 },
      1200: { items: 5 },
      1600: { items: 5 },
      1920: { items: 5 },
    },
  });

  // Menu Fixed Components
  var fixed_top = $('.header-section');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 105) {
      fixed_top.addClass('menu-fixed animated fadeInDown');
      fixed_top.removeClass('slideInUp');
      $('body').addClass('body-padding');
    } else {
      fixed_top.removeClass('menu-fixed fadeInDown');
      fixed_top.addClass('slideInUp');
      $('body').removeClass('body-padding');
    }
  });

  // Main Menu
  $('.header-bar').on('click', function (e) {
    $('.main-menu, .header-bar').toggleClass('active');
  });
  $('.main-menu li a').on('click', function (e) {
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
      element.removeClass('open');
      element.find('li').removeClass('open');
      element.find('ul').slideUp(600);
    } else {
      element.siblings('li').removeClass('open');
      element.siblings('li').find('li').removeClass('open');
      element.addClass('open');
      element.find('ul').slideDown(600);
      element.siblings('li').find('ul').slideUp(600);
    }

    if (element.find('ul').length === 0) {
      $('.main-menu, .header-bar').toggleClass('active');
    }
  });

  // Side contact added
  $('.remove-click').on('click', function (e) {
    $('.subside-barmenu').toggleClass('active');
  });

  //  OnePage Active Class
  $('.one-page-nav').onePageNav({
    currentClass: 'current-menu',
    changeHash: false,
    easing: 'swing',
  });

  // Popup
  $('.modal-popup').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'popup-mfp',
  });

  // Click event handler for Service items
  $('.service-item-wrapper > .service-item').click(function () {
    // Toggle active class and slideToggle service panel
    $(this)
      .toggleClass('is-active')
      .siblings('.service-item')
      .removeClass('is-active')
      .find('.service-panel, .btn-wrapper')
      .slideUp();

    $(this)
      .children('.service-txt')
      .children('.service-panel')
      .slideToggle('ease-out');
    $(this).children('.btn-wrapper').slideToggle('ease-out');
  });

  // Initially activate items with class 'is-active'
  $('.service-item.is-active .service-panel').slideDown();
  $('.service-item.is-active .btn-wrapper').slideDown();

  // Click event handler for blog items
  $('.blog-item-wrap > .blog-item').click(function () {
    // Toggle active class and slideToggle blog panel
    $(this)
      .toggleClass('is-active')
      .siblings('.blog-item')
      .removeClass('is-active')
      .find('.blog-panel')
      .slideUp();

    $(this).children('.blog-panel').slideToggle('ease-out');
  });

  // Initially activate items with class 'is-active'
  $('.blog-item.is-active .blog-panel').slideDown();

  //Testimonial Slider
  $('.next').click(function () {
    $('.slider .slides:first-child').appendTo('.slider');
  });

  $('.prev').click(function () {
    $('.slider .slides:last-child').prependTo('.slider');
  });

  // Scroll to the target URL (e.g., #skills) element smoothly
  if (window.location.hash) {
    var target = $(window.location.hash);
    if (target.length) {
      target.offset().top;
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
    }
  }
})(jQuery);
