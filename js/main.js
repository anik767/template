(function ($) {
    "use strict";

    // Handle multi-level dropdown
    $('.nav-list').on('click', function (e) {
        e.stopPropagation(); // Prevent bubbling up the DOM

        let $this = $(this);
        let $submenu = $this.next('ul');

        // Close other open submenus at the same level
        $this.closest('ul').find('> .nav-list').not($this).removeClass('show').next('ul').slideUp().removeClass('show');

        // Toggle current submenu
        $this.toggleClass('show');
        $submenu.stop(true, true).slideToggle().toggleClass('show');
    });

    // Mobile Navigation Toggle
    $('.nav-open, .nav-close a').on('click', function () {
        $('.mobile-nav-wrapper, .mobile-nav, .dark-shadow').toggleClass('navActive');
    });

    // Close navigation when clicking outside
    $('.dark-shadow').on('click', function () {
        $('.mobile-nav-wrapper, .mobile-nav, .dark-shadow').removeClass('navActive');
    });

    // WOW.js Initialization
    jQuery(window).on('load', function () {
        new WOW().init();
    });

})(jQuery);
