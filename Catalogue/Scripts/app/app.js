﻿angular.module('CatalogueApp', ['ngRoute', 'ngResource', 'ngAnimate'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
           .when('/', {
               templateUrl: '/Scripts/app/views/index.html',
               controller: 'IndexCtrl'
           })
            .when('/products/:id', {
                templateUrl: '/Scripts/app/views/edit.html',
                controller: 'EditCtrl'
            })
            .when('/products/new', {
                templateUrl: '/Scripts/app/views/edit.html',
                controller: 'NewCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

