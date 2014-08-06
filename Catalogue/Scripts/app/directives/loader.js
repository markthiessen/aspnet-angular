angular.module('CatalogueApp').directive('loader',
    [
        function () {
            return {
                restrict: 'EA',
                template: function (element, attributes) {
                    return '<div class="loader">'
                            + '<span class="text">'
                                + (attributes.loaderText || 'Loading')
                            + '</span>'
                            + '<span class="l-1"></span>'
                            + '<span class="l-2"></span>'
                            + '<span class="l-3"></span>'
                            + '<span class="l-4"></span>'
                            + '<span class="l-5"></span>'
                            + '<span class="l-6"></span>'
                            + '</div>';
                },
                replace: true,
                link: function ($scope, elm, attrs) {
                    //if we wanted to add some listeners here we could...
                }
            };
        }
    ]);

