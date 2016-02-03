/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'app.photo', {
			url         : '/photo',
			views       : {
				'menuContent': {
					template: require( './photo.html' )
				}
			},
			controller  : 'PhotoController',
			controllerAs: 'vm'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
