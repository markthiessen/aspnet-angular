angular.module('CatalogueApp').controller('IndexCtrl', ['$scope', '$resource', function ($scope, $resource) {

    var Product = $resource('/api/products/:id');
    $scope.products = Product.query();

}]);