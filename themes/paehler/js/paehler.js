var paehler = paehler || {};
paehler.slideshow = (function () {
    // ... all vars and functions are in this scope only
    // still maintains access to all globals

	var me = this;

	me.init = function() {
		
	    var slider = document.querySelector('.view-id-homepage_slideshow .view-content');
	    var images = slider.querySelectorAll('img');
	    var cVisible = 'visible';
	    var sDuration = 5000;

	    var slide = function (slider, images, activeImage) {
		window.clearTimeout(window.slideTimer);
		var activeImage = activeImage || 0;
		for (var i = 0; i < images.length; i++) {

		    if (activeImage >= images.length) { activeImage = 0}
		    if (i === activeImage) {
			images[i].classList.add(cVisible);
		    } else {
			images[i].classList.remove(cVisible);
		    }
		}
		activeImage++
		window.slideTimer = window.setTimeout(function() { slide(slider, images, activeImage); }, sDuration);
	    };

	    if (slider && images) {
		slide(slider, images);
    }
    }

    return me;
}());

window.addEventListener('load', paehler.slideshow.init);
