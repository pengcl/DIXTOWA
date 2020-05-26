'use strict';

app.directive("ngTabs", ['$location', function ($location) {
    return {
        restrict: 'C',
        scope: {
            outputData: '='
        },
        link: function (scope, element, attrs) {

            scope.tab = $.parseJSON(attrs.tab);
            scope.$emit('tab', scope.tab);
        }
    };
}]);
