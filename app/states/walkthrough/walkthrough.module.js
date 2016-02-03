'use strict';

/** import module specific style **/
import './walkthrough.scss';

/** main config and controller */
import routeConfig from './walkthrough.routes';
import WalkthroughController from './walkthrough.controller';

/** module name */
let moduleName = 'siteSnap.walkthrough';

/** module setter */
angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'siteSnap.walkthrough - run' );
	} )
	.controller( 'WalkthroughController', WalkthroughController );

/** exporting the module for use in the main app */
export default moduleName;