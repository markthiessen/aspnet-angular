angular.module('CatalogueApp').directive('loader',
    [
        function(){
            return {
                templateUrl: '/Scripts/app/directives/_loader.html',
                replace: true,
                link: function ($scope, elm, attrs) {

                }
            };
        }
    ]);