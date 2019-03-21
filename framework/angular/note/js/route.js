(function() {
    'use strict';

    var routeApp = angular.module('routeApp', []);

    routeApp.config(function($routeProvider) {
        $routeProvider.when('/hello', {
            templateUrl: 'tpls/hello.html',
            controller: 'HelloCtrl'
        }).when('/list', {
            templateUrl: 'tpls/list.html',
            controller: 'ListCtrl'
        }).otherwise({
            redirectTo: '/hello'
        });
    });
}());
