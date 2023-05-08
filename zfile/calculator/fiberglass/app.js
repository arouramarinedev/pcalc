'use strict';

var calculator = angular.module("calculator", ["ui.router"]);

calculator.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "partials/index.html",
            controller: "CalcCtrl"
        })
        .state('products', {
            url: "/products/:full/:half",
            templateUrl: "partials/products.html",
            controller: "CalcCtrl"
        });
}]);