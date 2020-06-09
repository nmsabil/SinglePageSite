// navbar dark on scroll
window.onscroll = function() {
    navBarSticky();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function navBarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.background = "rgba(51,51,51,1.0)";
    } else {
        navbar.style.position = "absolute";
        navbar.style.top = "30px";
        navbar.style.background = "rgba(51,51,51,0.6)";
    }
}

// youtube video popup
$(".bla-1").modalVideo();

// Number counter up
$(".count_number").counterUp({
    delay: 10,
    time: 1000,
});

// gallery
$("#work").imagesLoaded(function() {
    $(".galary_item").isotope({
        itemSelector: ".singal_item",
        layoutMode: "fitRows",
    });
    // Add isotope click function
    $(".portfolio-filter li").on("click", function() {
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".galary_item").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: 1,
            },
        });
        return false;
    });
});

//

$(".testmonial_active").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    mouseDrag: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        },
    },
});
/*--------------------------
	 brand slide active
	---------------------------- */
$(".brand_slide_active").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    mouseDrag: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        },
    },
});