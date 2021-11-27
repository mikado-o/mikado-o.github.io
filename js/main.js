/* -------------------------------------------------------------------
 * Plugin Name           : Matychale - Masonry & Grid Gallery
 * Author Name           : Yucel Yilmaz
 * Author URI            : https://codecanyon.net/user/aip_theme3434
 * Created Date          : 12 February 2020
 * Version               : 1.0
 * File Name             : main.js
------------------------------------------------------------------- */

/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Gallery Cobbles
 * 02.Gallery Masonry
 * 03.Gallery Grid
 * 04.Dynamic Copyright
*/

$(function() {
    "use strict";

    // Call all ready functions
    matychale_Gallery_Cobbles();
    matychale_Gallery_Masonry();
    matychale_Gallery_Masonry_Two();
    matychale_Gallery_Grid();
    matychale_Copyright();
});

/* ------------------------------------------------------------------- */
/* 01.Gallery Cobbles
/* ------------------------------------------------------------------- */
function matychale_Gallery_Cobbles() {
    "use-strict";

    // Variables 
    var galleryWrapper         = $('.matychale-gallery-cobbles'),
        portfolioFilterBtn     = galleryWrapper.find('.portfolio-filter > a'),
        portfolioCobbles       = $('.portfolio-cobbles-item');

     //  Portfolio Gallery Popup */
     portfolioCobbles.magnificPopup({
         delegate: '.portfolio-zoom-link',
         type: 'image',
         gallery: {
             enabled: true
         }
     });

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on("click", function() {
        portfolioFilterBtn.removeClass('current');
        $(this).addClass('current');
        return false;
    });

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        var grid = $('.portfolio-gallery').isotope({
            itemSelector: '.portfolio-cobbles-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.portfolio-cobbles-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on('click', function() {
            var filterValue = $(this).attr('data-gallery-filter');
            grid.isotope({
                filter: filterValue
            });
        });
    });
}

/* ------------------------------------------------------------------- */
/* 02.Gallery Masonry
/* ------------------------------------------------------------------- */
function matychale_Gallery_Masonry() {
    "use-strict";

    // Variables 
    var galleryWrapper         = $('.matychale-gallery-masonry'),
        portfolioFilterBtn     = galleryWrapper.find('.portfolio-filter > a'),
        portfolioCobbles       = $('.gallery-masonry-item');

     //  Portfolio Gallery Popup */
     portfolioCobbles.magnificPopup({
         delegate: '.portfolio-zoom-link',
         type: 'image',
         gallery: {
             enabled: true
         }
     });

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on("click", function() {
        portfolioFilterBtn.removeClass('current');
        $(this).addClass('current');
        return false;
    });

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        var grid = $('.portfolio-masonry-wrap').isotope({
            itemSelector: '.gallery-masonry-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery-masonry-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on('click', function() {
            var filterValue = $(this).attr('data-gallery-filter');
            grid.isotope({
                filter: filterValue
            });
        });
    });
}

/* ------------------------------------------------------------------- */
/* 02.Gallery Masonry 2
/* ------------------------------------------------------------------- */
function matychale_Gallery_Masonry_Two() {
    "use-strict";

    // Variables 
    var galleryWrapper         = $('.matychale-gallery-masonry-two'),
        portfolioFilterBtn     = galleryWrapper.find('.portfolio-filter > a'),
        portfolioCobbles       = $('.gallery-masonry-item-two');

     //  Portfolio Gallery Popup */
     portfolioCobbles.magnificPopup({
         delegate: '.portfolio-zoom-link',
         type: 'image',
         gallery: {
             enabled: true
         }
     });

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on("click", function() {
        portfolioFilterBtn.removeClass('current');
        $(this).addClass('current');
        return false;
    });

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        var grid = $('.portfolio-masonry-two-wrap').isotope({
            itemSelector: '.gallery-masonry-item-two',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery-masonry-item-two',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on('click', function() {
            var filterValue = $(this).attr('data-gallery-filter');
            grid.isotope({
                filter: filterValue
            });
        });
    });
}

/* ------------------------------------------------------------------- */
/* 03.Gallery Grid
/* ------------------------------------------------------------------- */
function matychale_Gallery_Grid() {
    "use-strict";

    // Variables 
    var galleryWrapper         = $('.matychale-gallery-grid'),
        portfolioFilterBtn     = galleryWrapper.find('.portfolio-filter > a'),
        portfolioGrid          = $('.portfolio-grid');

    //  Portfolio Gallery Popup */
    portfolioGrid.magnificPopup({
        delegate: '.portfolio-zoom-link',
        type: 'image',
		gallery: {
			enabled: true
		}
    });

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on("click", function() {
        portfolioFilterBtn.removeClass('current');
        $(this).addClass('current');
        return false;
    });

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        var grid = $(".portfolio-grid-wrap").isotope({
            itemSelector: '.portfolio-grid',
            percentPosition: true,
            masonry: {
                columnWidth: '.portfolio-grid',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on('click', function() {
            var filterValue = $(this).attr('data-gallery-filter');
            grid.isotope({
                filter: filterValue
            });
        });
    });
}

/* ------------------------------------------------------------------- */
/* 04.Dynamic Copyright
/* ------------------------------------------------------------------- */
function matychale_Copyright() {
    "use-strict";

    // Variables
    var fullYearCopyright = $('#fullYearCopyright'),
        getFullYearDate = new Date().getFullYear();

    fullYearCopyright.text(getFullYearDate);
}