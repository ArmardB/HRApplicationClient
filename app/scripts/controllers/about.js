'use strict';

/**
 * @ngdoc function
 * @name hrappFrontEndApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrappFrontEndApp
 */
angular.module('hrappFrontEndApp',[])
 .controller('AboutCtrl', ['$scope', '$http',
 function ($scope, $http){
   var timeCard = {
     "email": "",
     "startTime": "",
     "endTime": ""

   };
   $scope.responses = [];
   $http.get("http://localhost:8080/timecard").success(function (response) {
                        
            $scope.responses = response.data;
            console.log(response);
        }).error(function(error) {
            console.log(error);
        });
 
 }


 
]);
