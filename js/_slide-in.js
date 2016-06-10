// Copyright © Mobify


/*
    Copyright © 2012 Digital Fusion
    —
    Licensed under the MIT license.
    http://teamdf.com/jquery-plugins/license/
    —
    Original author: Sam Sehnert
    Modified by: Ben Groulx, Mobify
*/

(function($) {

    $.fn.visible = function(partial) {

        var
            viewTop       = $(window).scrollTop(),
            viewBottom    = $(window).scrollTop() + $(window).height(),
            _top          = $(this).offset().top,
            _bottom       = $(this).offset().top + $(this).height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var products = $('.c-segment');

products.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass('x-already-visible');
    }
});

$(window).scroll(function(event) {
    products.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass('x-slide-in');
        }
    });
});
