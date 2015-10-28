$(document).ready(function() {
    $(".menu-switch").click(function() {
        $(".menu-switch").toggleClass("menu--open");
        $(".slider").toggleClass("menu--open");
    });
});
