!function(e) {
    "undefined" == typeof module
        ? this.charming = e
        : module.exports = e
}

(function(e, n) {
    "use strict";

    n = n || {};

    var t = n.tagName || "span",
        o = null != n.classPrefix
            ? n.classPrefix
            : "c",
        r = 1,
        a = function(e) {
            for (
                var n = e.parentNode,
                    a = e.nodeValue,
                    c = a.length,
                    l = -1;
                    ++l < c;
            ) {
                var d = document.createElement(t);
                    o && (d.className = o + r, r++),
                    d.appendChild(document.createTextNode(a[l])),
                    n.insertBefore(d, e)
            }
            n.removeChild(e)
        };

    return function c(e) {
        for (
            var n = [].slice.call(e.childNodes),
            t = n.length, o = -1; ++o < t;
        )

        c(n[o]);

        e.nodeType === Node.TEXT_NODE && a(e)
    }(e),
    e

});


{
	const
		DOM = {};
		DOM.intro = document.querySelector('.content--intro');
		DOM.shape = DOM.intro.querySelector('svg.shape');
		DOM.path = DOM.shape.querySelector('path');
		DOM.enter = document.querySelector('.enter');

		charming(DOM.enter);
		DOM.shape.style.transformOrigin = '50% 0%';

	const init = () => {
		imagesLoaded(document.body, {background: true}, () => document.body.classList.remove('loading'));
		DOM.enter.addEventListener('click', navigate);
		DOM.enter.addEventListener('touchenter', navigate);
	};

	let loaded;

	const navigate = () => {
		if (loaded) return;
		loaded = true;

		anime({
			targets: DOM.intro,
			duration: 1100,
			easing: 'easeInOutSine',
			translateY: '-200vh'
		});

		anime({
			targets: DOM.shape,
			scaleY: [
				{value:[0.8,1.8], duration: 550, easing: 'easeInQuad'},
				{value:1, duration: 550, easing: 'easeOutQuad'}
			]
		});

		anime({
			targets: DOM.path,
			duration: 1100,
			d: DOM.path.getAttribute('pathdata:id')
		});
	};

	let isActive;
	let enterTimeout;

	const enterHoverInFn = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.enterLetters);
	}, 50);

	init();
};
