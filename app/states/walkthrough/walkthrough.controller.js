function WalkthroughController($state, $ionicSlideBoxDelegate, $ionicNavBarDelegate) {

	let walkthrough = {
		start       : startApp,
		next        : next,
		previous    : previous,
		slideChanged: slideChanged
	};

	return walkthrough;

	/////////////////////

	function startApp() {

		// Disable back button on this controller
		$ionicNavBarDelegate.showBackButton( false );

		$state.go( 'app.home' );
	}

	function next() {
		$ionicSlideBoxDelegate.next();
	}

	function previous() {
		$ionicSlideBoxDelegate.previous();
	}

	function slideChanged(index) {
		let vm = this;
		vm.slideIndex = index;
		console.log( index );
	}
}

WalkthroughController.$inject = ['$state', '$ionicSlideBoxDelegate', '$ionicNavBarDelegate'];
export default WalkthroughController;