angular.module('CatalogueApp').controller('EditCtrl', ['$scope', '$routeParams', '$resource', '$location',
    function ($scope, $routeParams, $resource, $location) {

    var Product = $resource('/api/products/:id');
    $scope.product = Product.get({ id: $routeParams.id});

    $scope.saveChanges = function () {
        $scope.product.$save(function () {
            $location.url('/');
        });
    };
}]);