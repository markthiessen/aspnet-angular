angular.module('CatalogueApp').controller('EditCtrl', ['$scope', '$routeParams', '$resource', '$location',
    function ($scope, $routeParams, $resource, $location) {

        $scope.title = 'Edit Product';

        //initialize view  
        var Product = $resource('/api/products/:id');
        $scope.product = Product.get({ id: $routeParams.id });

        //add method for the view to call
        $scope.saveChanges = function () {
            $scope.product.$save(function () {
                $location.url('/');
            });
        };
    }]);