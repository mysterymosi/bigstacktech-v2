/* eslint-disable */
(function ($) {
  "use strict";

  $.fn.counterUp = function(options) { var settings = $.extend({ time: 400, delay: 10, offset: 100, beginAt: 0, formatter: false, context: "window", callback: function() {} }, options),
      s; return this.each(function() { var $this = $(this),
        counter = { time: $(this).data("counterup-time") || settings.time, delay: $(this).data("counterup-delay") || settings.delay, offset: $(this).data("counterup-offset") || settings.offset, beginAt: $(this).data("counterup-beginat") || settings.beginAt, context: $(this).data("counterup-context") || settings.context }; var counterUpper = function() { var nums = []; var divisions = counter.time / counter.delay; var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text(); var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, ""); var decimalPlaces = (num.split(".")[1] || []).length; if (counter.beginAt > num) counter.beginAt = num; var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num); if (isTime) { var times = num.split(":"),
            m = 1;
          s = 0; while (times.length > 0) { s += m * parseInt(times.pop(), 10);
            m *= 60 } } for (var i = divisions; i >= counter.beginAt / num * divisions; i--) { var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces); if (isTime) { newNum = parseInt(s / divisions * i); var hours = parseInt(newNum / 3600) % 24; var minutes = parseInt(newNum / 60) % 60; var seconds = parseInt(newNum % 60, 10);
            newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) } if (isComma) { while (/(\d+)(\d{3})/.test(newNum.toString())) { newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2") } } if (settings.formatter) { newNum = settings.formatter.call(this, newNum) } nums.unshift(newNum) } $this.data("counterup-nums", nums);
        $this.text(counter.beginAt); var f = function() { if (!$this.data("counterup-nums")) { settings.callback.call(this); return } $this.html($this.data("counterup-nums").shift()); if ($this.data("counterup-nums").length) { setTimeout($this.data("counterup-func"), counter.delay) } else { $this.data("counterup-nums", null);
            $this.data("counterup-func", null);
            settings.callback.call(this) } };
        $this.data("counterup-func", f);
        setTimeout($this.data("counterup-func"), counter.delay) };
      $this.waypoint(function(direction) { counterUpper();
        this.destroy() }, { offset: counter.offset + "%", context: counter.context }) }) }

  $.fn.dopeNav = function (options) {

        // Variables
        var navContainer = $('.dope-nav-container');
        var dope_nav = $('.dopenav ul');
        var dope_navli = $('.dopenav > ul > li');
        var navbarToggler = $('.dope-navbar-toggler');
        var closeIcon = $('.dopecloseIcon');
        var navToggler = $('.navbarToggler');
        var dopeMenu = $('.dope-menu');
        var var_window = $(window);

        // default options
        var defaultOpt = $.extend({
            breakpoint: 991,
            openCloseSpeed: 350,
            megaopenCloseSpeed: 700,
            alwaysHidden: false,
            openMobileMenu: 'left',
            dropdownRtl: false,
            stickyNav: false,
            stickyFooterNav: false
        }, options);

        return this.each(function () {

            // // light or dark theme
            // if (defaultOpt.theme === 'light' || defaultOpt.theme === 'dark') {
            //     navContainer.addClass(defaultOpt.theme);
            // }

            // open mobile menu direction 'left' or 'right' side
            if (defaultOpt.openMobileMenu === 'left' || defaultOpt.openMobileMenu === 'right') {
                navContainer.addClass(defaultOpt.openMobileMenu);
            }

            // dropdown rtl
            if (defaultOpt.dropdownRtl === true) {
                navContainer.addClass('dropdown-rtl');
            }

            // navbar toggler
            navbarToggler.on('click', function () {
                navToggler.toggleClass('active');
                dopeMenu.toggleClass('menu-on');
            });

            // close icon
            closeIcon.on('click', function () {
                dopeMenu.removeClass('menu-on');
                navToggler.removeClass('active');
            });

            // add dropdown & megamenu class in parent li class
            dope_navli.has('.dropdown').addClass('cn-dropdown-item');
            dope_navli.has('.megamenu').addClass('megamenu-item');

            // adds toggle button to li items that have children
            dope_nav.find('li a').each(function () {
                if ($(this).next().length > 0) {
                    $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                }
            });

            // expands the dropdown menu on each click
            dope_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
                $(this).parent('li').toggleClass('active');
            });

            // add padding in dropdown & megamenu item
            $('.megamenu-item').removeClass('has-down');

            // expands the megamenu on each click
            dope_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
            });

            // check browser width in real-time
            function breakpointCheck() {
                var windoWidth = window.innerWidth;
                if (windoWidth <= defaultOpt.breakpoint) {
                    navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
                } else {
                    navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
                }
            }

            breakpointCheck();

            var_window.on('resize', function () {
                breakpointCheck();
            });

            // always hidden enable
            if (defaultOpt.alwaysHidden === true) {
                navContainer.addClass('breakpoint-on').removeClass('breakpoint-off');
            }

            // sticky
            if (defaultOpt.stickyNav === true) {
                var_window.on('scroll', function () {
                    if (var_window.scrollTop() > 0) {
                        navContainer.addClass('dope-sticky');
                    } 
                    // else {
                    //     navContainer.removeClass('dope-sticky');
                    // }
                });
            }

            // footer sticky
            if (defaultOpt.stickyFooterNav === true) {
                navContainer.addClass('dope-sticky-footer');
            }
        });
    };

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);


  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.scroll-top').fadeIn(600);
    } else {
      $('.scroll-top').fadeOut(600);
    }
  });
  $('.scroll-top').on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  // ------------------------------------------------------------------------------ //
  // Preloader 
  // ------------------------------------------------------------------------------ //

  $(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 3000);

  });


  // ------------------------------------------------------------------------------ //
  // Active Menu 
  // ------------------------------------------------------------------------------ //


  $('#dopeNav').dopeNav({
    stickyNav: true,
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 500);
    e.preventDefault();
  });



  // ------------------------------------------------------------------------------ //
  // Team carousel  
  // ------------------------------------------------------------------------------ //


  $("#team-carusel").owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Service carousel  
  // ------------------------------------------------------------------------------ //


  $("#service-carusel").owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Testimonial carousel  
  // ------------------------------------------------------------------------------ //


  $("#testimonial-carusel").owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });


  $("#testimonial-carusel2").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
  });


  // ------------------------------------------------------------------------------ //
  // Screenshot carousel  
  // ------------------------------------------------------------------------------ //


  $('#screenshot-carusel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 5,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    center: true,
    navText: ['<span class="ti ti-angle-left"></span>', '<span class="ti ti-angle-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });






  // ------------------------------------------------------------------------------ //
  // Stat Counter  
  // ------------------------------------------------------------------------------ //

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // ------------------------------------------------------------------------------ //
  // Skill Section  
  // ------------------------------------------------------------------------------ //


  $(document).ready(function () {

    $(".skills").addClass("active");
    $(".skills .skill .skill-bar span").each(function () {
      $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
      }, 1000);
      $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function () {
      $(".skills .skill .skill-bar span b").animate({
        "opacity": "1"
      }, 1000);
    }, 2000);
  });

  // ------------------------------------------------------------------------------ //
  // Accordian   
  // ------------------------------------------------------------------------------ //


  var allPanels = $(".accordion > dd").hide();
  allPanels.first().slideDown("easeOutExpo");
  $(".accordion").each(function () {
    $(this).find("dt > a").first().addClass("active").parent().next().css({
      display: "block"
    });
  });

  $(document).on('click', '.accordion > dt > a', function (e) {
    var current = $(this).parent().next("dd");
    $(this).parents(".accordion").find("dt > a").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
    $(this).parent().next().slideDown("easeOutExpo");
    return false;

  });


  // ------------------------------------------------------------------------------ //
  // Skillbar
  // ------------------------------------------------------------------------------ //


  $(".skill_main").each(function () {
    $(this).waypoint(function () {
      var progressBar = $(".progress-bar");
      progressBar.each(function (indx) {
        $(this).css("width", $(this).attr("aria-valuenow") + "%")
      })
    }, {
      triggerOnce: true,
      offset: 'bottom-in-view'

    });
  });


  // ------------------------------------------------------------------------------ //
  // Parallux Background 
  // ------------------------------------------------------------------------------ //

  $(window).stellar();


  // ------------------------------------------------------------------------------ //
  // Contact Form  
  // ------------------------------------------------------------------------------ //

  var submitContact = $('#submit-message'),
    message = $('#msg');

  submitContact.on('click', function (e) {
    e.preventDefault();

    var $this = $(this);

    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function (data) {

        if (data.info !== 'error') {
          $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });

})(jQuery);