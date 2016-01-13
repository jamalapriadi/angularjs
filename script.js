var myApp=angular.module("myApp",['ngRoute','ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'page/home.html',
			controller:'mainController'
		})

		.when('/about',{
			templateUrl:'page/about.html',
			controller:'aboutController'
		})

		.when('/contact',{
			templateUrl:'page/contact.html',
			controller:'contactController'
		})

		.when('/angular-home',{
			templateUrl:"angular/home.html",
			controller:'angularHomeCtrl'
		})

		.when('/angular-intro',{
			templateUrl:"angular/intro.html",
			controller:'angularIntroCtrl'
		})

		.when('/angular-expression',{
			templateUrl:"angular/expression.html",
			controller:"angularExCtrl"
		})

		.when('/angular-module',{
			templateUrl:"angular/module.html",
			controller:"angularModulCtrl"
		})
});

myApp.controller('mainController',function($scope,$http,$location){
	$scope.message="Setiap orang datang dan melihatnya";
	$http.get("http://sinau.dev/lv4/public/api/event").success(function(result){
		$scope.data=result;
	});
});

myApp.controller('aboutController',function($scope){
	$scope.message="Lihat! saya ada di halaman about";
});

myApp.controller('contactController',function($scope){
	$scope.message="Kontak kami";
});

myApp.controller('angularHomeCtrl',function($scope){
	$scope.message="Angular Home";
})

myApp.controller('angularIntroCtrl',function(){

})

myApp.controller('angularExCtrl',function(){

})

myApp.controller('angularModulCtrl',function($scope){
	
})