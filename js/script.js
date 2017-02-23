/* JS TO MAKE LITY VIDEO OPEN */

src="vendor/jquery.js"
src="dist/lity.js"




/* ADDS WHITE BACKGROUND TO HEADER WHEN SCROLLED PAST 50PX */

        $(window).on('scroll', function() {
            var y = $(this).scrollTop();

            $('header nav').removeClass('show');

            if (y > 50)
                $('header').addClass('scroll');
            else $('header').removeClass('scroll');
        });


/* LOGO 30% SMALLER ON SCROLL */

        $(document).ready(function() {

        $(document).on("scroll", function() {
            if ($(document).scrollTop() > 100) {
                $("header").addClass("smaller");
            } else {
                $("header").removeClass("smaller");
            }
        });
      });


/* NAV BAR LIST ITEMS ACTIVATE */

        $(document).ready(function() {
            $(document).on("scroll", onScroll);

            //smoothscroll
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                $(document).off("scroll");

                $('header nav a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');

                var target = this.hash,
                    menu = target;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top + 2
                }, 500, 'swing', function() {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });
        });

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('header nav a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('header nav a').removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            });
        }


/* FORM LABEL ANIMATES*/

    $(document).ready(function() {

$('input').on('blur', function(){
  if( !$(this).val() == "" ){
    $(this).next().addClass('stay');
  } else {
    $(this).next().removeClass('stay');
  }
});
                  });

  $(document).ready(function() {
    $('textarea').on('blur', function(){
      if( !$(this).val() == "" ){
        $(this).next().addClass('stay');
        } else {
            $(this).next().removeClass('stay');
            }
          });
      });
