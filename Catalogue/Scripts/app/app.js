angular.module('CatalogueApp', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
           .when('/', {
               templateUrl: '/Scripts/app/views/index.html',
               controller: 'IndexCtrl'
           })
            .otherwise({
                redirectTo: '/'
            });
    }]);