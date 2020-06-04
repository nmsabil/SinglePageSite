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