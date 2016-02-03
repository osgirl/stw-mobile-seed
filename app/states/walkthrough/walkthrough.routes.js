'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'walkthrough', {
			url     : '/',
			abstract: false,
			template: require( './walkthrough.html' )
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
