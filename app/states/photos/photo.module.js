/** main config and controller */
import routeConfig from './photo.routes';
import PhotoController from './photo.controller';

/** module name */
let moduleName = 'siteSnap.photo';

/** module setter */
angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'siteSnap.photo - run' );
	} )
	.controller( 'PhotoController', PhotoController );

/** exporting the module for use in the main app */
export default moduleName;