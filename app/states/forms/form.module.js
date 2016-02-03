/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './form.routes';
import FormController from './form.controller';

let moduleName = 'siteSnap.form';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'siteSnap.forms module - run' );
	} )
	.controller( 'FormController', FormController );

export default moduleName;