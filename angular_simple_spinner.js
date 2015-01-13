;(function(ng, undefined) {

	ng.module('angularSimpleSpinner', ['ui.router', 'ngSanitize']);
	ng.module('angularSimpleSpinner')
		.directive('simpleSpinner', simpleSpinner);

	/**
	 * Adding our dependencies to $inject so the module may be minified.
	 * @type {array}
	 * @public
	 */
	simpleSpinner.$inject = ['$rootScope'];

	/**
	 * Our directive.
	 * @public
	 * @name simpleSpinner
	 * @memberOf angularSimpleSpinner
	 * @param {object} $rootScope
	 * @return {object}
	 */
	function simpleSpinner($rootScope) {
		// Must assign dependencies before a return statement. Doing this so the file can be minified.
		simpleSpinnerLink.$inject = ['scope', 'element'];

		// Return our directive declaration
		return {
			restrict : "ECA",
			transclude : true,
			template : '<div class="angular-center-container"><div class="angular-centered" ng-transclude></div></div>',
			link: simpleSpinnerLink
		};
		
		/**
		 * Our directives' link.
		 * @public
		 * @name simpleSpinnerLink
		 * @memberOf {angularSimpleSpinner.simpleSpinner}
		 */
		function simpleSpinnerLink(scope, element) {
			hideElement();

			$rootScope.$on('$stateChangeStart', showElement);
			$rootScope.$on('$stateChangeSuccess', hideElement);
			$rootScope.$on('$stateChangeError', hideElement);
			scope.$on('$destroy', hideElement);
			
			/**
			 * Hides the spinner.
			 * @private
			 * @name showElement
			 * @memberOf {angularSimpleSpinner.simpleSpinner.simpleSpinnerLink}
			 */
			function showElement() {
				element.removeClass('ng-hide');
			}

			/**
			 * Shows the spinner.
			 * @private
			 * @name showElement
			 * @memberOf {angularSimpleSpinner.simpleSpinner.simpleSpinnerLink}
			 */
			function hideElement() {
				element.addClass('ng-hide');
			}
		}
	}

})(angular);
