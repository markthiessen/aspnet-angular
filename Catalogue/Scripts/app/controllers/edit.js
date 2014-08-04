angular.module('CatalogueApp').controller('EditCtrl', ['$scope', '$routeParams', '$resource', '$location',
    function ($scope, $routeParams, $resource, $location) {

        var id = $routeParams.id;
        $scope.title = 'Edit Product';

        if (id) {
            var Product = $resource('/api/products/:id');
            $scope.product = Product.get({ id: id });
        }

        $scope.saveChanges = function () {
            $scope.product.$save(function () {
                $location.url('/');
            });
        };
    }]);