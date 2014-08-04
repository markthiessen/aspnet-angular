angular.module('CatalogueApp').controller('NewCtrl', ['$scope', '$routeParams', '$resource', '$location',
    function ($scope, $routeParams, $resource, $location) {

        $scope.title = 'New Product';

        var Product = $resource('/api/products/:id');
        $scope.product = new Product();

        $scope.saveChanges = function () {
            $scope.product.$save(function () {
                $location.url('/');
            });
        };
    }]);