/*
	:::: More Shadows ::::

	Author	: Tom Knabe -  a modification of Four Shadows by Santhosh Sundar https://github.com/Gigacore/four-shadows
	URL 	: https://github.com/knabe/
	License : MIT
*/

(function (moreShadows, $, undefined) {

	// Settings.
	moreShadows.settings = {
		shadow	: '20px', 	// in px size of shadow.
		defaultTime	: 5, 	// in 24Hr. Casts shadow to standard 5 o'clock if something goes wrong.
		color : '#000',		// color of shadow
		$el			: $('.ms-cast'), // element you want to put shadow.
	}

	// Casts shadow based on time of the hour. Direction of shadow is
	// based on direction of the 'hour hand' in an analog clock.
	moreShadows.caster = function() {
		var time = new Date(),
			hour = time.getHours(),
			settings = moreShadows.settings;
			$el = settings.$el,
			timeOfDay = hour ? hour : settings.defaultTime,
			shadow = (40* Math.cos(timeOfDay/2 + 3 * Math.PI / 180)) + 'px '+ (40* Math.sin(timeOfDay/2 + 3 * Math.PI / 180))+'px '+settings.shadow+' '+settings.color;


		$el.css({'-webkit-filter': 'drop-shadow('+shadow+')','filter': 'drop-shadow('+shadow+')'})

	}

	// Initialization.
	moreShadows.init = function() {
		moreShadows.caster();
	}

	$(document).ready(function () {
		moreShadows.init();
	});

})(window.moreShadows = window.moreShadows || {}, jQuery);
