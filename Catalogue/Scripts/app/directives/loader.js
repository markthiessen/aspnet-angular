angular.module('CatalogueApp').directive('loader',
    [
        function(){
            return {
                restrict: 'EA',
                template: '<div class="loader">'
                            +'<span class="text">Loading</span>'
                            +    '<span class="l-1"></span>'
                            +    '<span class="l-2"></span>'
                            +    '<span class="l-3"></span>'
                            +    '<span class="l-4"></span>'
                            +    '<span class="l-5"></span>'
                            +    '<span class="l-6"></span>'
                            +'</div>',
                replace: true,
                link: function ($scope, elm, attrs) {
                    if(attrs.loaderText)
                        elm.find('.text').text(attrs.loaderText);
                }
            };
        }
    ]);

