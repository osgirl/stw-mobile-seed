'use strict';

/** Load import Modules. */
import walkThroughModule from 'states/walkthrough/walkthrough.module';
import homeModule from 'states/home/home.module';
import formsModule from 'states/forms/form.module';
import photosModule from 'states/photos/photo.module.js';

/** Load custom components **/
import backButton from './components/backbutton/backButton.directive';

/** Load app routes */
import appRoutes from './core/app.routes';

/** Load route states, and main config function */
import { StateChangeStart, StateChangeSuccess, StateNotFound, StateChangeError } from './core/app.states';
import AppRun from './core/app.run';


/** Load Route Controller module */
import AppController from './core/app.controller';

/** Main App module variable */
let moduleName = 'stwSeed';

/** Main App module setter with module name injected */
angular.module( moduleName, [
	'ionic',
	walkThroughModule,
	homeModule,
	formsModule,
	photosModule,
	backButton  // backbutton directive
] )
/** Define default routes of the app */
	.config( appRoutes )

/** Add constants, holding version info and any configs */
	.constant( 'version', require( '../package.json' ).version )
	.constant( 'config', require( './app.config' ) )

/** Add State Management */
	.run( StateChangeStart )
	.run( StateChangeSuccess )
	.run( StateNotFound )
	.run( StateChangeError )

/** pass import to the run function */
	.run( AppRun )

/** Add the default app controller */
	.controller( 'AppController', AppController );

/** Main App export, this makes the module available */
export default moduleName
