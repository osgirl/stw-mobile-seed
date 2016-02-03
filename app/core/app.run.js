'use strict';

/**
 * Represents the Run fuction.
 * @constructor
 * @param {object} $rootScope - The Global scope of the app.
 * @param {object} $ionicPlatform - The Global scope of the platform.
 */
function AppRun($rootScope, $ionicPlatform) {

	$rootScope.csModelOptions = {
		debounce: {
			default1: 150,
			blur   : 0
		}
	};

	$ionicPlatform.ready( function () {

		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
			cordova.plugins.Keyboard.disableScroll( true );

		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	} );
}

export default AppRun;
