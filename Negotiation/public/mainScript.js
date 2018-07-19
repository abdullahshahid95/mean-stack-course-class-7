var negotiation = angular.module("negotiation", ['ngRoute']);

negotiation.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    
    when('/home', {
        templateUrl: 'home.html',
        controller: 'homeController'
    }).
    
    when('/contact', {
        templateUrl: 'contact.html',
        controller: 'contactController'
    }).

    when('/services', {
        templateUrl: 'services.html',
        controller: 'servicesController'
    }).

    when('/portfolio', {
        templateUrl: 'portfolio.html',
        controller: 'portfolioController'
    }).

    when('/icons', {
        templateUrl: 'icons.html',
        controller: 'iconsController'
    }).

    when('/typography', {
        templateUrl: 'typography.html',
        controller: 'typographyController'
    }).

    otherwise({
        redirectTo: '/home'
    });
}]);

negotiation.controller('homeController', function($scope){
    console.clear();
    console.log('Home Controller');
});

negotiation.controller('contactController', function($scope){
    console.clear();
    console.log('Contact Controller');
});

negotiation.controller('servicesController', function($scope){
    console.clear();
    console.log("Services Controller");
});

negotiation.controller('portfolioController', function($scope){
    console.clear();
    console.log("Portfolio Controller");
});

negotiation.contoller('iconsController', function($scope){
    console.clear();
    console.log("Icons Controller")
});

negotiation.controller('typographyController', function($scope){
    console.clear();
    console.log("Typegraphy Controller");
})