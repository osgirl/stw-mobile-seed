/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'app.form', {
			url         : '/form',
			views       : {
				'menuContent': {
					template: require( './form.html' )
				}
			},
			controller  : 'FormController',
			controllerAs: 'vm'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
