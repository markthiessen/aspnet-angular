angular.module('CatalogueApp').directive('number',
    [
        function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function ($scope, elm, attrs, ctrl) {

                    function isNumber(value) {
                        return !isNaN(value)
                    }

                    // add a parser that will process each time the value is 
                    // parsed into the model when the user updates it.
                    ctrl.$parsers.unshift(function (value) {
                        // test and set the validity after update.
                        var valid = isNumber(value);
                        ctrl.$setValidity('number', valid);

                        // if it's valid, return the value to the model, 
                        // otherwise return undefined.
                        return valid ? value : undefined;
                    });

                    // add a formatter that will process each time the value 
                    // is updated on the DOM element.
                    ctrl.$formatters.unshift(function (value) {
                        // validate.
                        ctrl.$setValidity('number', isNumber(value));

                        // return the value or nothing will be written to the DOM.
                        return value;
                    });
                }
            };
        }
    ]);