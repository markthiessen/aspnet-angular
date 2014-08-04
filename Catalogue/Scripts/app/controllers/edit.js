angular.module('CatalogueApp').controller('EditCtrl', ['$scope', '$routeParams', '$resource', '$location',
    function ($scope, $routeParams, $resource, $location) {

        //initialize view
        var id = $routeParams.id;
        $scope.title = 'Edit Product';

        var Product = $resource('/api/products/:id');
        $scope.product = Product.get({ id: id });


        //add method for the view to call
        $scope.saveChanges = function () {
            $scope.product.$save(function () {
                $location.url('/');
            });
        };
    }]);