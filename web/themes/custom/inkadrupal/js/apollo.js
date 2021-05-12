(function ($) {
  // All your code here
  $(function () {
      "use strict";

      // ---------------------------------------------------------------------------------------------------------------------------->
      // GENERAL SCRIPTS FOR ALL PAGES    ||----------- 
      // ---------------------------------------------------------------------------------------------------------------------------->

      $(document).ready(function () {
        int_introHeight();
        stickHeader();
        init_wow_animation();
        int_lightbox();
      });

      $(window).resize(function () {
        int_introHeight();
        stickHeader();
      })

      $(window).scroll(function () {
        stickHeader();
      });


      // ---------------------------------------------------------------------------------------------------------------------------->
      // SCROLL FUNCTIONS   ||-----------
      // ---------------------------------------------------------------------------------------------------------------------------->
      function scroll() {
          // //Click Event to Scroll to Top
          $(window).scroll(function () {
              if ($(this).scrollTop() > 300) {
                  $('.scroll-top').fadeIn();
              } else {
                  $('.scroll-top').fadeOut();
              }
          });

          $('.scroll-top').click(function () {
              $('html, body').animate({ scrollTop: 0 }, 800);
              return false;
          });

          // Scroll Down Elements
          $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on('click', function (e) {
              e.preventDefault();

              var target = this.hash;
              var $target = $(target);

              $('html, body').stop().animate({
                  'scrollTop': $target.offset().top
              }, 900, 'swing', function () {
                  window.location.hash = target;
              });
          });

      };


      // ----------------------------------------------------------------
      // Backgrounds Image (Slider, Section, etc..)
      // ----------------------------------------------------------------
      var pageSection = $('.slide-bg-image, .bg-image');
      pageSection.each(function (indx) {

          if ($(this).attr("data-background-img")) {
              $(this).css("background-image", "url(" + $(this).data("background-img") + ")");
          }
      });

      // ----------------------------------------------------------------
      // Intro Height
      // ----------------------------------------------------------------
      function int_introHeight() {
          var windiwHeight = $(window).height();
          // Intro Height
          $('.js-fullscreen-height').css('height', windiwHeight);
      };


      // ---------------------------------------------------------------------------------------------------------------------------->
      // STICKY HEADER FUNCTIONS   ||-----------
      // ---------------------------------------------------------------------------------------------------------------------------->
      function stickHeader() {

          var scrolled = $(window).scrollTop();
          var windHeight = $(window).height();
          if (scrolled > 150) {
              $('.header').addClass('header-prepare');
          } else {
              $('.header').removeClass('header-prepare');
          }

          if (scrolled > 1) {
              $('.header').addClass('header-fixed');
          } else {
              $('.header').removeClass('header-fixed');
          }
      };

      // ----------------------------------------------------------------
      // WOW animation Element
      // ----------------------------------------------------------------
      function init_wow_animation() {
          $(function () {
  
              var wow = new WOW({
                  boxClass: 'wow',
                  animateClass: 'animated',
                  offset: 90,
                  mobile: false,
                  live: true
              });

              if ($("body").hasClass("wow-animate")) {
                  wow.init();
              }

          });
      }

      // ----------------------------------------------------------------
      // lightbox Plugins (image lightbox, iframe lightbox, video lightbox)
      // ----------------------------------------------------------------
      function int_lightbox() {

          // Portfolio Gallery Popup
          $('.gallery-popup').magnificPopup({
              delegate: '.gallery-popup-link',
              type: 'image',
              tLoading: 'Loading image #%curr%...',
              mainClass: 'mfp-img-mobile',
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
              },
              image: {
                  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                  titleSrc: function (item) {
                      return item.el.attr('title');
                  }
              }
          });
  
          // Video popup (youtube, vimeo), map popup, iframe popup,
          $('.popup-youtube, .popup-vimeo, .popup-gmaps, .video-popup').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
          });
      };

  });
})(jQuery);