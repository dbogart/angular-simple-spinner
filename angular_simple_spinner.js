angular.module('angularSimpleSpinner',['ui.router', 'ngSanitize']);
angular.module('angularSimpleSpinner').directive('simpleSpinner', function($rootScope) {

    return {

        restrict : "ECA",
        transclude : true,
        template : "<div class=\"angular-center-container\">\
                        <div class=\"angular-centered\" ng-transclude>\
                        </div>\
                    </div>",

        link: function(scope, element) {

            element.addClass('ng-hide');

            var unregister = $rootScope.$on('$stateChangeStart', function() {
                element.removeClass('ng-hide');
            });
            $rootScope.$on('$stateChangeSuccess', function() {
                element.addClass('ng-hide');
            });
            scope.$on('$destroy', unregister);
        }
    };
});