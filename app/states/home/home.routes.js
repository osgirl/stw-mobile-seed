/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'app.home', {
			url         : '/sketches',
			views       : {
				'menuContent': {
					template: require( './home.html' )
				}
			},
			controller  : 'HomeController',
			controllerAs: 'vm'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
