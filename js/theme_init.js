/* global jQuery:false */
/* global WORK_TRAVEL_COMPANY_STORAGE:false */

// Theme-specific GoogleMap styles
//=====================================================
function work_travel_company_theme_googlemap_styles($styles) {
	"use strict";
	// Put here your theme-specific code to add GoogleMap styles
	// It will be called before GoogleMap init when page is loaded
	$styles['greyscale'] = [
    	{ "stylers": [
        	{ "saturation": -100 }
            ]
        }
	];
	$styles['inverse'] = [
		{ "stylers": [
			{ "invert_lightness": true },
			{ "visibility": "on" }
			]
		}
	];
	$styles['simple'] = [
    	{ stylers: [
        	{ hue: "#00ffe6" },
            { saturation: -20 }
			]
		},
		{ featureType: "road",
          elementType: "geometry",
          stylers: [
			{ lightness: 100 },
           	{ visibility: "simplified" }
            ]
		},
		{ featureType: "road",
          elementType: "labels",
          stylers: [
          	{ visibility: "off" }
            ]
		}
	];
    $styles['color'] = [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
	return $styles;
}

// Login pop-up window overlay
jQuery(document).ready(function(){
	"use strict";
    jQuery('.popup_login_link, .popup_registration_link').on('click', function(){
        jQuery('#popup_overlay').fadeToggle(300);
    });
    jQuery('#popup_login .popup_close, #popup_registration .popup_close').on('click', function(){
        jQuery('#popup_overlay').fadeOut(300);
    });

    jQuery('.top_panel_top_search .search_field').on('focus', function(){
        jQuery(this).attr('data-placeholder', jQuery(this).attr('placeholder')).removeAttr('placeholder').parents('.search_form').addClass('focused');
    });
    jQuery('.top_panel_top_search .search_field').on('blur', function(){
        jQuery(this).attr('placeholder', jQuery(this).attr('data-placeholder')).parents('.search_form').removeClass('focused');
    });

});