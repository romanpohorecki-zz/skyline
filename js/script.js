<script src="https://code.jquery.com/jquery-3.1.0.js"></script>

<script type="text/javascript">
    $('header .fa').on('click', function() {
        $('header nav').toggleClass('show');
    });

    $(window).on('scroll', function() {
        var y = $(this).scrollTop();

        $('header nav').removeClass('show');

        if (y > 50)
            $('header').addClass('scroll');
        else $('header').removeClass('scroll');
    });
</script>

<!--JS TO MAKE VIDEO OPEN -->
<script src="vendor/jquery.js"></script>
<script src="dist/lity.js"></script>


<!-- LOGO 30% SMALLER ON SCROLL -->

<script type="text/javascript">
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 100) {
            $("header").addClass("smaller");
        } else {
            $("header").removeClass("smaller");
        }
    });
</script>


<script>
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
</script>
