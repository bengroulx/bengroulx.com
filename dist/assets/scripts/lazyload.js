// Lazy Load
const lazyTrigger = document.getElementsByClassName('js-lazy-load');
const lazyVisible = document.getElementsByClassName('js-image-visible');

window.onscroll = function() {
    // Don't run the rest of the code if every section is already visible
    if (document.querySelectorAll('.js-lazy-load:not(.js-image-visible)').length === 0) return;

    // Run the check for every section in sections; add the visibile class
    for (const section of lazyTrigger) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.75 && section.getBoundingClientRect().top > 0) {
          section.classList.add('js-image-visible');
        }
    }

    // If a card image is visible (above), swap out the `data-` attribute
    for (var i=0; i<lazyVisible.length; i++) {
        if(lazyVisible[i].getAttribute('data-style')) {
            lazyVisible[i].setAttribute('style', lazyVisible[i].getAttribute('data-style'));
            lazyVisible[i].removeAttribute('data-style');
        }
    }
};
