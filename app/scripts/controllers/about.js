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
   $scope.response = [];
   $http.get("http://localhost:8080/timecard")
   .then(
     function(response){
       console.log(response.data);
       $scope.responses = response.data;
       console.log("yo");
     }
   );
 }
]);
